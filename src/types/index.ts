export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  problemSolved: string;
  keyFeatures: string[];
  techStack: string[];
  status: 'Completed' | 'In Progress' | 'Active Concept';
  statusNote?: string;
  githubUrl: string;
  liveDemoUrl?: string;
  previewGradient: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    isPlaceholder?: boolean;
    tag?: string;
    icon?: string;
  }[];
}

export interface HighlightCard {
  label: string;
  value: string;
  subtext: string;
  icon: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  scoreLabel: string;
  scoreValue: string;
  period: string;
  location: string;
  status: string;
  courses: string[];
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  verificationId?: string;
  certificateUrl: string;
  skillsLearned: string[];
  status: 'Verified' | 'Completed';
}

export interface CodeChefProfileData {
  username: string;
  profileUrl: string;
  platform: string;
  verifiedCertifications: string[];
  focusAreas: string[];
  bio: string;
  targetRating: string;
}

export interface CareerMilestone {
  phase: string;
  title: string;
  status: 'Current Focus' | 'Next Milestone' | 'Future Target' | 'Long-term Goal';
  description: string;
  deliverables: string[];
}

export interface TargetCompany {
  name: string;
  domain: string;
  badgeColor: string;
  role: string;
}

export interface PersonalDetails {
  name: string;
  title: string;
  tagline: string;
  location: string;
  college: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  codechef: string;
  codechefId: string;
  availabilityBadge: string;
  shortIntro: string;
  aboutStory: string;
  hobbies: string[];
  resumeDownloadUrl: string;
  profilePhoto?: string;
}
