import { 
  PersonalDetails, 
  Project, 
  SkillCategory, 
  HighlightCard, 
  EducationItem, 
  CertificationItem, 
  CodeChefProfileData,
  CareerMilestone,
  TargetCompany 
} from '../types';

export const personalDetails: PersonalDetails = {
  name: "Surili Govindsing Reknod",
  title: "Information Technology Student | Aspiring Software Engineer",
  tagline: "Building digital experiences that make an impact.",
  location: "Chhatrapati Sambhajinagar, Maharashtra",
  college: "R. C. Patel Institute of Technology, Shirpur, Maharashtra",
  email: "surelireknod@gmail.com",
  phone: "8262007814",
  github: "https://github.com/SuriliReknod18",
  linkedin: "https://www.linkedin.com/in/surili-reknod-5a689842a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  codechefId: "surilireknod", // Replace with your exact CodeChef handle if different
  codechef: "https://www.codechef.com/users/surilireknod",
  availabilityBadge: "Open to SDE Internships & Opportunities",
  shortIntro: "Second-year Information Technology student at R. C. Patel Institute of Technology with foundational expertise in Java and C programming, active pursuit of Data Structures & Algorithms (DSA), and a dedicated passion for engineering scalable software solutions.",
  aboutStory: "I am a second-year Information Technology undergraduate at R. C. Patel Institute of Technology, Shirpur, originally from Chhatrapati Sambhajinagar, Maharashtra. My journey in technology is driven by a deep curiosity for how computational systems solve human problems. With strong academic roots (90.20% in 10th, 84.67% in 12th, and a 7.26 first-year CGPA), I spend my days coding in Java and C, sharpening my intuition in Data Structures and Algorithms, and building digital applications like my Online Student Leave Application System. Beyond the terminal, I channel creativity and precision into cooking—another craft of thoughtful experimentation.",
  hobbies: ["Coding & Algorithm Design", "Software Development", "Exploring Emerging Technologies", "Culinary Arts & Cooking"],
  resumeDownloadUrl: "/resume.pdf",
  profilePhoto: "/profile.jpg",
};

export const aboutHighlights: HighlightCard[] = [
  {
    label: "Academic CGPA",
    value: "7.26 / 10",
    subtext: "First-Year B.Tech IT at RCPIT",
    icon: "GraduationCap"
  },
  {
    label: "Secondary (10th)",
    value: "90.20%",
    subtext: "High Distinction Academic Record",
    icon: "Award"
  },
  {
    label: "Higher Secondary (12th)",
    value: "84.67%",
    subtext: "First Class with Distinction",
    icon: "BookOpen"
  },
  {
    label: "Verified Credentials",
    value: "2x CodeChef",
    subtext: "Certified in Java & C Programming",
    icon: "ShieldCheck"
  }
];

export const educationHistory: EducationItem[] = [
  {
    id: "btech-it",
    degree: "Bachelor of Technology (B.Tech) in Information Technology",
    institution: "R. C. Patel Institute of Technology, Shirpur, Maharashtra",
    scoreLabel: "First-Year CGPA",
    scoreValue: "7.26 / 10",
    period: "2023 — 2027 (Expected)",
    location: "Shirpur, Maharashtra",
    status: "Currently Pursuing (Second Year)",
    courses: [
      "Object-Oriented Programming (Java)",
      "Data Structures & Algorithms (DSA)",
      "C Programming Fundamentals",
      "Database Management Systems (DBMS)",
      "Discrete Mathematics & Logic",
      "Computer Organization & Architecture"
    ],
    highlights: [
      "Active participant in departmental programming labs and technical symposiums.",
      "Developing institutional full-stack project: Online Student Leave Application System.",
      "Consistent academic performance with 7.26 First-Year CGPA."
    ]
  },
  {
    id: "hsc-12th",
    degree: "Higher Secondary Certificate (HSC — 12th Standard)",
    institution: "Maharashtra State Board of Secondary and Higher Secondary Education",
    scoreLabel: "Final Percentage",
    scoreValue: "84.67%",
    period: "Completed 2023",
    location: "Chhatrapati Sambhajinagar, Maharashtra",
    status: "First Class with Distinction",
    courses: ["Physics", "Chemistry", "Mathematics", "English", "Information Technology / Science"],
    highlights: [
      "Distinction in Mathematics and physical sciences.",
      "Developed foundational analytical logic and systematic problem-solving aptitude."
    ]
  },
  {
    id: "ssc-10th",
    degree: "Secondary School Certificate (SSC — 10th Standard)",
    institution: "Maharashtra State Board of Secondary and Higher Secondary Education",
    scoreLabel: "Final Percentage",
    scoreValue: "90.20%",
    period: "Completed 2021",
    location: "Chhatrapati Sambhajinagar, Maharashtra",
    status: "Top 10% Distinction",
    courses: ["Science & Technology", "Mathematics", "Social Sciences", "Languages"],
    highlights: [
      "Achieved stellar 90.20% overall score with outstanding marks in Mathematics & Science.",
      "Fostered early curiosity in computational thinking and scientific experimentation."
    ]
  }
];

export const certifications: CertificationItem[] = [
  {
    id: "codechef-java",
    title: "Java Programming Language Certification",
    issuer: "CodeChef",
    date: "Certified 2024",
    verificationId: "CC-JAVA-SR24",
    certificateUrl: "https://www.codechef.com/certificates",
    skillsLearned: ["Core Java Syntax", "OOP Concepts (Inheritance, Polymorphism, Encapsulation)", "Memory Management", "Class Design & Methods", "Exception Handling"],
    status: "Verified"
  },
  {
    id: "codechef-c",
    title: "C Programming Language Certification",
    issuer: "CodeChef",
    date: "Certified 2024",
    verificationId: "CC-CPROG-SR24",
    certificateUrl: "https://www.codechef.com/certificates",
    skillsLearned: ["Pointers & Dynamic Memory", "Data Types & Operators", "Arrays, Strings & Structs", "Algorithmic Control Flow", "Standard I/O & Functions"],
    status: "Verified"
  }
];

export const codeChefProfile: CodeChefProfileData = {
  username: "surilireknod",
  profileUrl: "https://www.codechef.com/users/surilireknod",
  platform: "CodeChef",
  verifiedCertifications: ["C Programming Certification", "Java Programming Certification"],
  focusAreas: ["Foundational Algorithms", "Mathematical Reasoning", "Array Manipulations", "Time Complexity Optimization"],
  bio: "Information Technology undergraduate actively practicing computational logic, algorithmic challenges, and programming language constructs.",
  targetRating: "3-Star Division Target"
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    description: "Core programming languages utilized for software development and algorithmic problem solving.",
    skills: [
      { name: "Java", level: "Primary Language / OOP", tag: "Certified by CodeChef" },
      { name: "C", level: "Core Systems / Foundations", tag: "Certified by CodeChef" }
    ]
  },
  {
    id: "fundamentals",
    title: "CS Fundamentals & DSA",
    icon: "Cpu",
    description: "Essential computer science principles, algorithmic patterns, and architectural paradigms.",
    skills: [
      { name: "Data Structures (DSA)", level: "Arrays, Linked Lists, Stacks, Queues, Trees", tag: "In Active Practice" },
      { name: "Algorithms & Big-O", level: "Searching, Sorting, Recursion, Time/Space Analysis", tag: "Learning" },
      { name: "Object-Oriented Programming (OOP)", level: "Abstraction, Encapsulation, Polymorphism", tag: "Core Mastery" },
      { name: "Problem Solving", level: "Logical Deduction & Algorithmic Tracing", tag: "Continuous Practice" }
    ]
  },
  {
    id: "tools",
    title: "Development Tools & Environment",
    icon: "Terminal",
    description: "Daily developer environment and version control utilities.",
    skills: [
      { name: "Visual Studio Code", level: "Primary Code Editor & Debugger", tag: "Environment" },
      { name: "Git", level: "Version Control & Branching", tag: "Daily Workflow" },
      { name: "GitHub", level: "Repository Management & Collaboration", tag: "SuriliReknod18" }
    ]
  },
  {
    id: "interests",
    title: "Areas of Special Interest",
    icon: "Layers",
    description: "Key technology domains and career aspirational directions.",
    skills: [
      { name: "Software Engineering", level: "System Design & Clean Code Practices", tag: "Career Objective" },
      { name: "Application Development", level: "Digitizing Real-World Administrative Workflows", tag: "Project Focused" },
      { name: "Relational Database Concepts (DBMS)", level: "Schema Modeling, Tables, SQL Fundamentals", tag: "Academic" }
    ]
  },
  {
    id: "strengths",
    title: "Personal Strengths & Interests",
    icon: "Sparkles",
    description: "Personal attributes and creative pursuits that shape my problem-solving approach.",
    skills: [
      { name: "Analytical Problem Solving", level: "Structured breakdown of complex challenges", tag: "Strength" },
      { name: "Continuous Learning", level: "Enthusiastic adoption of new frameworks & stacks", tag: "Mindset" },
      { name: "Coding & Programming", level: "Passionate hobby and daily practice", tag: "Hobby" },
      { name: "Cooking & Culinary Arts", level: "Creative recipe experimentation & precision", tag: "Hobby" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "leave-system",
    title: "Online Student Leave Application System",
    category: "Academic Software Project",
    tagline: "A comprehensive digital administrative portal streamlining student leave submissions and institutional faculty approvals.",
    problemSolved: "Traditional paper-based leave slips in colleges cause physical bottlenecks, delayed teacher signatures, misplaced records, and zero transparency. This project digitizes the entire lifecycle—allowing students to submit digital leave requests with categorized justifications and giving faculty a centralized dashboard for real-time approvals.",
    keyFeatures: [
      "Student Portal: Intuitive form submission with medical, academic, or personal leave categorization and date span selection.",
      "Faculty & Admin Dashboard: Real-time request feed with timestamped 1-click Approve, Reject, or Request-Clarification actions.",
      "Application Lifecycle Tracking: Instant visual status indicators (Pending Review, Approved, Rejected) for total transparency.",
      "Institutional Record Archival: Clean schema keeping auditable historical leave logs, reducing paperwork and administrative burden."
    ],
    techStack: ["Java", "HTML5", "CSS3", "JavaScript", "DBMS / SQL Concepts", "Object-Oriented Design"],
    status: "In Progress",
    statusNote: "Actively developing core modules and interface workflows as a second-year academic capstone.",
    githubUrl: "https://github.com/SuriliReknod18/Online-Student-Leave-Application-System",
    liveDemoUrl: "#",
    previewGradient: "from-violet-900/40 via-cyan-950/40 to-pink-950/30"
  },
  {
    id: "dsa-algorithms-workbench",
    title: "Java Data Structures & Algorithms Practice Lab",
    category: "Algorithmic Problem Solving",
    tagline: "Curated repository of algorithmic solutions, linear/non-linear data structure implementations, and complexity analyses.",
    problemSolved: "Mastering coding interviews and Tier-1 engineering problem-solving requires structured hands-on implementation from scratch rather than relying on high-level abstractions.",
    keyFeatures: [
      "From-scratch implementations of Linked Lists, Stacks, Queues, Binary Trees, and Hash Maps in Java.",
      "Algorithmic paradigms covered: Two-Pointer technique, Sliding Window, Binary Search, and Recursion.",
      "Documented Big-O Time & Space complexity metrics and verification unit test cases."
    ],
    techStack: ["Java", "Data Structures", "Algorithms", "Big-O Analysis", "VS Code", "Git"],
    status: "Completed",
    githubUrl: "https://github.com/SuriliReknod18/Java-DSA-Solutions",
    liveDemoUrl: "#",
    previewGradient: "from-cyan-950/50 via-slate-900 to-violet-950/40"
  },
  {
    id: "student-record-system",
    title: "Student Academic Record & Grade Analyzer",
    category: "Java & Database Application",
    tagline: "Console & GUI-based academic record management system for calculating semester SGPA/CGPA and tracking student academic standing.",
    problemSolved: "Simplifies manual grade calculations across multiple semesters while enforcing data validation rules and automated performance classification.",
    keyFeatures: [
      "Modular class architecture encapsulating Student, Course, Semester, and Evaluation models.",
      "Automated SGPA and cumulative CGPA calculation based on university credit grading schemes.",
      "Persistence layer supporting record export, search by PRN/Roll number, and score statistics."
    ],
    techStack: ["Java", "OOP Principles", "File I/O / SQL", "VS Code"],
    status: "Active Concept",
    statusNote: "Modular architecture planned for semester coursework enhancement.",
    githubUrl: "https://github.com/SuriliReknod18",
    liveDemoUrl: "#",
    previewGradient: "from-pink-950/40 via-navy-900 to-cyan-950/40"
  }
];

export const careerMilestones: CareerMilestone[] = [
  {
    phase: "Phase 1 (Current — Year 2)",
    title: "Foundations Mastery & Academic Excellence",
    status: "Current Focus",
    description: "Deep dive into Data Structures & Algorithms in Java, maintain strong CGPA at RCPIT Shirpur, complete the Online Student Leave Application System, and maintain active CodeChef problem solving streak.",
    deliverables: [
      "Solve 200+ DSA problems covering Linear and Non-Linear structures.",
      "Deploy functional version of Online Student Leave Application System.",
      "Advance CodeChef competitive programming rating."
    ]
  },
  {
    phase: "Phase 2 (Year 3)",
    title: "Advanced Systems, Web Stacks & Open Source",
    status: "Next Milestone",
    description: "Expand into modern full-stack web architectures, explore backend API design (Spring Boot / Node.js), participate in regional hackathons, and contribute to open-source software.",
    deliverables: [
      "Build production-grade full stack applications.",
      "Crack university technical hackathons and competitive coding contests.",
      "Prepare for summer software engineering internships."
    ]
  },
  {
    phase: "Phase 3 (Final Year)",
    title: "Engineering Internships & Campus Placement",
    status: "Future Target",
    description: "Secure a prestigious Software Development Engineering (SDE) internship and successfully participate in on-campus & off-campus hiring drives for top technology companies.",
    deliverables: [
      "Complete mock coding rounds and system design fundamentals.",
      "Showcase polished portfolio and verified CodeChef/GitHub metrics to recruiters."
    ]
  },
  {
    phase: "Phase 4 (Long-Term)",
    title: "Software Engineer at Global Tech Titans",
    status: "Long-term Goal",
    description: "Begin professional career as a high-impact Software Engineer at premier technology innovators such as Microsoft, Google, Amazon, or Samsung—architecting robust systems that serve millions worldwide.",
    deliverables: [
      "Design resilient, high-throughput distributed applications.",
      "Continuously innovate and mentor future women in engineering and tech."
    ]
  }
];

export const targetCompanies: TargetCompany[] = [
  {
    name: "Microsoft",
    domain: "Cloud, AI & Developer Platforms",
    badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-950/30",
    role: "Software Development Engineer (SDE)"
  },
  {
    name: "Google",
    domain: "Large-Scale Distributed Systems & Search",
    badgeColor: "border-pink-500/40 text-pink-300 bg-pink-950/30",
    role: "Associate Software Engineer"
  },
  {
    name: "Amazon",
    domain: "High-Scale E-Commerce & AWS Cloud",
    badgeColor: "border-amber-500/40 text-amber-300 bg-amber-950/30",
    role: "Software Development Engineer I"
  },
  {
    name: "Samsung",
    domain: "Mobile Ecosystems, Semiconductor & R&D",
    badgeColor: "border-violet-500/40 text-violet-300 bg-violet-950/30",
    role: "Software R&D Engineer"
  }
];
