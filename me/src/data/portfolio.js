// Add public evidence links here when ready. Keep unavailable links null; never add secrets.
export const profile = {
  name: "Salman Ahmed",
  role: "Full Stack Developer",
  email: "salmanahmed21205@gmail.com",
  phone: "+923187848331",
  location: "Daska, Pakistan",
  github: "https://github.com/Salman2105",
  linkedin: "https://www.linkedin.com/in/salman-ahmed-a76708356/",
  cv: `${import.meta.env.BASE_URL}Salman_Ahmed_CV.pdf`,
};
export const navigation = [
  { label: "About", id: "about" },
  { label: "Work", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Expertise", id: "skills" },
  { label: "Learning", id: "learning" },
];
export const projects = [
  {
    id: "expense-tracker",
    number: "01",
    title: "Personal Expense Tracker",
    subtitle: "Clarity for everyday finances.",
    category: "Full stack",
    type: "Personal project · PERN application",
    visual: "expense",
    description:
      "A full-stack finance application connecting a typed React interface to a structured, authenticated REST API.",
    tags: ["React", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
    contributions: [
      "Worked on transactions, categories, user settings, and dashboard functionality with React and TypeScript.",
      "Built backend functionality with Node.js, Express, PostgreSQL, and Prisma; worked on JWT authentication and account-management flows.",
      "Integrated Cloudinary profile uploads and worked with Neon, Render environment configuration, Dockerfiles, and Docker Compose.",
    ],
    takeaway:
      "Connecting frontend behavior, API validation, and relational data while investigating differences between local and deployed environments.",
    repositoryUrl: "https://github.com/Salman2105/Expense-Tracker-PERN-",
    demoUrl: null,
    videoUrl: null,
  },
  {
    id: "tryovix",
    number: "02",
    title: "TryOvix",
    subtitle: "From design reference to working interface.",
    category: "Frontend",
    type: "MeissaSoft · Team contribution",
    visual: "tryovix",
    description:
      "Frontend contributions to a clothing models platform, focused on a consistent, responsive ROI page and clearer navigation.",
    tags: ["React", "TypeScript", "Figma", "Git / GitHub"],
    contributions: [
      "Updated the ROI page against a Figma reference, refined layout consistency, and updated ROI and fashion-brand icons.",
      "Fixed the Calculate Your ROI button redirection and worked through branches, commits, and pull requests.",
      "Explored the assigned Render-to-Railway migration and deployment configuration with the team.",
    ],
    takeaway:
      "Working within an existing product: making focused changes, checking visual details, and collaborating through Git.",
    repositoryUrl: null,
    demoUrl: null,
    videoUrl: null,
  },
  {
    id: "eduminds",
    number: "03",
    title: "EduMinds",
    subtitle: "A structured learning experience.",
    category: "Full stack",
    type: "Academic project · Learning management system",
    visual: "education",
    description:
      "A MERN learning platform with role-based dashboards, course management, payments, and learning progress.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    contributions: [
      "Built a MERN learning management system as an academic project.",
      "Worked on role-based access, course workflows, Stripe payments, and Cloudinary media integration.",
    ],
    takeaway:
      "Bringing authentication, content management, and third-party integrations into one application.",
    repositoryUrl: "https://github.com/Salman2105/FYP-EduMinds-",
    demoUrl: null,
    videoUrl: null,
  },
  {
    id: "promptguard",
    number: "04",
    title: "PromptGuard",
    subtitle: "Exploring the boundaries of LLM inputs.",
    category: "AI & security",
    type: "MeissaSoft · Learning project",
    visual: "ai",
    description:
      "Exploration of prompt injection and LLM application risks in a Node.js application with OpenAI integration and MongoDB.",
    tags: ["Node.js", "Express", "OpenAI", "MongoDB"],
    contributions: [
      "Worked with a Node.js and Express application involving OpenAI integration and MongoDB.",
      "Explored prompt-injection testing, untrusted inputs, and OWASP LLM security concepts.",
    ],
    takeaway:
      "Understanding why untrusted prompts and model outputs need explicit boundaries and review. This work represents learning, not a production security guarantee.",
    repositoryUrl: null,
    demoUrl: null,
    videoUrl: null,
  },
  {
    id: "secpair",
    number: "05",
    title: "SecPair",
    subtitle: "Comparing vulnerable and hardened code.",
    category: "AI & security",
    type: "MeissaSoft · Security exercise",
    visual: "security",
    description:
      "MERN application exercises comparing common weaknesses with more defensive implementation patterns.",
    tags: ["MERN", "Postman", "Access control", "Railway"],
    contributions: [
      "Explored vulnerable and hardened MERN application concepts, including injection, stored XSS, and broken access control.",
      "Used Postman for API validation and worked with Railway and Vercel deployment workflows.",
    ],
    takeaway:
      "Developing a habit of checking input handling and access boundaries without claiming independent penetration-testing expertise.",
    repositoryUrl: null,
    demoUrl: null,
    videoUrl: null,
  },
  {
    id: "secureci",
    number: "06",
    title: "SecureCI",
    subtitle: "Earlier feedback in the development workflow.",
    category: "AI & security",
    type: "MeissaSoft · Workflow exploration",
    visual: "workflow",
    description:
      "Exploring automated code-quality and security checks as part of a GitHub-based development workflow.",
    tags: ["GitHub Actions", "Semgrep", "ESLint", "CI/CD"],
    contributions: [
      "Explored security checks in GitHub Actions using Semgrep and ESLint.",
      "Studied how static analysis can identify potential issues before integration, alongside Railway deployment workflows.",
    ],
    takeaway:
      "Treating automated findings as useful review signals that still need engineering judgment.",
    repositoryUrl: null,
    demoUrl: null,
    videoUrl: null,
  },
];
export const earlierProjects = [
  {
    title: "Bookstore App",
    description:
      "MERN application practice covering book listings, CRUD operations, and user authentication.",
    tags: ["MERN", "REST APIs"],
    repositoryUrl: null,
    demoUrl: null,
    videoUrl: null,
  },
  {
    title: "React Native Weather App",
    description:
      "Cross-platform weather application using the OpenWeather API, with city search and application settings.",
    tags: ["React Native", "API integration"],
    repositoryUrl: null,
    demoUrl: null,
    videoUrl: null,
  },
  {
    title: "Computer Vision Project",
    description:
      "Python and OpenCV practice exploring object detection and image classification.",
    tags: ["Python", "OpenCV"],
    repositoryUrl: null,
    demoUrl: null,
    videoUrl: null,
  },
];
export const skillGroups = [
  {
    icon: "frontend",
    title: "Frontend development",
    level: "Practical experience",
    description:
      "Responsive interfaces, reusable components, application state, and API integration.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML / CSS",
      "Tailwind CSS",
      "Figma implementation",
    ],
  },
  {
    icon: "backend",
    title: "Backend engineering",
    level: "Practical experience",
    description:
      "REST APIs, authentication, authorization, validation, middleware, and account workflows.",
    tags: [
      "Node.js",
      "Express",
      "REST APIs",
      "JWT",
      "RBAC",
      "Error handling",
      "Third-party integrations",
    ],
  },
  {
    icon: "database",
    title: "Databases & data",
    level: "Practical experience",
    description:
      "Relational models, document databases, data relationships, and environment configuration.",
    tags: [
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Neon",
      "Schema design",
      "Query fundamentals",
    ],
  },
  {
    icon: "testing",
    title: "Testing & collaboration",
    level: "Practical experience",
    description:
      "API and functional testing, frontend/backend debugging, pull requests, and technical documentation.",
    tags: [
      "Postman",
      "Git",
      "GitHub",
      "Code review",
      "Email & attachment testing",
      "Integration fundamentals",
    ],
  },
];
export const workflow = [
  {
    number: "01",
    title: "Understand",
    text: "Clarify the behavior, inspect the existing code, and translate designs into a small, reviewable plan.",
    tools: "Figma · VS Code · Documentation",
  },
  {
    number: "02",
    title: "Build & review",
    text: "Connect components, APIs, and data. Use AI thoughtfully and review generated code before integration.",
    tools: "React · Node.js · Prisma · AI-assisted coding",
  },
  {
    number: "03",
    title: "Test & refine",
    text: "Check request validation, access boundaries, UI consistency, and the paths that fail.",
    tools: "Postman · ESLint · Semgrep",
  },
  {
    number: "04",
    title: "Ship & learn",
    text: "Work through pull requests, configure environments, and troubleshoot deployment behavior.",
    tools: "GitHub · Docker · Railway · Render · Vercel",
  },
];
// Add credential URLs only after checking certificates. Do not infer exam passes.
export const learning = [
  {
    title: "Google AI Essentials",
    issuer: "Google",
    status: "Completed",
    kind: "Specialization",
    description:
      "Structured learning in using AI tools, effective prompts, and responsible AI practices.",
    credentialUrl: null,
  },
  {
    title: "CompTIA Security+ SY0-701",
    issuer: "Certification preparation",
    status: "In progress",
    kind: "Exam preparation",
    description:
      "Studying threats, identity and access, cryptography, and security architecture.",
    credentialUrl: null,
  },
  {
    title: "LLMs & generative AI",
    issuer: "Courses & hands-on practice",
    status: "Ongoing learning",
    kind: "Technical learning",
    description:
      "Hugging Face practice, RAG, instruction fine-tuning, PEFT / LoRA, RLHF, evaluation, and AI-agent concepts.",
    credentialUrl: null,
  },
];
