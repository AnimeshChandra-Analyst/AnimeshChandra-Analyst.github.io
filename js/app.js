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

  // ---- Project cards ----
  function renderProjects() {
    const grid = document.getElementById("project-grid");
    if (!grid) return;

    grid.innerHTML = PROJECTS_DATA.map((p) => `
      <article class="project-card${p.featured ? " featured" : ""}">
        <a class="project-media" href="${p.viewUrl || p.repoUrl || "#"}" target="_blank" rel="noopener">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
        </a>
        <div class="project-body">
          <div class="project-tags">
            ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <a class="project-link" href="${p.viewUrl || p.repoUrl || "#"}" target="_blank" rel="noopener">View project</a>
        </div>
      </article>
    `).join("");

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

  renderKpis();
  renderProjects();
  renderYear();
})();
