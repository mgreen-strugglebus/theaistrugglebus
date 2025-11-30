import type { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Solutions", href: "/solutions" },
  { title: "Assessment", href: "/assessment" },
  { title: "30-Day Sprint", href: "/sprint" },
  { title: "Results", href: "/results" },
  { title: "About", href: "/about" },
];

export const footerNavItems: NavItem[] = [
  { title: "Resources", href: "/resources" },
  { title: "Governance & Safety", href: "/governance" },
  { title: "Integrations", href: "/integrations" },
  { title: "FAQ", href: "/faq" },
  { title: "Privacy", href: "/privacy" },
  { title: "Terms", href: "/terms" },
];

export const solutionCategories = [
  {
    title: "Marketing & Sales",
    slug: "marketing-sales",
    description: "AI generates on-brand content, product descriptions and campaign assets.",
    icon: "megaphone",
    features: [
      "Product detail pages with AI-drafted descriptions",
      "Campaign kits with email sequences and social posts",
      "Customer segmentation from purchase history",
    ],
    outputs: [
      "Faster go-to-market (weeks to days)",
      "More on-brand content with fewer revisions",
      "Increased conversion rates",
    ],
  },
  {
    title: "Customer Service",
    slug: "customer-service",
    description: "AI assistants handle routine inquiries and scheduling.",
    icon: "headset",
    features: [
      "AI assistants for common questions",
      "Complaint summarisation and clustering",
      "Automated feedback follow-up",
    ],
    outputs: [
      "24/7 responsiveness",
      "Better customer satisfaction",
      "Actionable improvement insights",
    ],
  },
  {
    title: "Operations & Finance",
    slug: "operations-finance",
    description: "Agents reconcile reports, forecast cash flow and summarise metrics.",
    icon: "chart-bar",
    features: [
      "Sales, inventory and logistics reconciliation",
      "Cash-flow forecasting and budgeting",
      "Invoice processing and payment reminders",
    ],
    outputs: [
      "Timely insights without spreadsheets",
      "Fewer manual errors",
      "Better cash management",
    ],
  },
  {
    title: "Knowledge Support",
    slug: "knowledge-support",
    description: "Build an internal knowledge base from documents, emails and chats.",
    icon: "book-open",
    features: [
      "Document and email ingestion",
      "Meeting summarisation",
      "Competitive intelligence monitoring",
    ],
    outputs: [
      "No more reinventing the wheel",
      "Faster onboarding",
      "Data-driven decisions",
    ],
  },
  {
    title: "Product Development",
    slug: "product-development",
    description: "Turn ideas into PRDs, user stories and prototypes quickly.",
    icon: "rocket",
    features: [
      "Draft PRDs and user stories",
      "Rapid prototyping for validation",
      "Bug and feature request aggregation",
    ],
    outputs: [
      "Shortened development cycles",
      "Better stakeholder alignment",
      "Lower engineering overhead",
    ],
  },
  {
    title: "Roadside Rescue",
    slug: "rescue",
    description: "When AI initiatives have stalled or your team needs upskilling, we get you back on the road.",
    icon: "wrench",
    features: [
      "AI rescue for failed deployments",
      "LLM training and workshops",
      "Solution architecture consulting",
      "Vendor evaluation and strategy",
    ],
    outputs: [
      "Recovered AI investments",
      "Teams confident with AI tools",
      "Clear integration roadmap",
    ],
  },
];
