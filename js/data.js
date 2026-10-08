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
    image: "images/flowforge.png",
    repoUrl: "https://github.com/AnimeshChandra-Analyst/flowforge-gtm-analytics"
  },
  {
    featured: false,
    title: "Customer Health & Churn Analytics",
    description: "Why almost nobody comes back. Modelled ~100K e-commerce orders into retention, churn, LTV and segmentation, and found that 96.9% of customers never reorder, and that first-purchase category, not delivery or reviews, predicts who returns.",
    tags: ["SQL", "dbt", "BigQuery", "Power BI", "DAX"],
    image: "images/customer-health.png",
    repoUrl: "https://github.com/AnimeshChandra-Analyst/Commercial-Analytics-Project"
  },
   {
     featured: false,
     title: "Sweden Job Market Insights",
     description: "A full data pipeline tracking Sweden's data & analytics job market, using dbt and BigQuery for transformation and a Streamlit app surfacing thirteen role types, automated end-to-end with GitHub Actions.",
     tags: ["SQL","python","dbt", "BigQuery", "Streamlit", "GitHub Actions"],
     image: "images/sweden-job-market.png",
     repoUrl: "https://github.com/AnimeshChandra-Analyst/Sweden-Job-Market-Insights",
     viewUrl: "https://animeshchandra-analystappio-sweden-job-market.streamlit.app/"
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
