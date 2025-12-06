import { ExperienceItem, ProjectItem, EducationItem, SkillCategory } from './types';
import { Linkedin, Mail, Phone, MapPin, Brain, Globe, Database, Server, Code, Layers } from 'lucide-react';
import React from 'react';

export const PERSONAL_INFO = {
  name: "Usman Zafar",
  role: "AI & ML Specialist | Full Stack Developer",
  summary: "I am a Computer Science graduate and a dedicated Full Stack Developer with a strong foundation in both software engineering principles and practical web development. With experience in delivering full-cycle remote projects, I specialize in creating robust, scalable, and user-friendly web applications.",
  location: "Attock, Punjab, Pakistan",
  phone: "+92 320 5665392",
  email: "usmanzafarofficial125@gmail.com",
  linkedin: "www.linkedin.com/in/usman-zafar-018887277",
  github: "github.com/usmanzafarofficial",
  whatsappUrl: "https://wa.me/923205665392"
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages & Core",
    skills: ["Python", "JavaScript", "TypeScript", "PHP", "HTML5", "CSS3", "SQL", "C++"]
  },
  {
    title: "Web Technologies",
    skills: ["React.js", "Node.js", "Express.js", "Next.js", "MongoDB", "WordPress", "Tailwind CSS"]
  },
  {
    title: "AI & Data Science",
    skills: ["TensorFlow", "Machine Learning", "Deep Learning", "Data Analysis", "Computer Vision", "Pandas", "NumPy"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "VS Code", "npm/yarn", "Agile Methodologies"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Arch Technologies",
    role: "Machine Learning Intern",
    period: "Oct 2025 - Present",
    location: "Remote",
    description: "Working on advanced ML models and data processing pipelines."
  },
  {
    company: "Nexus AI Digital",
    role: "Machine Learning Intern",
    period: "Oct 2025 - Present",
    location: "Pakistan",
    description: "Developing AI-driven solutions for digital optimization."
  },
  {
    company: "University of Education, Lahore",
    role: "Research Intern",
    period: "Aug 2025 - Present",
    location: "Attock, Punjab",
    description: "Conducting research on AI and its advancement mainly in Computer Vision."
  },
  {
    company: "DevelopersHub Corporation©",
    role: "Web Developer",
    period: "May 2025 - Aug 2025",
    location: "Pakistan",
    description: "Developed real-life web projects including e-commerce sites using MERN stack. Assisted in API integration and database handling."
  },
  {
    company: "Self-employed",
    role: "Freelance Developer",
    period: "Jan 2024 - Sep 2025",
    location: "Remote",
    description: "Specialized in React.js and WordPress. Delivered smart, efficient, and scalable digital solutions for international clients."
  },
  {
    company: "Fiverr",
    role: "Web Developer",
    period: "Feb 2022 - Oct 2025",
    location: "Remote",
    description: "Freelance web developer specializing in PHP, JavaScript, and C++. Maintained a strong track record of delivering dynamic websites."
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "AI-Powered Urdu Voice-to-Text Tool",
    category: "AI / ML",
    description: "A tool leveraging natural language processing to convert Urdu speech into accurate text."
  },
  {
    title: "Doctor Appointment Booking Platform",
    category: "Full Stack Web",
    description: "A comprehensive platform for scheduling and managing medical appointments."
  },
  {
    title: "Investment Management Application",
    category: "FinTech",
    description: "Secure application for tracking portfolios and managing investments."
  },
  {
    title: "Custom Billboard Management System",
    category: "Enterprise System",
    description: "A tailored solution for managing outdoor advertising inventory."
  },
  {
    title: "Car Rental Booking System",
    category: "Web Application",
    description: "User-friendly booking engine for vehicle rentals with inventory management."
  },
  {
    title: "E-commerce Websites",
    category: "E-commerce",
    description: "Multiple robust online stores built with MERN stack and WordPress."
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "University of Education, Lahore",
    degree: "BS Computer Science",
    period: "Sep 2022 - Sep 2026"
  }
];