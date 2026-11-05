// Central data source for the portfolio.
// Edit values here to update the site — content is intentionally decoupled from UI.

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";
import gallery7 from "@/assets/gallery7.jpg";
import gallery8 from "@/assets/gallery8.jpg";
import gallery9 from "@/assets/gallery9.jpg";
import gallery10 from "@/assets/gallery10.jpg";
import gallery11 from "@/assets/gallery11.jpg";
import gallery12 from "@/assets/gallery12.jpg";
import gallery13 from "@/assets/gallery13.jpg";
import gallery14 from "@/assets/gallery14.jpg";

import coop from "@/assets/coop.jpg";
import Gemini from "@/assets/Gemini.jpg";
import GenAI from "@/assets/GenAI.jpg";
import HackthonAseer from "@/assets/HackthonAseer.jpg";
import KAUSTAcademyAI from "@/assets/KAUSTAcademyAI.jpg";
import HCIHackathon from "@/assets/HCIHackathon.jpg";
import WorkshopInstructor from "@/assets/WorkshopInstructor.jpg";
import TrainingTeamintheAIClub from "@/assets/TrainingTeamintheAIClub.jpg";
import InnovationHackathon from "@/assets/InnovationHackathon.jpg";
import CertificateofAppreciation from "@/assets/CertificateofAppreciation.jpg";
import CommunityGallery1 from "@/assets/CommunityGallery1.jpg";
import CommunityGallery2 from "@/assets/CommunityGallery2.jpg";
import CommunityGallery3 from "@/assets/CommunityGallery3.jpg";
import CommunityGallery4 from "@/assets/CommunityGallery4.jpg";
import CommunityGallery5 from "@/assets/CommunityGallery5.jpg";
import CommunityGallery6 from "@/assets/CommunityGallery6.jpg";
import CommunityGallery7 from "@/assets/CommunityGallery7.jpg";
import CommunityGallery8 from "@/assets/CommunityGallery8.jpg";








export const profile = {
  name: "Mayasah Alraqea",
  initials: "MA",
  location: "Abha, Saudi Arabia",
  email: "mayasahcv@gmail.com",
  github: "https://github.com/mayasahalshahrani",
  linkedin: "https://www.linkedin.com/in/mayasah-raqae",
  cvUrl: "https://drive.google.com/file/d/16IzOSXmW7NbD6PYecPjibN-xAf6OHJBU/view?usp=sharing",
  titles: [
    "Computer Science Graduate",
    "AI Enthusiast",
    "UI Developer",
    "Software Developer",
    "Public Speaker",
    "Technical Leader",
    "Trainer Leader",
    " Problem Solver",
  ],
  tagline:
    "build intelligent and elegant digital experiences — blending computer science, AI, and human-centered design.",
};

export const about = {
  intro:
    "Computer Science graduate passionate about designing modern digital experiences and building intelligent solutions powered by AI. I enjoy transforming ideas into user-focused products while continuously learning, leading, and creating technology that makes a meaningful impact.",

  pillars: [
    {
      icon: "Target",
      title: "Mission",
      body: "Build intelligent digital solutions that solve real-world problems and create meaningful user experiences.",
    },
    {
      icon: "Eye",
      title: "Vision",
      body: "Contribute to the future of AI by developing innovative technologies that empower people and businesses.",
    },
    {
      icon: "Heart",
      title: "Values",
      body: "Creativity, continuous learning, collaboration, leadership, and excellence in everything I build.",
    },
    {
      icon: "Compass",
      title: "Goals",
      body: "Grow as an AI and software professional while contributing to impactful products and world-class technology teams.",
    },
  ],
};


export const stats = [
 { label: "Projects Built", value: 4 },
{ label: "Workshops Delivered", value: 6 },
{ label: "certificates Earned", value: 11 },
{ label: "Leadership Roles", value: 3 },
{ label: "Hackathons Participated", value: 2 },
{ label: "Technical Events", value: 8 },
];

export const skillGroups = [
  {
    title: "Programming",
    icon: "Code2",
    items: ["Python", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Tools",
    icon: "Boxes",
    items: ["React","Next.js", "VS Code", "Git", "GitHub","Canva","Figma"],
  },
  {
    title: "AI & Data",
    icon: "Sparkles",
    items: ["Machine Learning", "Deep Learning", "Data Analysis"],
  },
  
  {
    title: "Leadership",
    icon: "Users",
    items: ["Public Speaking", "Teamwork", "Mentoring", "Technical Training"],
  },
  {
    title: "Mindset",
    icon: "Lightbulb",
    items: ["Problem Solving", "Innovation", "Creativity", "Ownership"],
  },
];

export const projects = [
  {
    title: "AWAN System – AI-Powered Emergency Triage Support",
    description: "Developed an AI-powered clinical decision support system designed to assist emergency departments in the rapid preliminary assessment of Angina Pectoris and Stroke. The system leverages machine learning to analyze patient symptoms and initial clinical data, providing fast risk classification before laboratory or imaging results are available. The project focused on achieving high predictive accuracy, low response time, and usability for healthcare professionals.",
    image: project1,
    tags: ["Python", "PyTorch", "FastAPI", "React","Scikit-learn","Data Analysis","Healthcare"],
    github: "#",
    demo: "/AWANSystemDemo.mp4",
  },
  {
    title: "KKU Hub – Smart Student Engagement Platform",
    description: "Designed and developed the user interface for a centralized digital platform that connects university clubs, events, training camps, and volunteer opportunities in one place. The platform aims to simplify student engagement, streamline club registration, and improve access to extracurricular activities through an intuitive and user-friendly experience.",
    image: project2,
    tags: ["UI Design", "HTML", "CSS","JavaScript","Responsive Design"],
    github: "#",
    demo: "/KKUHubdemo.mp4",
  },
  {
    title: "E-Commerce Website",
    description: "Built a responsive e-commerce website featuring product browsing, search functionality, shopping cart management, favorites, authentication, and product detail pages. The project demonstrates frontend development fundamentals through an intuitive shopping experience and interactive user interface.",
    image: project3,
    tags: ["HTML", "CSS", "JavaScript","Frontend Development","Responsive Design"],
    github: "#",
    demo: "/E-CommerceWebsiteDemo.mp4",
  },
  {
    title: "Weather-Based Chills Prediction Using Machine Learning",
    description: "Developed a machine learning model to predict the likelihood of experiencing chills based on weather conditions and demographic information. The project compared multiple classification algorithms using accuracy metrics and confusion matrices to identify the most effective predictive model.",
    image: project4,
    tags: ["Python", "Machine Learning", "Scikit-learn","Data Analysis","Classification"],
    github: "#",
    demo: "#",
  },
];

export const Milestones = [
  {year: "2026",title: "Computer Science Graduate",body: "Graduated with a Bachelor's degree in Computer Science from King Khalid University, building a strong foundation in software development, artificial intelligence, and modern technologies." },
  { year: "2026", title: "Graduation Project — AWAN System",body: "Developed an AI-powered emergency triage support system using machine learning to assist in the preliminary diagnosis of stroke and angina pectoris." },
{year: "2026", title: "KAUST AI Program", body: "Successfully completed the KAUST Artificial Intelligence program, strengthening my practical knowledge of AI concepts and applications."},
{year: "2025",title: "Workshop Instructor",body: "Delivered multiple technical workshops on Artificial Intelligence and Generative AI through university clubs, Google Developer Groups, Tamkeen, and community initiatives."},
  { year: "2025", title: "Leadership Experience",body: "Served in leadership roles within university clubs and student initiatives, organizing"},
];

export const achievements = [
  {title: "Second Place — Innovation Camp",category: "Award", year: 2025,},
  {title: "KAUST Artificial Intelligence Program —  2 Stage ",category: "Education",year: 2026,},
  {title: "Delivered 6+ AI & Technology Workshops",category: "Community",year: 2025,},
  { title: "AI Club — Training Committee Member", category: "Leadership", year: 2025, },
  { title: "University Hackathon Supervisor", category: "Leadership", year: 2025,},
  { title: "HCI Hackathon Participant", category: "Hackathon", year: 2025,},
  { title: "Asir Hackathon Participant",category: "Hackathon",year: 2025,},
  {title: "Presented AI Workshop for School Students",category: "Community",year: 2025,},
  { title: "Represented KKU at the Computer Science Projects Exhibition", category: "Representation", year: 2025,},
  {title: "Completed Internship at Saudi Electricity Company",category: "Internship",year: 2025,},
];

export const experience = [
  {
    role: "Technical Workshop Instructor",
    org: "King Khalid University & Community Initiatives",
    period: "2025 — 2026",
    body: "Delivered hands-on workshops on Artificial Intelligence and Generative AI across university clubs, community programs, and student initiatives, focusing on simplifying complex technical concepts for learners.",
  },
  {
    role: "Peer Tutor (Volunteer)",
    org: "Independent Initiative",
    period: "2023 — 2026",
    body: "Provided voluntary peer-to-peer academic support for Computer Science students by explaining core subjects and simplifying complex concepts through informal learning sessions.",
  },
  {
    role: "Training Committee Member",
    org: "AI Club — King Khalid University",
    period: "2025",
    body: "Contributed to planning and delivering technical training sessions and supporting educational activities within the AI Club.",
  },
  {
    role: "Hackathon Supervisor",
    org: "King Khalid University",
    period: "2025",
    body: "Supported and guided student teams during university hackathon events by assisting with coordination and providing technical and organizational support.",
  },
  {
    role: "Intern",
    org: "Saudi Electricity Company",
    period: "2025",
    body: "Completed a professional internship gaining experience in workplace collaboration, technical operations, and communication within a corporate environment.",
  },
];

export const gallery = [
  {
    src: gallery1,
    alt: "Graduation day with my classmates",
    orientation: "landscape",
  },
  {
    src: gallery2,
    alt: "Presenting the AWAN project at an innovation exhibition",
    orientation: "landscape",
  },
  {
    src: gallery3,
    alt: "Artificial Intelligence workshop at a local school",
    orientation: "landscape",
  },
  {
    src: gallery4,
    alt: "King Khalid University College of Computer Science",
    orientation: "landscape",
  },
  {
    src: gallery5,
    alt: "Preparing for the AWAN final project presentation",
    orientation: "landscape",
  },
  {
    src: gallery6,
    alt: "KAUST Artificial Intelligence Program",
    orientation: "portrait",
  },
  {
    src: gallery7,
    alt: "Another moment from the KAUST AI Program",
    orientation: "portrait",
  },
  {
    src: gallery8,
    alt: "Preparing the AWAN project with the team",
    orientation: "portrait",
  },
  {
    src: gallery9,
    alt: "Internship presentation",
    orientation: "portrait",
  },
  {
    src: gallery10,
    alt: "Delivering a technical workshop",
    orientation: "portrait",
  },
  {
    src: gallery11,
    alt: "Mentoring and supporting a hackathon team",
    orientation: "portrait",
  },
  {
    src: gallery12,
    alt: "AI Club booth at the Saudi Founding Day celebration",
    orientation: "portrait",
  },
  {
    src: gallery13,
    alt: "Representing King Khalid University at a technology exhibition",
    orientation: "portrait",
  },
  {
    src: gallery14,
    alt: "Presenting an innovation project",
    orientation: "portrait",
  },
  
];

export const teachingImpact = {

  eyebrow: "Community",

  title: "Beyond the Classroom",

  subtitle:

   "Beyond my university coursework, I voluntarily supported Computer Science students by explaining core subjects, simplifying complex topics, and creating accessible learning resources. Through online sessions, study materials, and continuous guidance, I helped students strengthen their understanding, prepare for exams, and gain confidence throughout their academic journey.",
  gallery: [

    CommunityGallery1,
    CommunityGallery2,
    CommunityGallery3,
    CommunityGallery4,
    CommunityGallery5,
    CommunityGallery6,
    CommunityGallery7,
    CommunityGallery8,

  ],

};
export const credentials = [
  {
    title: "KAUST Artificial Intelligence Program — Stage 1",
    issuer: "KAUST",
    category: "Artificial Intelligence",
    year: "2026",
    image: KAUSTAcademyAI,
  },
  {
    title: "Generative AI Workshop Instructor",
    issuer: "AI Club — King Khalid University",
    category: "Teaching",
    year: "2025",
    image: GenAI,
  },
  {
    title: "Google Gemini Workshop Instructor",
    issuer: "Google Developer Groups on Campus — King Khalid University",
    category: "Teaching",
    year: "2025",
    image: Gemini,
  },
  {
    title: "HCI Hackathon Participant",
    issuer: "HCI Hackathon",
    category: "Hackathon",
    year: "2025",
    image: HCIHackathon,
  },
  {
    title: "Asir Hackathon Participant",
    issuer: "Asir Hackathon",
    category: "Hackathon",
    year: "2025",
    image: HackthonAseer,
  },
  {
    title: "Training Committee Member",
    issuer: "AI Club — King Khalid University",
    category: "Leadership",
    year: "2025",
    image: TrainingTeamintheAIClub,
  },
  {
    title: "University Hackathon Supervisor",
    issuer: "King Khalid University",
    category: "Leadership",
    year: "2025",
    image: InnovationHackathon,
  },
  {
    title: "Technology & Artificial Intelligence Workshop Instructor",
    issuer: "School Outreach Program",
    category: "Community",
    year: "2025",
    image: WorkshopInstructor,
  },
  {
    title: "Computer Science Projects Exhibition",
    issuer: "King Khalid University",
    category: "Exhibition",
    year: "2025",
    image: CertificateofAppreciation,
  },
  {
    title: "Internship Completion Certificate",
    issuer: "Saudi Electricity Company",
    category: "Internship",
    year: "2025",
    image: coop,
  },
];