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

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
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
  credential?: string;
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
    ["Athletes Coordinated", "1,400+"],
    ["Event Visitors", "5,000+"],
    ["Organic Impressions", "457K+"],
    ["GPA", "3.73"]
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
      "Python",
      "Python with Pandas",
      "C++",
      "PHP",
      "React",
      "HTML and CSS",
      "API Development",
      "API Integration",
      "IoT Development",
      "3D CAD",
      "Virtual Reality Development",
      "DevOps",
      "IT Asset Management",
      "IT Risk Management",
      "IT Service Management Tools",
      "ERP",
      "GCP",
      "Blockchain Technology",
      "Big Data Technology"
    ]
  },
  {
    title: "AI, ML & Data",
    icon: BrainCircuit,
    items: [
      "AI / Machine Learning Engineering",
      "Applied AI Research",
      "Machine Learning Algorithms",
      "TensorFlow",
      "Computer Vision",
      "Data Engineering",
      "Data Mining",
      "Data Analysis",
      "Quantitative Analysis",
      "Predictive Analytics",
      "Prescriptive Analytics",
      "Data Collection and Evaluation",
      "Data Reporting and Visualization",
      "Data Governance",
      "Data Privacy and Protection",
      "Data Encryption",
      "Organizing Data",
      "Pattern Identification",
      "Excel"
    ]
  },
  {
    title: "Project, Product & Business",
    icon: Server,
    items: [
      "Project Management",
      "Agile Methodology",
      "Action Planning",
      "Product Development",
      "Product Knowledge",
      "Prototyping",
      "Business Understanding",
      "Financial Understanding",
      "Market Analysis",
      "Client Consulting Services",
      "Audit",
      "Anti-Money Laundering",
      "Root Cause Analysis",
      "Decision Making",
      "Prioritization",
      "Planning and Prioritizing Tasks",
      "Follow-up Techniques",
      "Time Management"
    ]
  },
  {
    title: "HR, People & Organization",
    icon: BriefcaseBusiness,
    items: [
      "HR Analytics",
      "HR Digitalization",
      "HR Systems Management",
      "Recruitment and Talent Acquisition",
      "Applicant Tracking Systems",
      "Candidate Sourcing",
      "Resume Screening",
      "Interviewing",
      "Onboarding",
      "Employee Engagement",
      "Employee Engagement Management",
      "Employee Relations",
      "Employee Relations Management",
      "Employee Communication Management",
      "Employee Counseling",
      "Employee Recognition Programs",
      "Compensation and Benefits",
      "Compensation Management",
      "Employment Contracts",
      "Disciplinary Procedures",
      "Competency Framework Development",
      "Career Framework Design",
      "Talent Assessment",
      "Succession Planning",
      "Organizational Culture Development",
      "Organizational Design",
      "Organizational Development"
    ]
  },
  {
    title: "Creative, UX & Digital",
    icon: Database,
    items: [
      "Figma",
      "Wireframing",
      "UX Optimization",
      "Human-Computer Interaction",
      "Information Design",
      "Adobe Creative Suite",
      "Content Marketing",
      "Social Media",
      "Influencer Marketing",
      "Viral Marketing",
      "Employer Branding",
      "Presentation",
      "Office Suites",
      "E-Learning Platforms",
      "Account Management"
    ]
  },
  {
    title: "Leadership & Communication",
    icon: Users,
    items: [
      "Leadership",
      "Leadership Development",
      "Team Collaboration",
      "Teamwork",
      "Collaboration",
      "Communication",
      "Assertive Communication",
      "Effective Communication and Socialization",
      "Oral Communication",
      "Public Speaking",
      "Discussion",
      "Negotiation",
      "Persuasion",
      "Building Relationships",
      "Coaching and Mentoring",
      "Training and Development",
      "Training Needs Analysis",
      "Learning and Development",
      "Learning and Development Strategy",
      "Learning Needs Analysis",
      "Motivating Others",
      "Conflict Resolution"
    ]
  },
  {
    title: "Professional Traits",
    icon: BadgeCheck,
    items: [
      "Active Learning",
      "Active Listening",
      "Listening Skills",
      "Adaptability",
      "Analytical Thinking",
      "Attention to Detail",
      "Business Acumen",
      "Creative Problem Solving",
      "Creative Thinking",
      "Critical Thinking",
      "Curiosity",
      "Emotional Intelligence",
      "Emotional Regulation",
      "Empathy",
      "Ethical Judgment and Integrity",
      "Flexibility",
      "Initiative",
      "Innovation",
      "Intuition",
      "Multitasking",
      "Open-mindedness",
      "Organizational Skills",
      "Perspicacity",
      "Positive Attitude",
      "Problem Solving",
      "Reliability",
      "Self-awareness",
      "Social Sensitivity",
      "Strategic Thinking",
      "Tenacity",
      "Tolerance",
      "Typing Fast",
      "Working Under Pressure",
      "English"
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
    credential: "6MBW7IC97Z9V"
  },
  {
    issuer: "IBM",
    title: "Introduction to Project Management",
    issued: "Jan 2026",
    credential: "TBAWD7UM7DHY"
  },
  {
    issuer: "Google",
    title: "Agile Project Management",
    issued: "Jan 2026",
    credential: "674AGMOD66TY"
  },
  {
    issuer: "Stanford University",
    title: "Machine Learning Specialization",
    issued: "Oct 2024",
    credential: "YT2M1O2BVLSW"
  },
  {
    issuer: "DeepLearning.AI",
    title: "TensorFlow Developer Specialization",
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
    issuer: "Dicoding Indonesia",
    title: "Belajar Analisis Data dengan Python",
    issued: "Oct 2024",
    credential: "1RXY2OJQKXVM"
  },
  {
    issuer: "DeepLearning.AI",
    title: "Natural Language Processing in TensorFlow",
    issued: "Oct 2024",
    credential: "YDIS6TJ2M54X"
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
    detail: "Achieved 457,700+ impressions and 6,800+ Instagram interactions within one month.",
    icon: Award
  },
  {
    title: "Selected from 1,000+ applicants",
    detail: "Joined Female Daily Semarang x Beauty 2024 activity division with fewer than 100 accepted members.",
    icon: BadgeCheck
  },
  {
    title: "Recognized organizational governance",
    detail: "Helped UKM Taekwondo UNDIP earn Top 5 UKM recognition and an A performance rating.",
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
