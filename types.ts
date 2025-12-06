import React from 'react';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  description?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}