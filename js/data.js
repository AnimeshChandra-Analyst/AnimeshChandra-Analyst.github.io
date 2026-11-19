// Career highlight numbers shown in the hero "KPI panel".
// Keep it to 3 items so it fits cleanly.
const KPI_DATA = [
  { value: "3",    label: "end-to-end data pipelines built and automated" },
  { value: "30",   label: "dbt models across BigQuery projects" },
  { value: "100K", label: "customer orders analyzed for churn and LTV" },
];

// Set "featured: true" on at most one project to give it the wide layout.
const PROJECTS_DATA = [
  {
    featured: true,
    title: "FlowForge GTM Analytics",
    description: "An end-to-end analytics engineering project on a simulated SaaS company. A Python simulator runs FlowForge inside HubSpot and Stripe, the pipeline pulls that data into BigQuery, models it with dbt (PQLs, account health, MRR), pushes results back to the CRM with reverse ETL, and feeds an internal Account Hub app for sales and CS.",
    tags: ["SQL", "Python", "dbt", "BigQuery", "Reverse ETL", "GitHub Actions"],
    image: "images/flowforge-accounts-2026-11-19.png",
    repoUrl: "https://github.com/AnimeshChandra-Analyst/flowforge-gtm-analytics",
    viewUrl: "https://flowforge-account-hub.lovable.app/",
    caseStudy: "flowforge-gtm"
  },
  {
    featured: false,
    title: "Customer Health & Churn Analytics",
    description: "Why almost nobody comes back. Modelled ~100K e-commerce orders into retention, churn, LTV and segmentation, and found that 96.9% of customers never reorder, and that first-purchase category, not delivery or reviews, predicts who returns.",
    tags: ["SQL", "dbt", "BigQuery", "Power BI", "DAX"],
    image: "images/customer-health.png",
    repoUrl: "https://github.com/AnimeshChandra-Analyst/Commercial-Analytics-Project",
    caseStudy: "customer-health"
  },
   {
     featured: false,
     title: "Sweden Job Market Insights",
     description: "A full data pipeline tracking Sweden's data & analytics job market, using dbt and BigQuery for transformation and a Streamlit app surfacing thirteen role types, automated end-to-end with GitHub Actions.",
     tags: ["SQL","python","dbt", "BigQuery", "Streamlit", "GitHub Actions"],
     image: "images/sweden-job-market.png",
     repoUrl: "https://github.com/AnimeshChandra-Analyst/Sweden-Job-Market-Insights",
     viewUrl: "https://animeshchandra-analystappio-sweden-job-market.streamlit.app/",
     caseStudy: "sweden-job-market"
  },
  {
    featured: false,
    title: "ByteHaven: Post-Pandemic Performance Analysis",
    description: "Analyzed 108K+ e-commerce transactions to uncover revenue trends, customer behavior patterns, and product performance insights.",
    tags: ["SQL", "Python", "Data Viz"],
    image: "images/bytss.png",
    repoUrl: "https://github.com/AnimeshChandra-Analyst/ByteHaven-project",
    viewUrl: "https://bit.ly/3EWHd5J"
  },
  {
    featured: false,
    title: "Data Cleaning and EDA with SQL",
    description: "Cleaned and ran exploratory data analysis on company layoff data to surface hiring and industry trends.",
    tags: ["SQL"],
    image: "images/Layoff.jpg",
    viewUrl: "https://bit.ly/3EWHd5J"
  },
  {
    featured: false,
    title: "Tableau Stockholm Airbnb Dashboard",
    description: "An interactive dashboard visualizing Airbnb listings across Stockholm — pricing, availability, and neighborhood trends in the short-term rental market.",
    tags: ["Tableau"],
    image: "images/Sthlm.jpg",
    viewUrl: "https://bit.ly/3CKVhPm"
  },
  {
    featured: false,
    title: "Covid-19 Data Exploration with SQL",
    description: "A SQL analysis of COVID-19 data covering infection rates, mortality statistics, and vaccination progress across regions.",
    tags: ["SQL"],
    image: "images/covid.png",
    viewUrl: "https://bit.ly/4hYpJV0"
  },
];

// Case studies rendered by case-study.html. Facts come from the three public
// repos, plus the dated screenshots Animesh added on 19 November 2026.
// Don't add a number that isn't in one of those.
const CASE_STUDIES = [
  {
    slug: "flowforge-gtm",
    title: "FlowForge GTM Analytics",
    lede: "A fake SaaS company, running in real HubSpot and Stripe, so the models have something real to find. Each morning the pipeline loads that data into BigQuery, builds the metrics in dbt, and sends the useful bits back to the CRM.",
    tags: ["SQL", "Python", "dbt", "BigQuery", "Reverse ETL", "GitHub Actions", "Lovable"],
    links: [
      { label: "GitHub repo", href: "https://github.com/AnimeshChandra-Analyst/flowforge-gtm-analytics" },
      { label: "Account Hub", href: "https://flowforge-account-hub.lovable.app/" }
    ],
    statsHeading: "Current state, 19 Nov 2026",
    stats: [
      { value: "630", label: "accounts" },
      { value: "$9,580", label: "MRR ($114,960 ARR)" },
      { value: "163", label: "active paying (25.9%)" },
      { value: "34", label: "PQLs showing in the app" },
      { value: "8", label: "accounts at risk" }
    ],
    statsNote: "As of 19 November 2026, data refreshed at 15:08. These are the Account Hub tiles. The 34 PQLs haven't been checked against the answer key.",
    footerNote: "The 19 November tiles are from the Account Hub, refreshed at 15:08. The segment table further down is the repo's 17 November write-up. When checked against the answer key on 29 September, all 24 PQLs were Champions. Later PQL lists weren't checked the same way.",
    sections: [
      {
        id: "problem",
        heading: "The problem",
        blocks: [
          { type: "p", text: "FlowForge is a fictional AI app builder for small and mid-sized teams. Free users can upgrade themselves. Bigger accounts go through sales. The questions I wanted the data to answer are the ones a sales and success team actually asks. Who should we call? Which paying customers look ready to leave? Where is the MRR coming from?" },
          { type: "p", text: "I didn't start from a downloaded spreadsheet. A static file has no causes under it, so any insight is really just a description. I wrote a Python simulator that runs the company inside HubSpot's free CRM and Stripe test mode. Every account gets a hidden type, and that type drives how it behaves. The types sit in their own BigQuery dataset. The dbt models are not allowed to read it. After a model runs, I can check it against that answer key instead of just trusting the score." }
        ]
      },
      {
        id: "data",
        heading: "The data",
        blocks: [
          { type: "p", text: "Plans are monthly and priced in USD. Nobody starts on Enterprise. You only get there by winning a deal. One prompt run costs one credit." },
          {
            type: "table",
            caption: "Plan list from the repo.",
            headers: ["Plan", "Price / month", "Seats", "AI credits / month"],
            align: ["left", "right", "right", "right"],
            rows: [
              ["Free", "$0", "1", "50"],
              ["Pro", "$20", "3", "500"],
              ["Team", "$100", "10", "3,000"],
              ["Enterprise", "$1,000", "50", "20,000"]
            ]
          },
          { type: "p", text: "The simulator assigns one of four hidden types. This is the answer key. Half of signups are Ghosts on purpose, because most people who try a free tool never come back. A dataset where everyone is active wouldn't look like a real product." },
          {
            type: "table",
            caption: "Hidden archetypes. The models never see this table.",
            headers: ["Type", "Share", "Employees", "How it behaves"],
            rows: [
              ["Ghost", "50%", "1 to 10", "Tries it on day one, then disappears. Stays on Free."],
              ["Power Solo", "20%", "1", "Heavy daily use, never invites anyone, upgrades to Pro."],
              ["Skeptic Exec", "15%", "100 to 500", "Logs in once or twice a week, often cancels."],
              ["Champion", "15%", "50 to 300", "Grows, invites teammates, hits limits, upgrades."]
            ]
          },
          { type: "p", text: "Each day, accounts emit product events: session started, prompt run, project created, teammate invited, and project published. An event carries a domain and an email, not a CRM id. That's deliberate. The product database doesn't know about the CRM, so the models have to work out which records are the same company." },
          { type: "p", text: "Plan changes aren't a coin flip. If an account has used 80% or more of its credits over the last 30 days, or it's over the seat limit, it might upgrade. The odds depend on its hidden type. If a paid account has used under 15% of its credits, it might downgrade or cancel. Usage is predictive because the simulator makes it predictive." },
          { type: "p", text: "The seed script created the starting 200 companies across HubSpot, Stripe, and the answer key. A one-off backfill wrote about 31,700 usage events over 30 days. After that, a daily script moves the world forward one day. It also adds new signups." },
          { type: "p", text: "I planted messy data, because real extracts are messy. About 5% of HubSpot contacts are duplicates under slightly different emails (HubSpot rejects an exact duplicate email, which is how real CRM dupes show up too). 3% of events have no account domain. 5% of events arrive up to two days late. About 10% of Stripe customers have no link back to the CRM. Refunds aren't built yet." }
        ]
      },
      {
        id: "pipeline",
        heading: "The pipeline",
        blocks: [
          { type: "p", text: "GitHub Actions is scheduled for 05:00 UTC. It can also be started by hand. The job is best effort, so it often runs later than 05:00. The order below is what the workflow file actually does." },
          {
            type: "diagram",
            title: "FlowForge daily pipeline",
            caption: "Simulate writes HubSpot, Stripe, raw usage, and the answer key. Extract copies HubSpot and Stripe into BigQuery. dbt snapshots subscriptions, then rebuilds the marts. Reverse ETL pushes health, usage, and new PQL deals back to HubSpot. The Account Hub reads the marts. dbt test runs after the push, which means a bad test would already be in the CRM. Moving the test earlier is on the to-do list.",
            steps: [
              { name: "Simulate", detail: "One day forward" },
              { name: "Extract", detail: "APIs into raw" },
              { name: "dbt", detail: "Snapshot, then marts" },
              { name: "Reverse ETL", detail: "Back to HubSpot" },
              { name: "Account Hub", detail: "Reads the marts" }
            ]
          },
          { type: "p", text: "The warehouse is BigQuery, project flowforge-509421, in the EU. Raw JSON from the APIs lands in flowforge_raw, next to the product events. The answer key lives in flowforge_sim and is not declared as a dbt source, so a model can't join it by accident." },
          { type: "p", text: "Staging is 7 views, one per raw table: three HubSpot (companies, contacts, deals), three Stripe (customers, subscriptions, invoices), and product usage. They parse, cast, and rename. No business rules. Intermediate is 3 views. One matches a HubSpot company, a Stripe customer, and a product domain to the same business. One is a row per account per day of usage. One is the current plan, price, and status. Marts are 4 tables: account health, product qualified leads, weekly revenue movements, and one overview row per account. The app and the reverse ETL job both read the overview." },
          { type: "p", text: "snap_subscriptions records plan, price, and status over time, so last week's price is still answerable after a full refresh overwrites the current row. plans.csv is a dbt seed that maps Stripe price ids to the plan name, rank, seat limit, and monthly credits." },
          { type: "p", text: "Reverse ETL writes 14 account fields onto every HubSpot company, and opens a deal for a new PQL. HubSpot associations came back empty, so each deal stores the company id as its own property. That's how the script skips accounts that already have a deal, instead of opening a new one every morning." },
          { type: "p", text: "The Account Hub is a three page Lovable app. It reads BigQuery live. There's no copied dataset and no sync step. Accounts is the landing page: MRR, paying accounts, PQLs, and accounts at risk, plus search and filters. Account detail has a 30 day usage chart. Revenue shows weekly new, expansion, contraction, and churned MRR, with ending MRR as a line. Queries are SELECT only, they name their columns, and each one has a maximumBytesBilled cap so a runaway query fails instead of costing money. The account table is fetched once and filtered in the browser." }
        ]
      },
      {
        id: "tools",
        heading: "Tools",
        blocks: [
          { type: "p", text: "Python runs the simulator, the extractor, and the reverse ETL. The daily job uses Python 3.12. SQL and dbt do the modelling. BigQuery is the warehouse. HubSpot and Stripe are both the place the simulator writes to and the place the extractor reads from. GitHub Actions runs the schedule. The Account Hub is built in Lovable, on Lovable's BigQuery connector." }
        ]
      },
      {
        id: "findings",
        heading: "What I found",
        blocks: [
          { type: "p", text: "As of 19 November 2026, data refreshed at 15:08: 630 accounts, $9,580 MRR ($114,960 ARR), 163 active paying accounts (25.9%), 34 PQLs, and 8 accounts at risk. That's what the Account Hub is showing. It isn't a new check of those 34 against the answer key." },
          { type: "note", text: "The pipeline was down from 10 to 14 November because the Google Cloud trial ended and BigQuery went into sandbox mode. That five-day gap makes the health score look worse than reality for a couple of weeks, which is why some at-risk and watch numbers are higher than usual." },
          {
            type: "figure",
            src: "images/flowforge-accounts-2026-11-19.png",
            width: 1520,
            height: 793,
            alt: "FlowForge Accounts page on 19 November 2026, PQL filter on, showing 34 of 630 accounts.",
            caption: "Accounts page with the PQL filter on, as of 19 November 2026. Data refreshed at 15:08. The table is those 34 PQLs, not all 630 accounts."
          },
          {
            type: "figure",
            src: "images/flowforge-account-detail-2026-11-19.png",
            width: 1342,
            height: 793,
            alt: "FlowForge account detail for NordAB, a healthy Team plan account, as of 19 November 2026.",
            caption: "Account detail for NordAB, as of 19 November 2026."
          },
          {
            type: "figure",
            src: "images/flowforge-revenue-2026-11-19.png",
            width: 1366,
            height: 785,
            alt: "FlowForge Revenue page with weekly MRR movements from September to November 2026.",
            caption: "Revenue page, weekly MRR movements, as of 19 November 2026."
          },
          { type: "p", text: "On 29 September 2026, a few days after the daily simulator started, there were 230 accounts and $2,720 MRR. 45% of accounts had signed up and never come back. That's the Ghost type doing what it was built to do." },
          { type: "p", text: "The repo's write-up on 17 November 2026 had the base at 608 accounts and $9,620 MRR. The segment split below is from that write-up, not from the 19 November tiles." },
          {
            type: "table",
            caption: "Segment totals from the repo, 17 November 2026.",
            headers: ["Segment", "Accounts", "Current MRR"],
            align: ["left", "right", "right"],
            rows: [
              ["Healthy paying", "96", "$3,640"],
              ["Watch", "45", "$3,380"],
              ["Sales opportunity (PQL)", "29", "$2,160"],
              ["At risk", "6", "$440"],
              ["Active free", "119", "$0"],
              ["Dormant free", "300", "$0"],
              ["Churned", "13", "$0"]
            ]
          },
          {
            type: "chart",
            title: "MRR by segment, 17 Nov 2026",
            note: "Active free, dormant free, and churned are $0 MRR, so they aren't on this chart. Same snapshot as the table.",
            bars: [
              { label: "Healthy paying", value: 3640, display: "$3,640" },
              { label: "Watch", value: 3380, display: "$3,380" },
              { label: "Sales opportunity", value: 2160, display: "$2,160" },
              { label: "At risk", value: 440, display: "$440" }
            ]
          },
          { type: "p", text: "A product qualified lead is a company with 50 or more employees and at least 2 of these 3 signals in the last 14 days: 3 or more active users, 80% or more of its monthly credits used, or a new teammate invited. I skipped a 0 to 100 score. A short rule is easier to defend when someone asks why a weight is what it is. Sales time is expensive, so only companies big enough for an Enterprise conversation are worth a call." },
          { type: "p", text: "Health is for paying customers only, and it's rules rather than a model, because success needs to know why an account is red. Red means no activity in 14 days, or usage down by more than half versus the previous 14 days. Yellow means usage down by more than 25%. Everything else is green. Failed payments would be a strong third red signal, but Stripe's test card always succeeds, so every test invoice is paid. That's a later version." },
          { type: "p", text: "The overview mart collapses this into one label: churned, sales opportunity, at risk, watch, dormant free, active free, or healthy paying." },
          { type: "p", text: "When checked against the answer key on 29 September, all 24 PQLs were Champions. No false positives in that check. Power Solos are kept out by the 50 employee rule, and Ghosts barely generate usage. I haven't run that check on the 34 PQLs showing on 19 November." },
          { type: "p", text: "On the health model, every account flagged red was a Skeptic Exec. No Champion or Power Solo was flagged red. Of the five paying Skeptic Execs in that check, four came out red or yellow. The model only saw credit usage across two 14 day windows. It never saw the hidden types." },
          { type: "p", text: "Identity resolution covered the planted gap. 203 of 225 accounts matched on the id Stripe stores in its metadata. The other 22 had no link at all and were recovered by matching on company name." },
          { type: "p", text: "The revenue page once disagreed with the accounts page, and the app is what exposed it. Ending MRR showed $4,380 while accounts showed $3,820. The gap was $560, exactly that week's expansion. New MRR was using each subscription's current price, so an account that started on Pro and moved to Team was counted as $100 of new revenue, and then the snapshot added the $80 upgrade again. New MRR now uses the price from the first time the snapshot saw that subscription, and a free to paid conversion counts as new, not expansion. After the fix, ending MRR matches total current MRR." },
          { type: "p", text: "In the week of 28 September, $1,680 of the MRR increase came from upgrades and $320 came from new customers. That's existing accounts growing into the product, which is the Champion behaviour showing up from the outside." },
        ]
      },
      {
        id: "decisions",
        heading: "Decisions and things that broke",
        blocks: [
          { type: "p", text: "A few calls were the whole shape of the project. The rest of the README is a long build log. These are the ones that changed the numbers." },
          { type: "ul", items: [
            "GitHub Actions, not Airflow. A handful of scripts once a day doesn't need a server to look after. At a bigger scale, Airflow would be the right call.",
            "I wrote the extractor. BigQuery's own HubSpot and Stripe connectors were still in preview. The Stripe one transferred pre-built reports rather than fresh data, and the HubSpot one needed scopes the free plan doesn't have. In a job I'd usually reach for Fivetran or Airbyte for a standard source.",
            "Each extract is a full refresh. At a few hundred records it takes seconds, and it can't leave gaps or duplicates. The snapshot is a separate job. Full refresh is right for current state, and it also deletes yesterday. Without the snapshot, expansion and contraction are unknowable, because the old price disappears the moment someone upgrades.",
            "The snapshot runs before dbt run. It reads a view, and views always see live data, so it still catches today's changes. Running it afterwards made the accounts page show today's MRR while the revenue page lagged by a day.",
            "The extractor stores raw JSON plus an extracted_at timestamp. Parsing stays in dbt, where it's in git and can be tested. If a field is needed later, it's already in the raw row. Staging models are views, because they only rename and cast. Marts are tables, because the app and reverse ETL read them over and over.",
            "Usage is dated by when it happened, not when it landed. About 5% of events arrive up to two days late. Ingestion time matters for what to reprocess, not for the report.",
            "There are two MRR columns. One keeps the subscription's price even after it cancels, because that stays a historical fact. The other is zero when the account isn't active, and that's the one to sum. Summing the first quietly inflates a dashboard for months.",
            "Events are left joined onto accounts, never inner joined. Accounts with no events are the ones most likely to leave. An inner join dropped 50 Ghost accounts that signed up before event tracking and had no events at all.",
            "The app reads BigQuery directly. The first plan was to copy marts into Supabase. Lovable already had a BigQuery connector, which removed a whole sync and means the app can't drift away from the warehouse.",
            "Days since last active is calculated in the app from last_active_date, not stored by dbt. The date doesn't go stale. 'How many days ago' depends on today, so precomputing it freezes the number until the next run."
          ] },
          { type: "p", text: "A few limits are still in the model. Health only catches drops, not an account that was always quiet. There was a stretch with no red accounts: 8 of 9 Skeptic Execs had already cancelled, so there wasn't much risk left, but one paying account was using about 3% of its plan and still showed green. The two health windows aren't equal either. The recent window includes today, so it's 15 days against 14, which nudges accounts toward green. Active users in the PQL rule is the max of daily active users over 14 days, not a true distinct count, so three people on three different days count as one. Name matching is also easier here than in real life, because the simulator writes the same company name to both systems. Real names would need cleaning before a fallback match." },
          { type: "p", text: "One more that cost a real outage in the app. A new credits_used_30d column was built locally and the app started reading it, but the change was never pushed. The next scheduled run rebuilt the mart from the older code on GitHub, the column vanished, and the app failed. The fix was to push. GitHub is what the pipeline runs." }
        ]
      },
      {
        id: "next",
        heading: "What's next",
        blocks: [
          { type: "p", text: "Written down in the repo, still to do:" },
          { type: "ul", items: [
            "dbt tests and docs, including a test that ending MRR equals total current MRR. The workflow already calls dbt test. The tests themselves aren't written yet.",
            "Run the build before reverse ETL, so a failed test stops bad data reaching HubSpot.",
            "Add a health rule for usage under 15% of the plan, the same line the simulator uses when it decides to cancel.",
            "Make the daily simulator safe to rerun. Today it appends events and changes Stripe and HubSpot, so a second run in the same day doubles that day's activity. Also pin package versions.",
            "Let the simulator play the sales rep, so deals actually move through the pipeline. Reverse ETL currently never closes a deal."
          ] },
          { type: "p", text: "Later, not in this version: refunds and failed payments, a deal funnel, lost reasons, alerts, and annual billing. Billing history also can't be backdated in Stripe, so revenue history starts when the simulation started. Usage was backfilled 30 days. HubSpot and Stripe records share a creation date, and that's expected." }
        ]
      }
    ]
  },
  {
    slug: "customer-health",
    title: "Customer Health and Churn",
    lede: "Almost nobody comes back. I modelled about 100,000 e-commerce orders to see what, if anything, predicts the few customers who place a second one.",
    tags: ["SQL", "dbt", "BigQuery", "Power BI", "DAX"],
    links: [
      { label: "GitHub repo", href: "https://github.com/AnimeshChandra-Analyst/Commercial-Analytics-Project" }
    ],
    statsHeading: "The short version",
    stats: [
      { value: "96.9%", label: "order once and never again" },
      { value: "3.1%", label: "place a second order" },
      { value: "180 days", label: "before I call someone churned" },
      { value: "59.8%", label: "flagged churned, with a catch" }
    ],
    statsNote: "The 59.8% is not 'the business loses 60% of customers.' Anyone who first ordered after about March 2018 can't be churned yet under a 180 day rule. The cohort view is the one to trust. More on that below.",
    footerNote: "Figures are from the project README. The three dashboard images are the files in that repo's dashboard folder. Page 1 is the same file already used on the project card.",
    sections: [
      {
        id: "problem",
        heading: "The problem",
        blocks: [
          { type: "p", text: "I set this up as if a manager had handed me a note. We're losing customers and don't know why. Find out who's leaving, what they're worth, and which group we should focus on." },
          { type: "p", text: "The brief matches the skills that kept showing up in Stockholm ads for commercial, customer, and CRM analyst roles. SQL, a BI tool, churn, retention, lifetime value, segmentation, and a transformation layer on top of the raw tables." },
          { type: "p", text: "The orders are the public Olist dataset. It's Brazilian, and I'm using it as a proxy for a company's own orders, because it has the shape real internal data has: orders, payments, deliveries, reviews, and customers, and they join. This isn't a claim about Swedish or Nordic customers. Amounts on this page are Brazilian real (R$)." },
          {
            type: "links",
            items: [
              { label: "Olist dataset on Kaggle", href: "https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce" }
            ]
          }
        ]
      },
      {
        id: "data",
        heading: "The data",
        blocks: [
          { type: "p", text: "Most of the real work was catching things that would have quietly broken the numbers." },
          { type: "p", text: "customer_id is not a person. Olist mints a new customer_id on every order. The person is customer_unique_id. Building the KPIs on customer_id would have made every customer look like a one-time buyer. Every customer-level metric here uses customer_unique_id." },
          { type: "p", text: "There's no quantity column. Buying 10 of the same item creates 10 rows in order_items, so a row count is units, not orders. Order revenue is summed per order id." },
          { type: "p", text: "2,961 orders have more than one payment row, and one order has 29. I first assumed those were installments. They aren't. Installments sit on a single row. Extra rows are extra payment methods. One order was paid with 29 stacked vouchers. Another was a credit card on 10 installments plus a 0.01 voucher. Payments are summed per order before the join, otherwise revenue is counted twice. I checked that total payment matches item price plus freight. It does, so payment value is goods plus shipping." },
          { type: "p", text: "547 orders had more than one review. Staging keeps the most recent one with row_number. That leaves 98,673 rows and 98,673 distinct orders." },
          { type: "p", text: "The dates are broken at the edges. September 2016 has 4 orders, October has 324, November 2016 has zero rows, and the last two months taper to 16 and 4. Including them would put fake spikes and cliffs into every trend. The analysis window is January 2017 to August 2018. That filter lives in fct_orders, not in staging." },
          { type: "p", text: "A few oddities I left alone. 8 orders are marked delivered but have no delivery date. 2 credit card payments show 0 installments, which can't happen. Neither feeds a KPI, and silently rewriting source data blurs the line between what the file said and what I assumed." }
        ]
      },
      {
        id: "pipeline",
        heading: "The pipeline",
        blocks: [
          { type: "p", text: "The raw CSVs are loaded into a BigQuery dataset called customer_health and left untouched. dbt then builds two layers. Staging does no filtering and no joins, so the messy early months are still there if someone needs them. Anything that's a business decision, like which months count and which order statuses count, lives in the marts." },
          {
            type: "diagram",
            title: "Customer health pipeline",
            caption: "Staging is one clean model per source table. The marts hold the window, the churn flag, the value tiers, the cohorts, and the category cuts. Power BI imports the marts. I started on a live DirectQuery connection and switched to Import so the file is faster and easier to share.",
            steps: [
              { name: "Olist CSVs", detail: "Public orders" },
              { name: "BigQuery", detail: "Raw, untouched" },
              { name: "dbt staging", detail: "7 clean models" },
              { name: "dbt marts", detail: "Churn and cohorts" },
              { name: "Power BI", detail: "3 page report" }
            ]
          },
          { type: "p", text: "Staging models: orders (renamed timestamps, full history kept), customers (both customer_id and customer_unique_id), payments (split payments collapsed to one row per order), reviews (latest review per order), order items, products, and the Portuguese to English category names." },
          { type: "p", text: "Marts: fct_orders is one row per order, joined to customer, payment, and review, with delivery delay and the date window. dim_customers is order counts, lifetime value, first and last order, and a churn flag, one row per person. dim_customer_segments adds a value tier. fct_cohort_retention is cohort by month. fct_category_retention is repeat rate by the category of the first order. fct_category_segments crosses category with tier. fct_repeat_driver_comparison puts the first order of repeat buyers next to one-time buyers." },
          { type: "p", text: "The dashboard has three pages. Where the revenue comes from. Why customers don't come back. What actually lines up with a second purchase. The overall repeat rate is a DAX measure on raw customer counts, not an average of category rates. An average of rates would give a 500-customer category the same weight as a 9,000-customer one." }
        ]
      },
      {
        id: "tools",
        heading: "Tools",
        blocks: [
          { type: "p", text: "The models are SQL, built with dbt, on BigQuery. The dashboard is Power BI. The repeat-rate measure is DAX, so it isn't an average of averages. There isn't a public Power BI link. The report file lives in the GitHub repo." }
        ]
      },
      {
        id: "findings",
        heading: "What I found",
        blocks: [
          { type: "p", text: "Churn came out at 59.8%. That headline is misleading on its own. Churn is measured from the last order in the dataset, not from today, because the data ends in 2018. Counting from today would mark every customer churned. With a fixed window and a 180 day rule, anyone whose first order is after about March 2018 hasn't had time to churn. The active 40% is mostly recent first-time buyers. Split by when they started, early cohorts are close to 100% churned and the latest cohorts are close to 0. That's why the cohort matrix is the better view." },
          { type: "p", text: "There isn't a retention curve. 96.9% of customers order once. Only 3.1% ever place a second order." },
          {
            type: "table",
            caption: "Customers by how many orders they placed. From the README.",
            headers: ["Orders placed", "Customers"],
            align: ["left", "right"],
            rows: [
              ["1", "92,799"],
              ["2", "2,728"],
              ["3", "198"],
              ["4 or more", "49"]
            ]
          },
          { type: "p", text: "The monthly cohort matrix shows the same shape. 100% in month 0, then a drop to around 0.4% in month 1, then flat noise between 0.1% and 0.8% with no decay. Individual cells hold 1 to 6 customers, so I don't read anything into one cell versus the next. The matrix is there to show the curve is missing." },
          { type: "p", text: "Lifetime value is really just the value of that one order. Average lifetime value is R$165.15 (BRL). Since 97% of customers only buy once, lifetime value is basically average order value. The dashboard file prints a dollar sign on that tile. The currency is Brazilian real." },
          { type: "p", text: "How the first order went doesn't separate the people who came back from the people who didn't." },
          {
            type: "table",
            caption: "First-order comparison from the README. Repeat buyers spent a bit less, not more.",
            headers: ["", "One-time buyers", "Repeat buyers"],
            align: ["left", "right", "right"],
            rows: [
              ["Customers", "92,799", "2,975"],
              ["Avg first order value", "R$161.72", "R$148.30"],
              ["Avg rating", "4.09", "4.11"],
              ["Delivered late", "6.9%", "5.7%"],
              ["Rated 1 or 2", "14.7%", "14.4%"]
            ]
          },
          { type: "p", text: "State doesn't explain it either. Repeat rates by state sit in a tight band, 1.7% to 3.4%. The states at the top and the bottom are the small ones. Mato Grosso ranks first, on 30 repeat buyers out of 872. A few fewer and it'd be mid-table. That's noise, not a finding. Four checks (value, rating, late delivery, location), four nulls. Improving delivery or service wouldn't fix repeat purchase, at least not in this data." },
          { type: "p", text: "What they bought first does. Repeat rate by first-order category runs from 1.7% to 9.3%, about a 5 times spread, against that flat band for geography. These are the categories the README calls out, not every category. The full bar chart is on dashboard page 3." },
          {
            type: "table",
            caption: "Repeat rate by first-order category, rows listed in the README.",
            headers: ["Category", "Repeat rate", "Customers"],
            align: ["left", "right", "right"],
            rows: [
              ["home_appliances", "9.3%", "690"],
              ["fashion_bags_accessories", "6.0%", "1,731"],
              ["furniture_decor", "4.7%", "6,090"],
              ["bed_bath_table", "4.6%", "8,948"],
              ["sports_leisure", "4.0%", "7,379"],
              ["consoles_games", "1.8%", "1,034"],
              ["musical_instruments", "1.8%", "614"],
              ["electronics", "1.7%", "2,504"]
            ]
          },
          { type: "p", text: "The pattern fits the products. Homeware and personal goods get bought again. Electronics, games, and instruments are usually a one-off." },
          { type: "p", text: "Repeat rate and value point different ways, so neither metric works alone. home_appliances has the best repeat rate, an average value of R$138, and only 690 customers. It looks great and barely matters commercially. The highest-value categories sit near the bottom on retention: small appliances at R$333, musical instruments at R$336, office furniture at R$276." },
          { type: "p", text: "The high-value tier is what settles it. I split customers into thirds of the spending distribution, not round cutoffs I made up. In the model, that's approximate quantiles on customers with a lifetime value of 2,000 or less. The 207 customers above 2,000 stay in their own outlier bucket so they don't stretch the top tier. Customers with no lifetime value are labelled no_revenue. The top third of customers bring in 65% of revenue. The bottom third bring in 10%." },
          { type: "p", text: "Then repeat rate inside the high-value tier, for the categories the README highlights:" },
          {
            type: "table",
            caption: "High-value customers only. 11.8% is almost 4 times the overall 3.1% repeat rate.",
            headers: ["Category", "High-tier customers", "Repeat rate"],
            align: ["left", "right", "right"],
            rows: [
              ["bed_bath_table", "2,756", "11.8%"],
              ["sports_leisure", "2,397", "9.4%"],
              ["computers_accessories", "2,338", "6.5%"],
              ["health_beauty", "2,712", "5.7%"],
              ["watches_gifts", "2,863", "3.4%"]
            ]
          },
          { type: "p", text: "watches_gifts has the most high-value customers and they almost never return. A watch is usually a gift. You don't buy another one next month." },
          { type: "p", text: "What I'd tell the manager: put acquisition spend behind bed and bath, and sports and leisure. They're the categories that do well on volume, value, and retention at the same time. Test pointing one-off buyers, watches and electronics, toward those categories. Don't expect a service fix to move retention. And even the best category averages about 1.1 orders per customer. The differences are real, and they're still the difference between almost nobody returns and slightly fewer than almost nobody returns. The bigger opening is the second purchase itself." },
          { type: "p", text: "Classic RFM (recency, frequency, monetary) doesn't work well here. With 97% of customers at exactly one order, frequency is basically constant, and recency is just the date of that only purchase, which the churn flag already covers. So I segmented on value, and crossed it with the category of the first order. That's where the signal was." },
          {
            type: "figure",
            src: "images/customer-health.png",
            width: 1381,
            height: 767,
            alt: "Power BI page titled Customer Health Overview, with revenue by tier and a monthly trend from 2017 to 2018.",
            caption: "Dashboard page 1, where the revenue comes from. Same file as dashboard/page1.png in the project repo. The file prints a dollar sign. The amounts are Brazilian real (R$)."
          },
          {
            type: "figure",
            src: "images/case-studies/customer-health-page2.png",
            width: 1372,
            height: 770,
            alt: "Power BI page titled Customer Retention, with the 96.9% finding, orders per customer, and a cohort matrix.",
            caption: "Dashboard page 2, why customers don't come back. Copied from dashboard/page2.png in the project repo."
          },
          {
            type: "figure",
            src: "images/case-studies/customer-health-page3.png",
            width: 1381,
            height: 770,
            alt: "Power BI page titled Acquisition Category, with repeat rate by category and a revenue versus repeat scatter.",
            caption: "Dashboard page 3, what lines up with a second purchase. Copied from dashboard/page3.png in the project repo. The bar with no name is Uncategorised: products without a category in the dataset. The written tables above use the README figures. The chart here is the full category list."
          }
        ]
      },
      {
        id: "decisions",
        heading: "Decisions",
        blocks: [
          { type: "p", text: "Defining churn took the most thought. A 30 day rule would call nearly everyone churned almost immediately. A round number like 90 or 180 is just a guess unless the gaps in the data back it up." },
          { type: "p", text: "So I looked at how long customers actually wait between orders. The first pass was strange: 30 to 40% of repeat purchases happened on the same day or the next day. Those aren't people coming back. Olist is a marketplace, so one shopping session gets split across several sellers. Left in, they dragged the median way down." },
          { type: "p", text: "With same-day gaps removed, the median gap between genuine return visits is 69 days. Twice the median would be 138 days, and that would mislabel about a quarter of returning customers. Too aggressive. I set churn at 180 days. That covers roughly 78% of observed repeat behaviour. The other 22% come back after a longer gap and get labelled churned when they aren't. I took that on purpose. For a retention team, emailing someone who was coming back anyway costs an email. Missing someone who's actually gone costs a customer. 180 days also leaves a usable window inside about 20 months of history." },
          {
            type: "table",
            caption: "Days between genuine return visits, after same-day gaps are removed.",
            headers: ["Percentile", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%"],
            rows: [
              ["Days", "8", "18", "31", "49", "69", "104", "146", "198", "282"]
            ]
          },
          { type: "p", text: "The as-of date is the last purchase timestamp in the mart, calculated in dim_customers, not typed in. The flag is true when days since that customer's last order is greater than 180." },
          { type: "p", text: "Different metrics use different order statuses, also on purpose. Revenue and lifetime value count delivered orders only, because a cancelled order was never paid for. The churn clock counts every order, because placing one shows the customer was still shopping, whether or not it was fulfilled." },
          { type: "p", text: "Same-day marketplace splits, the customer_id trap, and the broken months at the edges of the file were the three things most likely to invent a story that isn't there. The null result on delivery and reviews is a real result. It closed off the obvious fix." }
        ]
      },
      {
        id: "next",
        heading: "What's next",
        blocks: [
          { type: "ul", items: [
            "A reviews layer, which isn't in the repo yet. Real Google Play reviews for delivery apps like Budbee, pulled with Python, as a benchmark next to the order data.",
            "dbt tests and documentation for the key models.",
            "A separate project that designs and reads an A/B test properly, instead of simulating one here."
          ] }
        ]
      }
    ]
  },
  {
    slug: "sweden-job-market",
    title: "Sweden Job Market Insights",
    lede: "A daily pull of Sweden's data and analytics job ads. Python loads them into BigQuery, dbt flags the skills in the description, and a Streamlit app lets me filter what came in.",
    tags: ["Python", "dbt", "BigQuery", "Streamlit", "GitHub Actions"],
    links: [
      { label: "GitHub repo", href: "https://github.com/AnimeshChandra-Analyst/Sweden-Job-Market-Insights" },
      { label: "Live dashboard", href: "https://animeshchandra-analystappio-sweden-job-market.streamlit.app/" }
    ],
    statsHeading: "Dashboard view, 19 Nov 2026",
    stats: [
      { value: "169", label: "jobs in this view" },
      { value: "14", label: "remote" },
      { value: "150", label: "senior roles" },
      { value: "31", label: "new in the last 48 hours" }
    ],
    statsNote: "Taken 19 November 2026. The date range on the dashboard is 21 Oct to 19 Nov 2026, and a city filter is on, so this is that view, not every ad in Sweden.",
    footerNote: "The 19 November counts are read off the dashboard screenshot. A city filter is on, so they aren't a national total. Pipeline facts are from the ingest script, the dbt models, and the GitHub Actions workflow.",
    sections: [
      {
        id: "problem",
        heading: "The problem",
        blocks: [
          { type: "p", text: "I'm looking at data analytics and data engineering roles from Stockholm, so I built a tracker for the ads I'd actually want to read. The question is practical. Which skills keep showing up in Swedish postings, which companies are hiring, and which skills show up together in the same ad?" },
          { type: "p", text: "The project card calls the search list thirteen role types. In the code they're thirteen search terms. A headline filter after that keeps titles that look like analyst, analytics, data scientist, data engineer, or BI developer. A search for one of those terms can still return other jobs, and the filter is what drops them." }
        ]
      },
      {
        id: "data",
        heading: "The data",
        blocks: [
          { type: "p", text: "The source is the Swedish public JobTech search API at jobsearch.api.jobtechdev.se. The ingest script searches these terms: Data Analyst, Data Engineer, Analytics Engineer, BI Analyst, BI Developer, Market Intelligence Analyst, Marketing Analyst, Commercial Analyst, Digital Analyst, Data Scientist, Product Analyst, Consumer Analyst, and Junior Data Analyst." },
          { type: "p", text: "The API ranks by relevance to the search term, not by date. A five month old ad can outrank one from today. So the script doesn't trust the rank. For each term it pulls up to 3 pages of 50 hits, with a short pause between pages. It then keeps ads whose published date is within the last 30 days, drops duplicate ad ids (keeping the first term that found the ad), and loads what's left." },
          { type: "p", text: "Each run replaces the BigQuery table. The write disposition is WRITE_TRUNCATE, into raw.raw_job_ads. The table is the current window, not a history of every ad the pipeline has ever seen. Once an ad ages out of 30 days, the next run doesn't keep it." },
          { type: "p", text: "Columns stored from each hit: id, headline, employer name, city, description text, published time, application deadline, ad url, the API's relevance score, the search term that found it, and an ingested_at timestamp." },
          { type: "p", text: "Staging throws out blank headlines. Empty cities become Unknown. Published date and deadline are parsed by taking the first 10 characters and safe-casting to a date, so a blank or broken deadline becomes null instead of failing the build. The dbt source points at the live GCP project, sweden-job-market-506308, and dataset raw." }
        ]
      },
      {
        id: "pipeline",
        heading: "The pipeline",
        blocks: [
          { type: "p", text: "GitHub Actions runs every day at 06:00 UTC, and it can be started by hand. The job checks out the repo, sets up Python 3.13, installs requirements, writes the service account key, ingests, runs dbt in the swedish_job_market folder, and deletes the key even if a step fails." },
          {
            type: "diagram",
            title: "Sweden job market pipeline",
            caption: "The daily job stops at the dbt mart. Streamlit reads that table directly.",
            steps: [
              { name: "JobTech API", detail: "13 search terms" },
              { name: "Python ingest", detail: "Last 30 days" },
              { name: "BigQuery raw", detail: "Replace the table" },
              { name: "dbt", detail: "Skill flags" },
              { name: "Streamlit", detail: "Filter and chart" }
            ]
          },
          { type: "p", text: "There are two dbt models. stg_job_ads is a view. fct_job_skills is a table. The project config asks for schemas named STAGING and MARTS. A macro lowercases custom schema names, so the datasets BigQuery actually gets are staging and marts. The Streamlit app reads marts.fct_job_skills, which matches." },
          { type: "p", text: "There's also a dbt_project folder at the repo root with no models in it. The workflow doesn't use that folder. It uses swedish_job_market. Comments in the ingest script describe an older Snowflake load, and scripts/setup_snowflake_auth.py is still in the repo. The path that runs is the BigQuery one." },
          { type: "p", text: "Skill flags are keyword checks on the lowercased description, not a model. Python, SQL, AWS (also the phrase Amazon Web Services), Azure, Power BI, Tableau, Excel, dbt, Snowflake, BigQuery (also Google BigQuery), Power Query, automation (also the Swedish automatisering), data visualization (also the British spelling and datavisualisering), and reports (also rapportering). That's 14 flags. Three more aren't skills: remote matches remote, distans, or hemifrån. Senior matches senior, lead, or erfaren. Junior matches junior, entry, or trainee." },
          { type: "p", text: "A short token will over-match. The SQL flag is a search for the letters sql, so it can light up inside a longer word. Synonyms that don't contain the keyword are missed. The flags are easy to read and easy to get slightly wrong. That's the trade." },
          { type: "p", text: "The Streamlit page is titled Swedish Job Market: Skill and Market Insights. On Streamlit Cloud it connects with the service account stored in the app's secrets. Locally it uses a key file from the environment. Filters sit in the sidebar: city (multi-select), a date range, skills with OR logic (a job stays if it has any of the skills you picked), and a remote-only switch. Cities are title-cased in the app so SOLNA and Solna don't show up as two places." },
          { type: "p", text: "The page shows four counts: jobs in the filter, how many are flagged remote, how many are flagged senior, and how many were published in the last 48 hours. Then a bar chart of skill counts, a bar chart of the top 10 employers, a correlation heatmap of which skill flags appear together (Pearson r, drawn with Altair), and a table of the 15 latest ads (headline, employer, city, published date). If a filter matches nothing, the page says so and stops." },
          { type: "p", text: "The heatmap colors correlations from 0 to 1. A negative correlation doesn't get its own color. It's still printed as a number on the cell." }
        ]
      },
      {
        id: "tools",
        heading: "Tools",
        blocks: [
          { type: "p", text: "Python for the API pull and the load into BigQuery. dbt and SQL for the staging view and the skills table. Streamlit for the dashboard, Altair for the heatmap, pandas in both the loader and the app. GitHub Actions for the daily run. The JobTech API is the source." }
        ]
      },
      {
        id: "findings",
        heading: "What it shows",
        blocks: [
          { type: "p", text: "On 19 November 2026 I grabbed the live dashboard. The date range is set to 21 Oct to 19 Nov 2026, and the sidebar has a city filter with several cities selected. So this is a snapshot of that view, not every ad in Sweden." },
          { type: "p", text: "In that view: 169 jobs, 14 remote, 150 senior roles, and 31 new in the last 48 hours." },
          { type: "p", text: "SQL, Python, and Reports lead the skill chart. After those come Excel, Automation, dbt, Power BI, and Azure. The bars aren't labeled, so this is the order, not a count for each skill." },
          { type: "p", text: "Veritaz AB leads the hiring chart." },
          {
            type: "figure",
            src: "images/sweden-dashboard-2026-11-19.png",
            width: 1526,
            height: 770,
            alt: "Streamlit dashboard on 19 November 2026, city filter on, showing 169 jobs, 14 remote, 150 senior, and 31 new.",
            caption: "Live dashboard, as of 19 November 2026. Date range 21 Oct to 19 Nov 2026. A city filter is on, so this isn't all of Sweden."
          }
        ]
      },
      {
        id: "decisions",
        heading: "Decisions",
        blocks: [
          { type: "ul", items: [
            "Recency is enforced in our code, because the API doesn't sort by date. Relevance rank alone would keep stale ads near the top.",
            "Three pages of 50, then the date cut. A popular term like Data Engineer would otherwise stop at the 50 most relevant hits, and a recent ad with a worse rank would never be seen.",
            "Full refresh rather than an append. The table stays small and it can't pile up duplicate copies of the same ad. The cost is that there's no history. I can't ask what the market looked like last month once those ads have aged out.",
            "Dedup on ad id before the load. One ad can match several search terms. It's stored once, under the first term that found it.",
            "Headline filter after the search, so off-target ads from a broad query don't land in the mart.",
            "Keyword flags, including a few Swedish words, instead of an NLP model. I can read the rule. I can also see where it will miss a synonym or catch the wrong phrase.",
            "Title case on city in the app, not in dbt. The mart keeps the source city. The dashboard is what merges the case duplicates.",
            "The loader writes lowercase column names. An earlier Snowflake version uppercased unquoted names. BigQuery keeps the case you give it, and the dbt models expect lowercase."
          ] }
        ]
      },
      {
        id: "next",
        heading: "What's next",
        blocks: [
          { type: "p", text: "I want to get better at pulling out more insight. Something that helps my own job search, and helps me understand the market." },
          { type: "p", text: "A few concrete pieces of that:" },
          { type: "ul", items: [
            "The dbt tests folder is empty. Nothing checks that a headline survived staging, or that a skill flag is boolean.",
            "Each ingest replaces the raw table. Keeping history, instead of replacing the table, would show how the market moves from week to week. Right now it can't.",
            "A city breakdown wasn't part of this version. The sidebar can filter to cities, but the page doesn't show how the jobs split across them. That's a limit I could build next."
          ] }
        ]
      }
    ]
  }
];
