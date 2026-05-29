import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarCheck,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Server,
  Trophy,
  Users
} from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type SkillItem = {
  name: string;
  details?: string;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: SkillItem[];
};

export type Project = {
  index: string;
  title: string;
  tag: string;
  year: string;
  description: string;
  image: string;
  mediaType?: "image" | "video";
  stack: string[];
  span: string;
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  type: string;
  highlights: string[];
  stack?: string;
};

export type Certification = {
  issuer: string;
  title: string;
  issued: string;
  expires?: string;
  credential?: string;
  skills?: string[];
};

export type Language = {
  name: string;
  proficiency: string;
  details?: string;
  date?: string;
};

export const profile = {
  name: "Aditya Putra Afendi",
  displayName: "ADITYA PUTRA AFENDI",
  initials: "APA",
  tagline: "Project Coordinator / System Analyst / Technology Operations",
  location: "Bekasi, Indonesia",
  status: "Open to recruiter conversations",
  discipline: "Project Management · System Analysis · Technology",
  email: "adityaputra.afendi@gmail.com",
  phone: "087873778727",
  intro:
    "Computer Engineering graduate with experience in project coordination, system and business analysis, organizational leadership, and technology-enabled operations.",
  about: [
    "I work well in structured environments that require clear communication, documentation, collaboration, and measurable execution. My background combines computer engineering fundamentals with project coordination, event operations, HR development, and business process improvement.",
    "Across internships, national-scale events, and university organizations, I have helped translate ideas and requirements into action plans, coordinate cross-functional stakeholders, and keep teams aligned from planning through evaluation.",
    "My current professional direction sits at the intersection of project management, system analysis, and technology operations. I am disciplined, adaptive, and continuously learning in areas related to business process improvement, AI/ML, and scalable digital systems."
  ],
  facts: [
    ["Team Capstone Award", "2nd Best"],
    ["Projects Handled", "15+"],
    ["Professional Certified", "30+"],
    ["Student Activity Unit", "Top 5 Led"]
  ]
};

export const socials: SocialLink[] = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Linkedin
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: Github
  },
  {
    label: "Phone",
    href: `tel:${profile.phone}`,
    icon: Phone
  }
];

export const skills: SkillGroup[] = [
  {
    title: "Technical & Programming",
    icon: Code2,
    items: [
      { name: "Python", details: "" },
      { name: "Python with Pandas", details: "" },
      { name: "C++", details: "" },
      { name: "PHP", details: "" },
      { name: "React", details: "" },
      { name: "HTML and CSS", details: "" },
      { name: "API Development", details: "" },
      { name: "API Integration", details: "" },
      { name: "IoT Development", details: "" },
      { name: "3D CAD", details: "" },
      { name: "Virtual Reality Development", details: "" },
      { name: "DevOps", details: "" },
      { name: "IT Asset Management", details: "" },
      { name: "IT Risk Management", details: "" },
      { name: "IT Service Management Tools", details: "" },
      { name: "ERP", details: "" },
      { name: "GCP", details: "" },
      { name: "Blockchain Technology", details: "" },
      { name: "Big Data Technology", details: "" }
    ]
  },
  {
    title: "AI, ML & Data",
    icon: BrainCircuit,
    items: [
      { name: "AI / Machine Learning Engineering", details: "" },
      { name: "Applied AI Research", details: "" },
      { name: "Machine Learning Algorithms", details: "" },
      { name: "TensorFlow", details: "" },
      { name: "Computer Vision", details: "" },
      { name: "Data Engineering", details: "" },
      { name: "Data Mining", details: "" },
      { name: "Data Analysis", details: "" },
      { name: "Quantitative Analysis", details: "" },
      { name: "Predictive Analytics", details: "" },
      { name: "Prescriptive Analytics", details: "" },
      { name: "Data Collection and Evaluation", details: "" },
      { name: "Data Reporting and Visualization", details: "" },
      { name: "Data Governance", details: "" },
      { name: "Data Privacy and Protection", details: "" },
      { name: "Data Encryption", details: "" },
      { name: "Organizing Data", details: "" },
      { name: "Pattern Identification", details: "" },
      { name: "Excel", details: "" }
    ]
  },
  {
    title: "Project, Product & Business",
    icon: Server,
    items: [
      { name: "Project Management", details: "" },
      { name: "Agile Methodology", details: "" },
      { name: "Action Planning", details: "" },
      { name: "Product Development", details: "" },
      { name: "Product Knowledge", details: "" },
      { name: "Prototyping", details: "" },
      { name: "Business Understanding", details: "" },
      { name: "Financial Understanding", details: "" },
      { name: "Market Analysis", details: "" },
      { name: "Client Consulting Services", details: "" },
      { name: "Audit", details: "" },
      { name: "Anti-Money Laundering", details: "" },
      { name: "Root Cause Analysis", details: "" },
      { name: "Decision Making", details: "" },
      { name: "Prioritization", details: "" },
      { name: "Planning and Prioritizing Tasks", details: "" },
      { name: "Follow-up Techniques", details: "" },
      { name: "Time Management", details: "" }
    ]
  },
  {
    title: "HR, People & Organization",
    icon: BriefcaseBusiness,
    items: [
      { name: "HR Analytics", details: "" },
      { name: "HR Digitalization", details: "" },
      { name: "HR Systems Management", details: "" },
      { name: "Recruitment and Talent Acquisition", details: "" },
      { name: "Applicant Tracking Systems", details: "" },
      { name: "Candidate Sourcing", details: "" },
      { name: "Resume Screening", details: "" },
      { name: "Interviewing", details: "" },
      { name: "Onboarding", details: "" },
      { name: "Employee Engagement", details: "" },
      { name: "Employee Engagement Management", details: "" },
      { name: "Employee Relations", details: "" },
      { name: "Employee Relations Management", details: "" },
      { name: "Employee Communication Management", details: "" },
      { name: "Employee Counseling", details: "" },
      { name: "Employee Recognition Programs", details: "" },
      { name: "Compensation and Benefits", details: "" },
      { name: "Compensation Management", details: "" },
      { name: "Employment Contracts", details: "" },
      { name: "Disciplinary Procedures", details: "" },
      { name: "Competency Framework Development", details: "" },
      { name: "Career Framework Design", details: "" },
      { name: "Talent Assessment", details: "" },
      { name: "Succession Planning", details: "" },
      { name: "Organizational Culture Development", details: "" },
      { name: "Organizational Design", details: "" },
      { name: "Organizational Development", details: "" }
    ]
  },
  {
    title: "Creative, UX & Digital",
    icon: Database,
    items: [
      { name: "Figma", details: "" },
      { name: "Wireframing", details: "" },
      { name: "UX Optimization", details: "" },
      { name: "Human-Computer Interaction", details: "" },
      { name: "Information Design", details: "" },
      { name: "Adobe Creative Suite", details: "" },
      { name: "Content Marketing", details: "" },
      { name: "Social Media", details: "" },
      { name: "Influencer Marketing", details: "" },
      { name: "Viral Marketing", details: "" },
      { name: "Employer Branding", details: "" },
      { name: "Presentation", details: "" },
      { name: "Office Suites", details: "" },
      { name: "E-Learning Platforms", details: "" },
      { name: "Account Management", details: "" }
    ]
  },
  {
    title: "Leadership & Communication",
    icon: Users,
    items: [
      { name: "Leadership", details: "" },
      { name: "Leadership Development", details: "" },
      { name: "Team Collaboration", details: "" },
      { name: "Teamwork", details: "" },
      { name: "Collaboration", details: "" },
      { name: "Communication", details: "" },
      { name: "Assertive Communication", details: "" },
      { name: "Effective Communication and Socialization", details: "" },
      { name: "Oral Communication", details: "" },
      { name: "Public Speaking", details: "" },
      { name: "Discussion", details: "" },
      { name: "Negotiation", details: "" },
      { name: "Persuasion", details: "" },
      { name: "Building Relationships", details: "" },
      { name: "Coaching and Mentoring", details: "" },
      { name: "Training and Development", details: "" },
      { name: "Training Needs Analysis", details: "" },
      { name: "Learning and Development", details: "" },
      { name: "Learning and Development Strategy", details: "" },
      { name: "Learning Needs Analysis", details: "" },
      { name: "Motivating Others", details: "" },
      { name: "Conflict Resolution", details: "" }
    ]
  },
  {
    title: "Professional Traits",
    icon: BadgeCheck,
    items: [
      { name: "Active Learning", details: "" },
      { name: "Active Listening", details: "" },
      { name: "Listening Skills", details: "" },
      { name: "Adaptability", details: "" },
      { name: "Analytical Thinking", details: "" },
      { name: "Attention to Detail", details: "" },
      { name: "Business Acumen", details: "" },
      { name: "Creative Problem Solving", details: "" },
      { name: "Creative Thinking", details: "" },
      { name: "Critical Thinking", details: "" },
      { name: "Curiosity", details: "" },
      { name: "Emotional Intelligence", details: "" },
      { name: "Emotional Regulation", details: "" },
      { name: "Empathy", details: "" },
      { name: "Ethical Judgment and Integrity", details: "" },
      { name: "Flexibility", details: "" },
      { name: "Initiative", details: "" },
      { name: "Innovation", details: "" },
      { name: "Intuition", details: "" },
      { name: "Multitasking", details: "" },
      { name: "Open-mindedness", details: "" },
      { name: "Organizational Skills", details: "" },
      { name: "Perspicacity", details: "" },
      { name: "Positive Attitude", details: "" },
      { name: "Problem Solving", details: "" },
      { name: "Reliability", details: "" },
      { name: "Self-awareness", details: "" },
      { name: "Social Sensitivity", details: "" },
      { name: "Strategic Thinking", details: "" },
      { name: "Tenacity", details: "" },
      { name: "Tolerance", details: "" },
      { name: "Typing Fast", details: "" },
      { name: "Working Under Pressure", details: "" },
      { name: "English", details: "" }
    ]
  }
];

export const projects: Project[] = [
  {
    index: "01",
    title: "Sibinkar",
    tag: "HR Operations System",
    year: "2024",
    description:
      "Personnel data management and status tracking web application built during NTMC Korlantas POLRI internship. Led design and system architecture with focus on scalable records, automated notifications, and HR usability.",
    image: "/assets/projects/work-doc-image-2.png",
    stack: ["System Design", "Web App", "HRIS", "Data Management"],
    span: "md:col-span-6"
  },
  {
    index: "02",
    title: "SiBantu",
    tag: "Mobile Service Platform",
    year: "2025",
    description:
      "Mobile-based platform concept from Bangkit Academy that connects users with verified home service professionals for easy, reliable home repair booking.",
    image: "/assets/projects/work-doc-image-4.png",
    stack: ["Machine Learning", "Mobile Product", "UX Flow", "Team Delivery"],
    span: "md:col-span-6"
  },
  {
    index: "03",
    title: "UTC2K25 Digital Campaign",
    tag: "Event Branding",
    year: "2025",
    description:
      "Owned event branding for a first-ever national taekwondo championship, driving 457,700+ impressions and 6,800+ organic Instagram interactions in one month.",
    image: "/assets/projects/work-doc-image-7.jpeg",
    stack: ["Project Management", "Campaign Strategy", "Stakeholder Management", "Analytics"],
    span: "md:col-span-6"
  },
  {
    index: "04",
    title: "Leadership Training 2024",
    tag: "Program Delivery",
    year: "2024",
    description:
      "Planned, coordinated, executed, and evaluated a leadership development program with 100% completion of planned activities and aligned qualitative outcomes.",
    image: "/assets/projects/leadership-training.mp4",
    mediaType: "video",
    stack: ["Program Management", "Committee Coordination", "Evaluation", "People Development"],
    span: "md:col-span-6"
  }
];

export const experiences: Experience[] = [
  {
    period: "Aug 2025 - Mar 2026",
    role: "Hardware Engineer Intern",
    company: "Evotech",
    type: "Internship · On-site",
    highlights: ["Supported productization workflows in a hardware engineering environment."],
    stack: "Productization"
  },
  {
    period: "Dec 2024 - Dec 2025",
    role: "Project Officer",
    company: "UNDIP Taekwondo Championship 2025",
    type: "Contract · National Level",
    highlights: [
      "Led execution of a national championship involving 1,400+ athletes and 5,000+ visitors over two days.",
      "Coordinated stakeholders including BTN, Knights Sportswear, and multiple brand partners.",
      "Owned event branding from scratch and achieved 457,700+ impressions plus 6,800+ organic interactions."
    ],
    stack: "Project Management · Stakeholder Management · Event Branding"
  },
  {
    period: "Sep 2024 - Jan 2025",
    role: "Machine Learning Graduate Student",
    company: "Bangkit Academy",
    type: "Internship · Remote",
    highlights: [
      "Built SiBantu, a mobile-based home service platform concept connecting users with verified professionals.",
      "Worked in a multidisciplinary delivery environment led by Google, Tokopedia, Gojek, and Traveloka."
    ],
    stack: "Machine Learning · Team Management · Project Delivery"
  },
  {
    period: "Jun 2024 - Aug 2024",
    role: "Intern",
    company: "NTMC Korlantas POLRI",
    type: "Internship",
    highlights: [
      "Led design and system architecture for Sibinkar, a personnel data management and status tracking web application.",
      "Focused on scalable records, secure handling, automated notifications, and HR team usability."
    ],
    stack: "System Analysis · Project Management · UI Design"
  },
  {
    period: "Mar 2024 - May 2025",
    role: "Vice Head of Human Resource Development",
    company: "Himpunan Mahasiswa Teknik Komputer",
    type: "Full-time Organization",
    highlights: [
      "Improved internal coordination through structured development and evaluation programs.",
      "Supported recruitment, onboarding, and organizational regeneration."
    ],
    stack: "HR Development · People Development · Coordination"
  },
  {
    period: "Jan 2023 - Jan 2024",
    role: "Vice President",
    company: "UKM Taekwondo UNDIP",
    type: "Full-time Organization",
    highlights: [
      "Led end-to-end organizational operations, administration, documentation, and program execution.",
      "Delivered ~95% annual work program completion and achieved Top 5 UKM recognition at Diponegoro University."
    ],
    stack: "Organizational Leadership · Operations Management"
  }
];

export const education = {
  school: "Diponegoro University",
  degree: "Undergraduate Student, Computer Engineering",
  period: "Aug 2022 - Mar 2026",
  grade: "GPA 3.73",
  icon: GraduationCap
};

export const certifications: Certification[] = [
  {
    issuer: "Google",
    title: "Google Project Management Specialization",
    issued: "Jan 2026",
    credential: "6MBW7IC97Z9V",
    skills: ["Agile Project Management", "Project Management"]
  },
  {
    issuer: "IBM",
    title: "Introduction to Project Management",
    issued: "Jan 2026",
    credential: "TBAWD7UM7DHY"
  },
  {
    issuer: "Google",
    title: "Accelerate Your Job Search with AI",
    issued: "Jan 2026",
    credential: "ZZEK8POCLBW1"
  },
  {
    issuer: "Google",
    title: "Capstone: Applying Project Management in the Real World",
    issued: "Jan 2026",
    credential: "H3RYGI31WZM1"
  },
  {
    issuer: "Google",
    title: "Agile Project Management",
    issued: "Jan 2026",
    credential: "674AGMOD66TY"
  },
  {
    issuer: "Google",
    title: "Project Execution: Running the Project",
    issued: "Jan 2026",
    credential: "TXB6IKA2B9H3"
  },
  {
    issuer: "Google",
    title: "Project Planning: Putting It All Together",
    issued: "Jan 2026",
    credential: "RYOL1YN3MXEY"
  },
  {
    issuer: "Google",
    title: "Project Initiation: Starting a Successful Project",
    issued: "Jan 2026",
    credential: "W6X2U7XGBTR0"
  },
  {
    issuer: "Stanford University",
    title: "Advanced Learning Algorithms",
    issued: "Oct 2024",
    credential: "GKIIJB869BT2"
  },
  {
    issuer: "DeepLearning.AI",
    title: "Linear Algebra for Machine Learning and Data Science",
    issued: "Oct 2024",
    credential: "I0YV068QIGN0"
  },
  {
    issuer: "Google",
    title: "Using Python to Interact with the Operating System",
    issued: "Sep 2024",
    credential: "MF4IC03C04ZK"
  },
  {
    issuer: "Stanford University",
    title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
    issued: "Oct 2024",
    credential: "WPOK9JX9DYSA"
  },
  {
    issuer: "DeepLearning.AI",
    title: "Custom and Distributed Training with TensorFlow",
    issued: "Dec 2024",
    credential: "R7FJHNF8Z8ZI"
  },
  {
    issuer: "DeepLearning.AI",
    title: "Structuring Machine Learning Projects",
    issued: "Nov 2024",
    credential: "R0Z1TQABO8V1"
  },
  {
    issuer: "DeepLearning.AI",
    title: "Advanced Computer Vision with TensorFlow",
    issued: "Dec 2024",
    credential: "M92ZXK9YMYZT"
  },
  {
    issuer: "DeepLearning.AI",
    title: "Device-based Models with TensorFlow Lite",
    issued: "Nov 2024",
    credential: "B6ZB88OYC07U"
  },
  {
    issuer: "DeepLearning.AI",
    title: "Natural Language Processing in TensorFlow",
    issued: "Oct 2024",
    credential: "YDIS6TJ2M54X"
  },
  {
    issuer: "DeepLearning.AI",
    title: "Convolutional Neural Networks in TensorFlow",
    issued: "Oct 2024",
    credential: "6WO2PFFY3O3E"
  },
  {
    issuer: "DeepLearning.AI",
    title: "Custom Models, Layers, and Loss Functions with TensorFlow",
    issued: "Nov 2024",
    credential: "WRPM6F5OZXUQ"
  },
  {
    issuer: "DeepLearning.AI",
    title: "Data Pipelines with TensorFlow Data Services",
    issued: "Nov 2024",
    credential: "R7A0I091AH93"
  },
  {
    issuer: "DeepLearning.AI",
    title: "Browser-based Models with TensorFlow.js",
    issued: "Nov 2024",
    credential: "0W4ONEU7IK2M"
  },
  {
    issuer: "DeepLearning.AI",
    title: "Sequences, Time Series and Prediction",
    issued: "Nov 2024",
    credential: "A80JWX2YACOL"
  },
  {
    issuer: "Stanford University",
    title: "Machine Learning Specialization",
    issued: "Oct 2024",
    credential: "YT2M1O2BVLSW"
  },
  {
    issuer: "DeepLearning.AI",
    title: "DeepLearning.AI TensorFlow Developer Specialization",
    issued: "Nov 2024",
    credential: "4GJXWLYD3RWE"
  },
  {
    issuer: "Google",
    title: "Crash Course on Python",
    issued: "Sep 2024",
    credential: "WB7P2Z2WSDNW"
  },
  {
    issuer: "DeepLearning.AI, Coursera, Stanford CPD, UVM",
    title: "Supervised Machine Learning: Regression and Classification",
    issued: "Oct 2024",
    credential: "KLIO3GMZDI82"
  },
  {
    issuer: "Dicoding Indonesia",
    title: "Belajar Dasar Git dengan GitHub",
    issued: "Sep 2024",
    expires: "Sep 2027",
    credential: "MRZMYL3QKZYQ"
  },
  {
    issuer: "Dicoding Indonesia",
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issued: "Sep 2024",
    expires: "Sep 2027",
    credential: "2VX3467YQZYQ"
  },
  {
    issuer: "Dicoding Indonesia",
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issued: "Sep 2024",
    expires: "Sep 2027",
    credential: "1OP8WKDKVXQK"
  },
  {
    issuer: "Dicoding Indonesia",
    title: "Belajar Analisis Data dengan Python",
    issued: "Oct 2024",
    expires: "Oct 2027",
    credential: "1RXY2OJQKXVM"
  }
];

export const languages: Language[] = [
  {
    name: "English",
    proficiency: "Professional working proficiency",
    details: "Duolingo Score 130 (equiv C1), TOEFL Prediction 586/677",
    date: "Dec 2025"
  },
  {
    name: "Indonesian",
    proficiency: "Native or bilingual proficiency"
  }
];

export const achievements = [
  {
    title: "Delivered a national-level championship",
    detail: "UTC2K25 involved 1,400+ athletes and 5,000+ visitors across two days.",
    icon: Trophy
  },
  {
    title: "Built strong organic campaign traction",
    detail: "Achieved 457,700+ impressions and 6,800+ organic Instagram interactions within one month.",
    icon: Award
  },
  {
    title: "Awarded 2nd Best Team at Bangkit Academy Capstone",
    detail: "Recognized for building COLIVERA, a mobile platform developed among 20+ teams.",
    icon: BadgeCheck
  },
  {
    title: "Recognized organizational governance",
    detail: "Helped UKM Taekwondo UNDIP earn Top 5 UKM recognition and an \"A\" performance rating from the University Senate.",
    icon: CalendarCheck
  }
];

export const contactCards = [
  {
    label: "Location",
    value: profile.location,
    href: "https://maps.google.com/?q=Bekasi,Indonesia",
    icon: MapPin
  },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    icon: Phone
  }
];
