/* ============================================================
   EDIT THIS FILE TO UPDATE YOUR PORTFOLIO CONTENT.
   You should not need to touch index.html or style.css for
   routine updates — just edit the values below.
   ============================================================ */

// Career highlight numbers shown in the hero "KPI panel".
// Keep it to 3 items so it fits cleanly.
const KPI_DATA = [
  { value: "108K+", label: "transactions analyzed in a single project" },
  { value: "4",     label: "core tools: SQL, Python, Tableau, Power BI" },
  { value: "2",     label: "degrees spanning engineering and marketing" },
];

// Add a new project by copying one of the objects below and editing it.
// Set "featured: true" on at most one project to give it the wide layout.
const PROJECTS_DATA = [
  {
    featured: true,
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
