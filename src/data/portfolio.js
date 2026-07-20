export const profile = {
  name: "Sameer Jain",
  title: "Senior iOS Developer",
  tagline:
    "Building scalable mobile applications and AI-powered developer tools.",
  techStack: "Swift • SwiftUI • UIKit • MVVM • Python • AI",
  bio: "Senior iOS Developer with 5+ years of experience building scalable, production-grade applications across banking, healthcare, travel, and automotive domains. Passionate about clean architecture, developer tooling, automation, and AI-driven engineering productivity.",
  summary:
    "iOS Developer with 5 years of experience building scalable, production-grade iOS applications using Swift, UIKit, SwiftUI, and MVVM. Experienced in modular architecture, TCA, CI/CD, performance optimization, automation, and production stability across FinTech, Automotive, Healthcare, and Travel domains.",
  email: "sameerjain7999@gmail.com",
  phone: "+91 9340105004",
  location: "Pune, Maharashtra, India",
  resumeUrl: "/Sameer_Jain_Resume.pdf",
  links: {
    github: "https://github.com/Sameer-Jain-7",
    linkedin: "https://linkedin.com/in/sameer-j7",
  },
};

export const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "15+", label: "Shared Libraries" },
  { value: "6+", label: "Production Apps" },
  { value: "100K+", label: "Users Impacted" },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech.) in Computer Science",
  institution:
    "University Institute of Technology, Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal",
  period: "Jul 2017 — May 2021",
  gpa: "8.39/10",
};

export const skills = [
  // Programming Languages
  { name: "Swift", category: "Programming Languages" },
  { name: "Python", category: "Programming Languages" },
  { name: "JavaScript", category: "Programming Languages" },

  // Apple Ecosystem
  { name: "UIKit", category: "Apple Technologies" },
  { name: "SwiftUI", category: "Apple Technologies" },
  { name: "Combine", category: "Apple Technologies" },
  { name: "Swift Concurrency", category: "Apple Technologies" },
  { name: "Core Data", category: "Apple Technologies" },
  { name: "StoreKit", category: "Apple Technologies" },
  { name: "UserDefaults", category: "Apple Technologies" },

  // Architecture & Design
  { name: "MVVM", category: "Architecture" },
  { name: "TCA", category: "Architecture" },
  { name: "Modular Architecture", category: "Architecture" },
  { name: "SOLID Principles", category: "Architecture" },
  { name: "Dependency Injection", category: "Architecture" },
  { name: "Design Patterns", category: "Architecture" },

  // Mobile Development
  { name: "REST APIs", category: "Mobile Development" },
  { name: "Deep Linking", category: "Mobile Development" },
  { name: "Push Notifications", category: "Mobile Development" },
  { name: "Localization & RTL", category: "Mobile Development" },
  { name: "Firebase", category: "Mobile Development" },
  { name: "Authentication", category: "Mobile Development" },

  // DevOps & Testing
  { name: "CI/CD", category: "DevOps & Testing" },
  { name: "Azure DevOps", category: "DevOps & Testing" },
  { name: "GitHub Actions", category: "DevOps & Testing" },
  { name: "Appium", category: "DevOps & Testing" },
  { name: "Unit Testing", category: "DevOps & Testing" },

  // Tools
  { name: "Xcode", category: "Tools" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Swift Package Manager", category: "Tools" },
  { name: "CocoaPods", category: "Tools" },
  { name: "Optimizely", category: "Tools" },

  // AI & Automation
  { name: "GitHub Copilot", category: "AI & Automation" },
  { name: "Cursor", category: "AI & Automation" },
  { name: "ChatGPT", category: "AI & Automation" },
  { name: "AI-Powered Automation", category: "AI & Automation" },
  { name: "Prompt Engineering", category: "AI & Automation" },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "HSBC Bank",
    location: "Pune, Maharashtra",
    period: "Nov 2024 — Present",
    description:
      "Building and maintaining shared iOS libraries and AI-powered developer tools on HSBC's global mobile platform, with a focus on production stability, performance, and engineering automation.",
    highlights: [
      "Enhanced and maintained 15+ reusable iOS libraries and plugins powering multiple customer-facing journeys",
      "Designed an Optimizely-based experimentation plugin enabling A/B testing across 5+ customer journeys",
      "Improved application startup performance by ~30% through mergeable libraries and dependency optimization",
      "Led KTLO operations for an 8-member pod — production stability, release support, and issue resolution",
      "Built an AI-driven crash analysis dashboard reducing manual debugging by 85% and resolution time by 70%",
      "Developed AI-powered certificate pinning automation reducing manual effort and deployment risks by 90%",
    ],
  },
  {
    role: "Systems Engineer",
    company: "Tata Consultancy Services",
    location: "Pune, Maharashtra",
    period: "Jul 2021 — Nov 2024",
    description:
      "Developed and maintained the Mercedes-Benz Korea (MBK) Care iOS application, serving as Sub-Project Lead and Agile SPOC while delivering production-grade features across the full SDLC.",
    highlights: [
      "Built the MBK Care iOS app using Swift and MVVM — account management, WebViews, permissions, and API integrations",
      "Reduced manual testing effort by 30% through Appium-based automation and CI/CD workflow optimization",
      "Collaborated with backend, web, QA, and cloud teams across Dev/UAT/Prod environments",
      "Served as Sub-Project Lead and Agile SPOC — coordinating deliveries, issue tracking, and cross-functional communication",
    ],
  },
];

export const projects = [
  {
    title: "HSBC Global Mobile Platform",
    company: "HSBC",
    description:
      "Shared iOS libraries and plugins powering multiple customer-facing journeys on HSBC's global mobile platform.",
    problem:
      "Multiple teams needed reusable, consistent components across banking journeys.",
    role: "Developing and Supporting reusable libraries for HSBC Global banking application across 20+ markets",
    tags: ["Swift", "SwiftUI", "The Composite Architecture"],
    achievements: [
      "Supported customer-facing HSBC banking application across 20+ global markets",
      "Developed and maintained 15+ reusable libraries used across global platform",
      "~30% improvement in application startup performance",
    ],
  },
  {
    title: "AI Crash Analysis Dashboard",
    company: "HSBC",
    description:
      "AI-driven dashboard that automates crash symbolication, root-cause detection, code ownership mapping, and solution recommendations.",
    problem:
      "Production crash triage required significant manual effort across large iOS codebases.",
    role: "Designed and built the end-to-end automation pipeline and dashboard.",
    tags: ["Swift", "Python", "AI", "AppDynamics"],
    achievements: [
      "Reduced manual debugging effort by 85%",
      "Improved production issue resolution time by 70%",
    ],
  },
  {
    title: "AI Certificate Pinning Automation",
    company: "HSBC",
    description:
      "Automated certificate pinning configuration updates — branch creation, commits, and pull request generation.",
    problem:
      "Manual certificate pinning updates were error-prone and slowed down releases.",
    role: "Built the automation tool integrating with Git workflows and CI/CD.",
    tags: ["Swift", "Python", "AI", "CI/CD"],
    achievements: [
      "Reduced manual effort and deployment risks by 90%",
      "Automated branch creation, commits, and PR generation",
    ],
  },
  {
    title: "SafarJala",
    company: "Travel",
    description:
      "Multilingual travel booking platform supporting 12 languages with improved booking flows, pricing modules, and API integrations.",
    problem:
      "Legacy architecture limited scalability and multilingual support for travel bookings.",
    role: "Re-architected the iOS platform and improved core booking and pricing modules.",
    tags: ["Swift", "UIKit", "MVVM", "Localization"],
    achievements: [
      "12-language multilingual support",
      "Improved booking flows and pricing modules",
    ],
    github: null,
    appStore: "https://apps.apple.com/app/id6743002209",
  },
  {
    title: "SafarJala Activity Owner",
    company: "Travel",
    description:
      "Activity management platform for vendors with multilingual support, dynamic pricing, and calendar-based slot scheduling.",
    problem:
      "Vendors needed a dedicated app to manage activities, bookings, and pricing.",
    role: "Built and enhanced the vendor-facing iOS application end-to-end.",
    tags: ["Swift", "UIKit", "REST APIs", "Localization"],
    achievements: [
      "Multilingual vendor platform",
      "Dynamic pricing and calendar-based slot scheduling",
    ],
    github: null,
    appStore: "https://apps.apple.com/app/id6743394275",
  },
  {
    title: "Mercedes Korea Care",
    company: "TCS / Mercedes-Benz",
    description:
      "Customer-facing iOS app for Mercedes-Benz Korea vehicle servicing — account management, embedded WebViews, and backend-driven workflows.",
    problem:
      "Customers needed a seamless mobile experience for vehicle care and account management.",
    role: "Developed and maintained production features as core iOS engineer and Sub-Project Lead.",
    tags: ["Swift", "MVVM", "WebView", "REST APIs"],
    achievements: [
      "Multiple production-grade features shipped",
      "30% reduction in manual testing via Appium automation",
    ],
  },
  {
    title: "Caria Health",
    company: "Healthcare",
    description:
      "Modernized a healthcare iOS application — upgraded dependencies, migrated to iOS 13+, and improved stability for App Store releases.",
    problem:
      "Legacy codebase blocked updates and caused stability issues in production.",
    role: "Led modernization efforts and supported TestFlight and App Store releases.",
    tags: ["Swift", "UIKit", "Healthcare", "App Store"],
    achievements: [
      "Successful TestFlight and App Store releases",
      "Improved application stability and dependency management",
    ],
    github: null,
    appStore: "https://apps.apple.com/us/app/caria-menopause-midlife/id1477621356",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
