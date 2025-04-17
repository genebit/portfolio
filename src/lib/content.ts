import { BlogPosts } from "@/types/BlogPost"
import { CardStack } from "@/types/CardStack"
import { Project } from "@/types/Project"
import { Skill } from "@/types/Skill"

const highlightedProjects: Project[] = [
  {
    date_from: "February 2025",
    date_to: "Present",
    title: "Ateneo de Naga University – Project HRIS and ADNUONE（Phase 2）",
    subtitle: "Contract • Lead Backend Developer",
    screenshots: [
      {
        original: "adnuone/adnuone-1.png",
        thumbnail: "adnuone/adnuone-1.png",
      },
      {
        original: "adnuone/adnuone-2.png",
        thumbnail: "adnuone/adnuone-2.png",
      },
    ],
    screenshot_note: "The website is currently under development.",
    tags: ["Oracle", "Laravel 10", "Livewire", "Tailwind", "Internal and Public"],
    description:
      "University's Employee Web Portal Service. Designed for employees to manage personal records, view assignments, records, affirmation, and file requests directly to HRMO and Heads.",
    description_full: null,
    video_links: [],
    proponents: ["Johcel Gene Bitara", "Miguel Damien Garcera", "Jiankarlo Belarmino", "Mark Niño Joseph Alden"],
    contributions: [
      "Technical lead for HRIS and ADNUONE: a new web portal for Ateneo de Naga University employees to manage personal records, assignments, and file requests to heads.",
    ],
    features: [
      "Employee Management",
      "Authentication",
      "Single Sign-on (SSO) Authentication",
      "Employee Daily Time Record (DTR)",
      "Confirmation and Approval of Schedules, Requests, and Leave",
      "Email Notifications",
      "Leave Management",
      "Certification Requests",
      "Contracts and Report Generation",
      "Data Migration",
      "Internal",
    ],
    source_code_link: "https://mis-git.adnu.edu.ph/misadnu/adnuone.git",
    source_code_locked: true,
    live_demo_link: "https://services.adnu.edu.ph/adnuone",
    live_demo_locked: true,
  },
  {
    date_from: "June 2024",
    date_to: "Present",
    title: "Ateneo de Naga University – Project HRIS（Phase 1）",
    subtitle: "Contract • Lead Full-Stack Web Developer",
    screenshots: [
      {
        original: "hris/hris-1.png",
        thumbnail: "hris/hris-1.png",
      },
      {
        original: "hris/hris-2.png",
        thumbnail: "hris/hris-2.png",
      },
      {
        original: "hris/hris-3.png",
        thumbnail: "hris/hris-3.png",
      },
      {
        original: "hris/hris-4.png",
        thumbnail: "hris/hris-4.png",
      },
      {
        original: "hris/hris-5.png",
        thumbnail: "hris/hris-5.png",
      },
      {
        original: "hris/hris-6.png",
        thumbnail: "hris/hris-6.png",
      },
      {
        original: "hris/hris-7.png",
        thumbnail: "hris/hris-7.png",
      },
    ],
    screenshot_note: "These screenshots are publicly available views and do not include the internal system.",
    tags: ["Oracle", "Laravel 10", "Livewire", "Tailwind", "Internal and Public"],
    description:
      "University's Human Resource Information System (HRIS). Designed to manage employee records, HR processes, and centralize HR data to improve efficiency and reduce manual workloads.",
    description_full: null,
    video_links: [],
    proponents: ["Johcel Gene Bitara", "Miguel Damien Garcera"],
    contributions: [
      "Technical lead for HRIS: a new web portal for Ateneo de Naga University’s HRMO. Handled confidential access to HR records from the University’s database with careful measures in place.",
      "Developed key modules of the application ranging from reports, management, design, data processing/analysis, and hardware configuration resulting in a drastic improvement to the HR’s workflow in terms of eliminating the manual processes.",
      "Optimized data rendering and fetching of employee records on thousands of records by usage of optimized PL/SQL queries, views, procedures, indexing, functions, server-side implementations, batch processing and client-side rendering.",
      "Crafted and applied a data migration plan to perform a large-scale migration of up to 3M+ records from MySQL and Postgres to Oracle, resulting in unified data records of HRMO in the main database repository of the University.",
      "Wrote clear technical and project documentation, i.e., ERD, user manual, gantt chart, swimlane, data dictionary, and code documentation.",
      "Conducted a comprehensive testing phase, prototyping, and feedback to HRMO, and facilitated onboarding for HR officers to ensure smooth adoption and operational efficiency. Presented the data migration results to HRMO for future decision-making.",
    ],
    features: [
      "Employee Management",
      "Authentication",
      "Attendance Management",
      "Faculty Management",
      "Automated Computation",
      "Leave Management",
      "Work Schedule Management",
      "Contracts and Report Generation",
      "Data Migration",
      "Internal",
    ],
    source_code_link: "https://mis-git.adnu.edu.ph/misadnu/hris.git",
    source_code_locked: true,
    live_demo_link: "https://services.adnu.edu.ph/hris",
    live_demo_locked: true,
  },
  {
    date_from: "Jan 2024",
    date_to: "Mar 2024",
    title: "Ateneo de Naga University – Project RETSU",
    subtitle: "Contract • Lead Full-Stack Web Developer",
    screenshots: [
      {
        original: "retsu/retsu-1.png",
        thumbnail: "retsu/retsu-1.png",
      },
      {
        original: "retsu/retsu-2.png",
        thumbnail: "retsu/retsu-2.png",
      },
      {
        original: "retsu/retsu-3.png",
        thumbnail: "retsu/retsu-3.png",
      },
      {
        original: "retsu/retsu-4.png",
        thumbnail: "retsu/retsu-4.png",
      },
      {
        original: "retsu/retsu-5.png",
        thumbnail: "retsu/retsu-5.png",
      },
      {
        original: "retsu/retsu-6.png",
        thumbnail: "retsu/retsu-6.png",
      },
    ],
    screenshot_note: "These screenshots are publicly available views and do not include the internal system.",
    tags: ["Oracle", "Laravel 9", "Livewire", "Tailwind", "Internal and Public"],
    description:
      "A generic real-time queue management system solution for the University, enhancing user experience by reducing queue delays and eliminating the inconveniences associated with traditional queuing systems.",
    description_full: null,
    video_links: [],
    proponents: ["Johcel Gene Bitara", "Ryan Jay D. Rosano"],
    contributions: [
      "Developed a queue management system solution for the University, which enhanced the user experience by reducing queue delays and eliminating the inconveniences associated with traditional queuing systems.",
      "Developed a comprehensive queue management system for the University Treasurer’s Office, integrating a QR code-based ticketing system and a real-time queue status view for clients, with customizable controls through admin management.",
      "Optimized front-end, back-end, and database by improving SQL queries and data handling, increasing system efficiency by 84% and enabling seamless page loads with 26,000+ transactions per branch.",
      "Developed the system within a stringent two-month development and deployment timeframe, followed by a five-month maintenance period, while adhering to strict deadlines and managing time-sensitive pressures.",
      "Conducted a comprehensive testing phase, prototyping, and feedback, and facilitated onboarding for clients to ensure smooth adoption and operational efficiency.",
    ],
    features: [
      "Real-time Monitor View",
      "Queue Management",
      "Kiosk Device",
      "Online Queueing System",
      "Authentication",
      "User Privileges",
      "Internal and Public",
      "Generic",
      "Company Management",
      "Queue Branch Management",
      "Staff/Counter Management",
      "Company Overall Reports, Branch Overall Reports, Staff Performance Report",
    ],
    source_code_link: "https://mis-git.adnu.edu.ph/jbitara/retsu.git",
    source_code_locked: true,
    live_demo_link: "https://services.adnu.edu.ph/queue",
    live_demo_locked: false,
  },
  {
    date_from: "Sep 2022",
    date_to: "Oct 2023",
    title: "Department of Agriculture – Project DAAMIA",
    subtitle: "Subcontract • Lead Full-Stack Web Developer",
    screenshots: [
      {
        original: "daamia/daamia-1.png",
        thumbnail: "daamia/daamia-1.png",
      },
      {
        original: "daamia/daamia-2.png",
        thumbnail: "daamia/daamia-2.png",
      },
      {
        original: "daamia/daamia-3.png",
        thumbnail: "daamia/daamia-3.png",
      },
      {
        original: "daamia/daamia-4.png",
        thumbnail: "daamia/daamia-4.png",
      },
      {
        original: "daamia/daamia-5.png",
        thumbnail: "daamia/daamia-5.png",
      },
    ],
    screenshot_note: "These screenshots are publicly available views and do not include the internal system.",
    tags: ["DOTNET Framework", "C–SHARP", "MSSQL", "Internal"],
    description: "A real-time weather monitoring system for data analytics to Department of Agriculture stakeholders.",
    description_full: null,
    video_links: [],
    proponents: ["Johcel Gene Bitara", "Andrew Coros", "Samson Galicia Nollora Jr."],
    contributions: [
      "Developed a weather monitoring system by processing and storing large number of datasets from a local API weather data.",
      "Optimized the API fetching process to achieve 80% efficiency, which improved the rendering of pin markers on the map view, reduced the load time of pages, and enhanced data processing for the filter page.",
      "Created a background service built using C# WinForms for fetching and storing 10,000+ records per day of real-time weather data per station into the database.",
      "Implemented SMTP and enforced backend security for handling RESTful API requests, preventing server overload.",
      "Implemented, wrote, and designed a secure API, UI/UX of the application, data processing, and database configuration.",
    ],
    features: ["Real-time", "Weather Monitoring", "Data Extraction", "Map Visualization", "Data Export"],
    source_code_link: "https://github.com/Government-Projects/amia.git",
    source_code_locked: true,
    live_demo_link: null,
    live_demo_locked: true,
  },
]

const miscProjects: Project[] = [
  {
    date_from: "Oct 2023",
    date_to: "Apr 2024",
    title: "STUBU.AI",
    subtitle: "Lead Frontend Web Developer",
    screenshots: [
      {
        original: "stubu-ai/stubu-ai-1.png",
        thumbnail: "stubu-ai/stubu-ai-1.png",
      },
      {
        original: "stubu-ai/stubu-ai-1-video.png",
        thumbnail: "stubu-ai/stubu-ai-1-video.png",
        embedUrl: "https://www.youtube.com/embed/VmmuIew8EKM?si=t7cJapiuSXYX7zCG",
      },
      {
        original: "stubu-ai/stubu-ai-2.png",
        thumbnail: "stubu-ai/stubu-ai-2.png",
      },
      {
        original: "stubu-ai/stubu-ai-3.png",
        thumbnail: "stubu-ai/stubu-ai-3.png",
      },
      {
        original: "stubu-ai/stubu-ai-4.png",
        thumbnail: "stubu-ai/stubu-ai-4.png",
      },
      {
        original: "stubu-ai/stubu-ai-5.png",
        thumbnail: "stubu-ai/stubu-ai-5.png",
      },
      {
        original: "stubu-ai/stubu-ai-6.png",
        thumbnail: "stubu-ai/stubu-ai-6.png",
      },
      {
        original: "stubu-ai/stubu-ai-7.png",
        thumbnail: "stubu-ai/stubu-ai-7.png",
      },
      {
        original: "stubu-ai/stubu-ai-8.png",
        thumbnail: "stubu-ai/stubu-ai-8.png",
      },
    ],
    screenshot_note: null,
    tags: ["React", "Tailwind", "Typescript", "MongoDB", "ExpressJS"],
    description:
      "an AI-powered Learning Management System that adapts to learners as an all-in-one study buddy turning education into a personalized and interactive experience; reinventing the traditional education system.",
    description_full: null,
    video_links: ["https://www.youtube.com/embed/VmmuIew8EKM?si=-B6x7xxE66CRlcOH"],
    contributions: [
      "Assisted on UI/UX Design and made improvements to user experience (UX).",
      "Lead the project management for the front-end team consisting of four (4) developers and conducted SCRUM meetings for the group.",
      "Utilized version control and project management tools such as ClickUp and Github for efficient collaboration and tracking of project progress.",
      "Conducted code reviews to the team developers and provided technical documentations upon submission for Appcon 2023.",
    ],
    proponents: [
      "Martin Atole",
      "Johcel Gene Bitara",
      "Miguel Damien Garcera",
      "Noel Emaas",
      "Angeline Basbas",
      "Jiankarlo Belarmino",
      "Albert Perez",
    ],
    features: [
      "Adaptive Learning",
      "AI-powered",
      "Interactive",
      "Personalized",
      "Study Buddy",
      "Learning Management System",
      "Authentication",
      "Image Generation",
      "Content Course Generation",
      "Upvote Course",
      "Quiz Generation",
      "Course Assessment",
      "Material Submission",
    ],
    source_code_link: "https://github.com/STUBU-AI",
    source_code_locked: false,
    live_demo_link: null,
    live_demo_locked: false,
  },
  {
    date_from: "Apr 2024",
    date_to: "May 2024",
    title: "Dadsbol",
    subtitle: "Lead Game Developer",
    screenshots: [
      { original: "dadsbol/dadsbol-1.png", thumbnail: "dadsbol/dadsbol-1.png" },
      {
        original: "dadsbol/dadsbol-1-video.png",
        thumbnail: "dadsbol/dadsbol-1-video.png",
        embedUrl: "https://www.youtube.com/embed/IDMhTwF-YDs?si=FkXIWOgF1QIDNkOg",
      },
      { original: "dadsbol/dadsbol-2.png", thumbnail: "dadsbol/dadsbol-2.png" },
      { original: "dadsbol/dadsbol-3.png", thumbnail: "dadsbol/dadsbol-3.png" },
      { original: "dadsbol/dadsbol-4.png", thumbnail: "dadsbol/dadsbol-4.png" },
      { original: "dadsbol/dadsbol-5.png", thumbnail: "dadsbol/dadsbol-5.png" },
      { original: "dadsbol/dadsbol-6.png", thumbnail: "dadsbol/dadsbol-6.png" },
      { original: "dadsbol/dadsbol-7.png", thumbnail: "dadsbol/dadsbol-7.png" },
    ],
    screenshot_note: null,
    tags: ["Unity", "C–SHARP"],
    description:
      "Plays exaggerated power dodgeball and dodges through incoming balls with their ragdoll bodies. Evade balls, use players as shields, and win the (KoTS) King of the Streets! title by eliminating all kid gangs from across the streets of Naga!",
    description_full: null,
    video_links: ["https://www.youtube.com/embed/jGcnhP2mlio?si=jH6gCYKNhs2ogVt8"],
    proponents: ["Emmanuel Dominic A. Esperida", "Johcel Gene T. Bitara", "Paolo A. Alegre"],
    contributions: [
      "Lead the development of the game; a physics-based 3D ragdoll power dodgeball game. that allowed the team to stay on track of the short deadline. Developed the game’s core mechanics and gameplay; Designed the game’s UI/UX.",
      "Developed the game’s AI and enforced project architecture through simulation tick-based event system that allowed for clean modularized code.",
      "Utilized version control and project management tools such as Trello and Github for efficient collaboration and tracking of project progress.",
      "Collaborated with cross-functional teams to gather requirements, work on strengths, and ensure smooth integration and development for the game.",
    ],
    features: ["Ragdoll Physics", "Single Player", "Team Sport", "AI Players", "Powerups"],
    source_code_link: "https://github.com/ABE-Games/Dadsbol.git",
    source_code_locked: false,
    live_demo_link: "https://coffeeyu.itch.io/dadsbol",
    live_demo_locked: false,
  },
  {
    date_from: "Feb 2024",
    date_to: "Mar 2024",
    title: "Feline Purrsuit",
    subtitle: "Lead Game Developer",
    screenshots: [
      {
        original: "feline-purrsuit/feline-purrsuit-1.png",
        thumbnail: "feline-purrsuit/feline-purrsuit-1.png",
      },
      {
        original: "feline-purrsuit/feline-purrsuit-1-video.png",
        thumbnail: "feline-purrsuit/feline-purrsuit-1-video.png",
        embedUrl: "https://www.youtube.com/embed/jGcnhP2mlio?si=ZyUg9jAN5xmJ5wHN",
      },
      {
        original: "feline-purrsuit/feline-purrsuit-2.png",
        thumbnail: "feline-purrsuit/feline-purrsuit-2.png",
      },
      {
        original: "feline-purrsuit/feline-purrsuit-3.png",
        thumbnail: "feline-purrsuit/feline-purrsuit-3.png",
      },
      {
        original: "feline-purrsuit/feline-purrsuit-4.png",
        thumbnail: "feline-purrsuit/feline-purrsuit-4.png",
      },
      {
        original: "feline-purrsuit/feline-purrsuit-5.png",
        thumbnail: "feline-purrsuit/feline-purrsuit-5.png",
      },
      {
        original: "feline-purrsuit/feline-purrsuit-6.png",
        thumbnail: "feline-purrsuit/feline-purrsuit-6.png",
      },
      {
        original: "feline-purrsuit/feline-purrsuit-7.png",
        thumbnail: "feline-purrsuit/feline-purrsuit-7.png",
      },
      {
        original: "feline-purrsuit/feline-purrsuit-8.png",
        thumbnail: "feline-purrsuit/feline-purrsuit-8.png",
      },
      {
        original: "feline-purrsuit/feline-purrsuit-9.png",
        thumbnail: "feline-purrsuit/feline-purrsuit-9.png",
      },
      {
        original: "feline-purrsuit/feline-purrsuit-10.png",
        thumbnail: "feline-purrsuit/feline-purrsuit-10.png",
      },
      {
        original: "feline-purrsuit/feline-purrsuit-11.png",
        thumbnail: "feline-purrsuit/feline-purrsuit-11.png",
      },
    ],
    screenshot_note: null,
    tags: ["Unity", "C–SHARP"],
    description:
      "Feline Purrsuit is a cute, stressful cat chasing game about the town of Townsville being overrun by cats. That’s where you come in! Save the town of Townsville from this CATastrophe! Fish for baits, catch cats, then pet!",
    description_full: null,
    video_links: ["https://www.youtube.com/embed/jGcnhP2mlio?si=ZyyNXTeGYVoV8EhP"],
    proponents: ["Johcel Gene T. Bitara"],
    contributions: [
      "Founded the game concept and developed the game’s core mechanics and gameplay.",
      "Designed the game’s UI/UX and implemented the game’s art assets.",
      "Utilized version control and project management tools such as Trello and Github for efficient collaboration and tracking of project progress.",
      "Hosted the game’s live demo on Itch.io and managed the game’s documentation.",
    ],
    features: ["Isometric View", "Single Player", "Fishing Minigame", "Story", "Time-based", "Catch Pursuit"],
    source_code_link: "https://github.com/genebit/feline-purrsuit.git",
    source_code_locked: false,
    live_demo_link: "https://coffeeyu.itch.io/feline-purrsuit",
    live_demo_locked: false,
  },
  {
    date_from: "Sep 2023",
    date_to: "Dec 2023",
    title: "eBayan",
    subtitle: "Mobile Developer",
    screenshots: [
      {
        original: "ebayan/ebayan-1.png",
        thumbnail: "ebayan/ebayan-1.png",
      },
      {
        original: "ebayan/ebayan-1-video.png",
        thumbnail: "ebayan/ebayan-1-video.png",
        embedUrl: "https://www.youtube.com/embed/Oesh_VkuEy0?si=au5LRTptQtqnPTRX",
      },
      {
        original: "ebayan/ebayan-2.png",
        thumbnail: "ebayan/ebayan-2.png",
      },
      {
        original: "ebayan/ebayan-3.png",
        thumbnail: "ebayan/ebayan-3.png",
      },
      {
        original: "ebayan/ebayan-4.png",
        thumbnail: "ebayan/ebayan-4.png",
      },
      {
        original: "ebayan/ebayan-5.png",
        thumbnail: "ebayan/ebayan-5.png",
      },
      {
        original: "ebayan/ebayan-6.png",
        thumbnail: "ebayan/ebayan-6.png",
      },
      {
        original: "ebayan/ebayan-7.png",
        thumbnail: "ebayan/ebayan-7.png",
      },
    ],
    screenshot_note: null,
    tags: ["Firebase", "Flutter"],
    description: "An intuitive barangay-to-community mobile application for announcement creation management system.",
    description_full: null,
    video_links: ["https://www.youtube.com/embed/Oesh_VkuEy0?si=F-m4734naTQdtIss"],
    proponents: ["Johcel Gene T. Bitara", "Miguel Damien L. Garcera"],
    contributions: [
      "Lead project manager of the project. Conducted KANBAN and SCRUM meetings for the group.",
      "Developed core features of the application e.g., management system, authentication, and back-end configuration to google services – firebase, firestore, and firebase authentication.",
      "UI/UX engineer responsible for developing responsive and custom made design for an overall user experience.",
    ],
    features: [
      "Announcement Creation",
      "Announcement Management",
      "User Management",
      "User Authentication",
      "User Privileges",
    ],
    source_code_link: "https://github.com/NexusphereCo/ebayan.git",
    source_code_locked: false,
    live_demo_link: "https://github.com/NexusphereCo/ebayan/releases/tag/v1.0.0",
    live_demo_locked: false,
  },
]

const blogPosts: BlogPosts[] = [
  {
    title: "OpenVPN Setup Guide for DigitalOcean Droplet",
    date_added: "Mar 10, 2025",
    short_description: "Guide for using assigned OpenVPN config in Ubuntu env. (e.g., Digital Ocean Droplets).",
    link: "https://gist.github.com/genebit/d89360148e3c8506b7a1073aa05c2e71",
  },
  {
    title: "Laravel Application Setup via Virtual Hosting（XAMPP and PuTTY）",
    date_added: "Sep 24, 2024",
    short_description:
      "Outlines the steps to set up a Laravel application using a XAMPP Apache server with one server and multiple clients on the same network.",
    link: "https://gist.github.com/genebit/75c420fd6ba165790b56570ebbad4e78",
  },
  {
    title: "Guide for Using XDebug on Laravel 9 Visual Studio Code",
    date_added: "Mar 21, 2024",
    short_description: "Enables debugging in Visual Studio Code for Laravel 9.",
    link: "https://gist.github.com/genebit/75f887bb5ac48d8ae419e3e46b4e4013",
  },
  {
    title: "Guide for Connecting Laravel 9 with Oracle Database 12c",
    date_added: "Mar 16, 2024",
    short_description: "Configure OCI8 for Laravel to connect to Oracle.",
    link: "https://gist.github.com/genebit/5b4876aa85397ec2b76df7d1ca277d58",
  },
  {
    title: "A solution for horizontal scrolling in OneNote for Windows 10",
    date_added: "Mar 21, 2022",
    short_description: "Enables sidescrolling in OneNote for Windows 10.",
    link: "https://gist.github.com/genebit/c9e1a189d6b438dac7294125705175a4",
  },
]

const skills: Skill[] = [
  { name: "gcp", primary: false, label: "gcp" },
  { name: "digitalocean", primary: true, label: "DO" },
  { name: "mongodb", primary: false, label: "mongodb" },
  { name: "plsql", primary: false, label: "plsql" },
  { name: "oracle", primary: true, label: "oracle" },
  { name: "livewire", primary: false, label: "livewire" },
  { name: "dotnet", primary: false, label: "dotnet" },
  { name: "express", primary: false, label: "express" },
  { name: "firebase", primary: true, label: "firebase" },
  { name: "laravel", primary: true, label: "laravel" },
  { name: "nodejs", primary: true, label: "nodejs" },
  { name: "php", primary: true, label: "php" },
  { name: "alpinejs", primary: true, label: "alpinejs" },
  { name: "cs", primary: false, label: "cs" },
  { name: "css", primary: true, label: "css" },
  { name: "dart", primary: false, label: "dart" },
  { name: "html", primary: true, label: "html" },
  { name: "js", primary: true, label: "js" },
  { name: "typescript", primary: true, label: "TS" },
  { name: "react", primary: true, label: "react" },
  { name: "sass", primary: true, label: "sass" },
  { name: "unity", primary: false, label: "unity" },
  { name: "bash", primary: true, label: "bash" },
  { name: "powershell", primary: true, label: "powershell" },
  { name: "docker", primary: true, label: "docker" },
  { name: "githubactions", primary: false, label: "githubactions" },
  { name: "figma", primary: true, label: "figma" },
  { name: "git", primary: true, label: "git" },
  { name: "github", primary: true, label: "github" },
  { name: "gitlab", primary: true, label: "gitlab" },
  { name: "vscode", primary: true, label: "vscode" },
  { name: "lucidchart", primary: false, label: "lucidchart" },
  { name: "windows", primary: false, label: "windows" },
  { name: "linux", primary: false, label: "linux" },
]

const achievements: CardStack[] = [
  {
    issuedDate: "Dec 2021",
    name: "Freshmen Computer Programming Competition",
    description: "18th Place among 97 freshmen participants.",
    images: ["/docs/achievement/cp-1.png", "/docs/achievement/cp-2.png"],
  },
  {
    issuedDate: "Oct 2022",
    name: "Smartbooks and Power BI Certificate of Completion",
    images: ["/docs/achievement/sap-2.png"],
  },
  {
    issuedDate: "Jun 2024",
    name: "SAP Business One DBMS for IT Certificate of Completion",
    images: ["/docs/achievement/sap-1.png"],
  },
  {
    issuedDate: "Jun 2024",
    name: "AppCon2023 Development Contest Certificate of Participation",
    images: ["/docs/achievement/appcon-1.png"],
  },
  {
    issuedDate: "Dec 2024",
    name: "Idea2Startup Qualifier and Fund Awardee",
    images: [
      "/docs/achievement/idea2startup-1.png",
      "/docs/achievement/idea2startup-2.png",
      "/docs/achievement/idea2startup-3.png",
      "/docs/achievement/idea2startup-4.png",
    ],
  },
  {
    issuedDate: "Aug 2024",
    name: "Level 1 Certified Data Center Technician（CDCT）",
    images: ["/docs/achievement/vitro-1.png", "/docs/achievement/vitro-2.png", "/docs/achievement/vitro-3.png"],
  },
]

export { highlightedProjects, miscProjects, blogPosts, skills, achievements }
