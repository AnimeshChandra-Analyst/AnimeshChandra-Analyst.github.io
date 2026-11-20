/* ============================================================
   Renders content from data.js into the page.
   You shouldn't need to edit this file for routine updates.
   ============================================================ */

(function () {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- KPI panel ----
  function renderKpis() {
    const grid = document.getElementById("kpi-grid");
    if (!grid) return;

    grid.innerHTML = KPI_DATA.map((kpi, i) => `
      <div class="kpi-item" data-final="${kpi.value}">
        <span class="kpi-value" id="kpi-value-${i}">${prefersReducedMotion ? kpi.value : "0"}</span>
        <span class="kpi-label">${kpi.label}</span>
      </div>
    `).join("");

    if (prefersReducedMotion) return;

    // Animate numbers once the panel scrolls into view.
    const panel = document.getElementById("kpi-panel");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          KPI_DATA.forEach((kpi, i) => animateValue(`kpi-value-${i}`, kpi.value));
          observer.disconnect();
        }
      });
    }, { threshold: 0.4 });
    observer.observe(panel);
  }

  function animateValue(elId, finalValue) {
    const el = document.getElementById(elId);
    if (!el) return;
    const numericPart = parseInt(finalValue.replace(/[^0-9]/g, ""), 10);
    const suffix = finalValue.replace(/[0-9]/g, "");
    if (isNaN(numericPart)) {
      el.textContent = finalValue;
      return;
    }
    const duration = 900;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.floor(progress * numericPart);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = finalValue;
    }
    requestAnimationFrame(tick);
  }

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function localSrc(src) {
    if (typeof src !== "string") return "";
    if (/^(https?:|javascript:|data:)/i.test(src.trim())) return "";
    return src;
  }

  // ---- Project cards ----
  function renderProjects() {
    const grid = document.getElementById("project-grid");
    if (!grid) return;

    grid.innerHTML = PROJECTS_DATA.map((p) => {
      const externalHref = p.viewUrl || p.repoUrl || "#";
      const studyHref = p.caseStudy
        ? `case-study.html?project=${encodeURIComponent(p.caseStudy)}`
        : "";
      const mediaHref = studyHref || externalHref;
      const mediaAttrs = studyHref ? "" : ` target="_blank" rel="noopener"`;
      return `
      <article class="project-card${p.featured ? " featured" : ""}">
        <a class="project-media" href="${mediaHref}"${mediaAttrs}>
          <img src="${p.image}" alt="${esc(p.title)}" loading="lazy" />
        </a>
        <div class="project-body">
          <div class="project-tags">
            ${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}
          </div>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.description)}</p>
          <div class="project-actions">
            ${studyHref ? `<a class="project-link" href="${studyHref}" aria-label="Case study: ${esc(p.title)}">Case study</a>` : ""}
            <a class="project-link${studyHref ? " is-secondary" : ""}" href="${externalHref}" target="_blank" rel="noopener">View project</a>
          </div>
        </div>
      </article>
    `;
    }).join("");

    if (prefersReducedMotion) {
      document.querySelectorAll(".project-card").forEach((c) => c.classList.add("is-visible"));
      return;
    }

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll(".project-card").forEach((card) => cardObserver.observe(card));
  }

  // ---- Footer year ----
  function renderYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  // ---- Case study page ----
  let pipelineBlock = null;

  function tableHtml(block) {
    const align = block.align || [];
    const head = block.headers.map((h, i) => {
      const style = align[i] === "right" ? ` style="text-align:right"` : "";
      return `<th scope="col"${style}>${esc(h)}</th>`;
    }).join("");
    const body = block.rows.map((row) => {
      const cells = row.map((cell, i) => {
        const style = align[i] === "right" ? ` style="text-align:right"` : "";
        return `<td${style}>${esc(cell)}</td>`;
      }).join("");
      return `<tr>${cells}</tr>`;
    }).join("");
    const caption = block.caption ? `<caption>${esc(block.caption)}</caption>` : "";
    return `<div class="table-wrap"><table class="case-table">${caption}<thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
  }

  function chartHtml(block) {
    const max = Math.max(...block.bars.map((b) => b.value), 0);
    const rows = block.bars.map((b) => {
      const pct = max ? (b.value / max) * 100 : 0;
      return `<div class="bar-row">
        <span class="bar-label">${esc(b.label)}</span>
        <span class="bar-track"><span class="bar-fill" style="width:${pct}%"></span></span>
        <span class="bar-value">${esc(b.display)}</span>
      </div>`;
    }).join("");
    const note = block.note ? `<p class="chart-note">${esc(block.note)}</p>` : "";
    return `<div class="bar-chart">
      <h3>${esc(block.title)}</h3>
      ${rows}
      ${note}
    </div>`;
  }

  function figureHtml(block) {
    const src = localSrc(block.src);
    if (!src) return "";
    const size = block.width && block.height ? ` width="${block.width}" height="${block.height}"` : "";
    return `<figure class="case-figure">
      <img src="${esc(src)}" alt="${esc(block.alt || "")}"${size} loading="lazy" />
      ${block.caption ? `<figcaption>${esc(block.caption)}</figcaption>` : ""}
    </figure>`;
  }

  function linksHtml(block) {
    return `<p class="inline-links">${block.items.map((item) =>
      `<a href="${esc(item.href)}" target="_blank" rel="noopener">${esc(item.label)}</a>`
    ).join("")}</p>`;
  }

  function renderBlock(block) {
    switch (block.type) {
      case "p":
        return `<p>${esc(block.text)}</p>`;
      case "ul":
        return `<ul>${block.items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
      case "note":
        return `<p class="note">${esc(block.text)}</p>`;
      case "table":
        return tableHtml(block);
      case "chart":
        return chartHtml(block);
      case "figure":
        return figureHtml(block);
      case "links":
        return linksHtml(block);
      case "diagram":
        pipelineBlock = block;
        return `<figure class="diagram-panel"><div class="pipeline-host"></div>${
          block.caption ? `<figcaption>${esc(block.caption)}</figcaption>` : ""
        }</figure>`;
      default:
        return "";
    }
  }

  function pipelineSvg(block, vertical) {
    const steps = block.steps;
    const n = steps.length;
    const boxW = vertical ? 300 : 156;
    const boxH = vertical ? 74 : 104;
    const gap = vertical ? 28 : 26;
    const pad = 8;
    const width = vertical ? pad * 2 + boxW : pad * 2 + n * boxW + (n - 1) * gap;
    const height = vertical ? pad * 2 + n * boxH + (n - 1) * gap : pad * 2 + boxH;

    const boxes = steps.map((step, i) => {
      const x = vertical ? pad : pad + i * (boxW + gap);
      const y = vertical ? pad + i * (boxH + gap) : pad;
      const last = i === n - 1;
      const stroke = last ? "#E8963C" : "#5FB3C4";
      const titleY = y + (vertical ? 30 : 44);
      const detailY = y + (vertical ? 52 : 68);
      return `<rect x="${x}" y="${y}" width="${boxW}" height="${boxH}" rx="10" fill="#16222D" stroke="${stroke}" stroke-width="1.5"/>
        <text x="${x + 14}" y="${titleY}" fill="#E6EDF3" font-family="Space Grotesk, sans-serif" font-size="15" font-weight="600">${esc(step.name)}</text>
        <text x="${x + 14}" y="${detailY}" fill="#94A3B3" font-family="Inter, sans-serif" font-size="12">${esc(step.detail)}</text>`;
    }).join("");

    const arrows = steps.slice(0, -1).map((_, i) => {
      if (vertical) {
        const x = pad + boxW / 2;
        const y1 = pad + (i + 1) * boxH + i * gap;
        const y2 = y1 + gap;
        return `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2 - 2}" stroke="#5FB3C4" stroke-width="1.5"/>
          <polyline points="${x - 4},${y2 - 7} ${x},${y2 - 1} ${x + 4},${y2 - 7}" fill="none" stroke="#5FB3C4" stroke-width="1.5"/>`;
      }
      const x1 = pad + (i + 1) * boxW + i * gap;
      const x2 = x1 + gap;
      const y = pad + boxH / 2;
      return `<line x1="${x1}" y1="${y}" x2="${x2 - 2}" y2="${y}" stroke="#5FB3C4" stroke-width="1.5"/>
        <polyline points="${x2 - 7},${y - 4} ${x2 - 1},${y} ${x2 - 7},${y + 4}" fill="none" stroke="#5FB3C4" stroke-width="1.5"/>`;
    }).join("");

    const label = `${block.title}. ${steps.map((s) => s.name).join(", then ")}.`;
    const mode = vertical ? "is-vertical" : "is-horizontal";
    return `<svg class="pipeline-svg ${mode}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(label)}">${arrows}${boxes}</svg>`;
  }

  function drawPipeline() {
    const host = document.querySelector(".pipeline-host");
    if (!host || !pipelineBlock) return;
    const vertical = window.matchMedia("(max-width: 900px)").matches;
    host.innerHTML = pipelineSvg(pipelineBlock, vertical);
  }

  function renderCaseStudy() {
    const root = document.getElementById("case-study");
    if (!root || typeof CASE_STUDIES === "undefined") return;

    const slug = new URLSearchParams(window.location.search).get("project");
    const study = CASE_STUDIES.find((item) => item.slug === slug);
    const meta = document.querySelector('meta[name="description"]');

    if (!study) {
      document.title = "Case study not found | Animesh Chandra";
      root.innerHTML = `
        <a class="back-link" href="index.html#projects">Back to projects</a>
        <h1>That case study isn't on the site.</h1>
        <p class="case-lede">The link doesn't match one of the write-ups. Here's what's there:</p>
        <ul class="missing-list">
          ${CASE_STUDIES.map((item) =>
            `<li><a href="case-study.html?project=${encodeURIComponent(item.slug)}">${esc(item.title)}</a></li>`
          ).join("")}
        </ul>
      `;
      return;
    }

    document.title = `${study.title} | Animesh Chandra`;
    if (meta && study.lede) meta.setAttribute("content", study.lede);
    pipelineBlock = null;

    const toc = study.sections.map((section) =>
      `<a href="#${esc(section.id)}">${esc(section.heading)}</a>`
    ).join("");

    const stats = study.stats
      ? `<div class="stat-row" aria-label="${esc(study.statsHeading || "Key figures")}">${
          study.stats.map((stat) =>
            `<div class="stat"><b>${esc(stat.value)}</b><span>${esc(stat.label)}</span></div>`
          ).join("")
        }</div>${study.statsNote ? `<p class="note">${esc(study.statsNote)}</p>` : ""}`
      : "";

    const linkRow = (study.links || []).map((link, i) =>
      `<a class="btn ${i === 0 ? "btn-primary" : "btn-ghost"}" href="${esc(link.href)}" target="_blank" rel="noopener">${esc(link.label)}</a>`
    ).join("");

    root.innerHTML = `
      <a class="back-link" href="index.html#projects">Back to projects</a>
      <p class="eyebrow">Case study</p>
      <h1>${esc(study.title)}</h1>
      <p class="case-lede">${esc(study.lede)}</p>
      <div class="project-tags">
        ${(study.tags || []).map((tag) => `<span class="tag">${esc(tag)}</span>`).join("")}
      </div>
      <div class="hero-actions case-links">${linkRow}</div>
      ${stats}
      <nav class="case-toc" aria-label="On this page">${toc}</nav>
      ${study.sections.map((section) => `
        <section class="case-block" id="${esc(section.id)}">
          <h2>${esc(section.heading)}</h2>
          ${(section.blocks || []).map(renderBlock).join("")}
        </section>
      `).join("")}
      ${study.footerNote ? `<p class="case-footer-note">${esc(study.footerNote)}</p>` : ""}
    `;

    drawPipeline();
    const query = window.matchMedia("(max-width: 900px)");
    if (query.addEventListener) query.addEventListener("change", drawPipeline);
    else if (query.addListener) query.addListener(drawPipeline);
  }

  // ---- Mobile nav ----
  function initMobileNav() {
    const header = document.querySelector(".site-header");
    const toggle = header && header.querySelector(".nav-toggle");
    const nav = document.getElementById("site-nav");
    if (!header || !toggle || !nav) return;

    const mobileQuery = window.matchMedia("(max-width: 640px)");

    function isOpen() {
      return toggle.getAttribute("aria-expanded") === "true";
    }

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
      header.classList.toggle("is-nav-open", open);
    }

    toggle.addEventListener("click", () => {
      const next = !isOpen();
      setOpen(next);
      if (next) {
        const firstLink = nav.querySelector("a");
        if (firstLink) firstLink.focus({ preventScroll: true });
      }
    });

    nav.addEventListener("click", (event) => {
      const link = event.target.closest("a");
      if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const href = link.getAttribute("href") || "";
      if (href.charAt(0) !== "#") {
        setOpen(false);
        return;
      }
      const target = document.getElementById(href.slice(1));
      if (!target) {
        setOpen(false);
        return;
      }
      // The browser's hash jump moves focus back to the page after we hide
      // the link, which cancels the scroll. Handle the jump here instead.
      event.preventDefault();
      const heading = target.querySelector("h1, h2") || target;
      if (!heading.hasAttribute("tabindex")) heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
      setOpen(false);
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ block: "start", behavior: reduceMotion ? "auto" : "smooth" });
      history.pushState(null, "", href);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOpen()) {
        setOpen(false);
        toggle.focus({ preventScroll: true });
      }
    });

    document.addEventListener("click", (event) => {
      if (isOpen() && !header.contains(event.target)) setOpen(false);
    });

    header.addEventListener("focusout", () => {
      window.setTimeout(() => {
        if (!isOpen()) return;
        if (!header.contains(document.activeElement)) setOpen(false);
      }, 0);
    });

    function onBreakpointChange(event) {
      if (!event.matches) setOpen(false);
    }
    if (mobileQuery.addEventListener) mobileQuery.addEventListener("change", onBreakpointChange);
    else if (mobileQuery.addListener) mobileQuery.addListener(onBreakpointChange);
  }

  renderKpis();
  renderProjects();
  renderCaseStudy();
  renderYear();
  initMobileNav();
})();
