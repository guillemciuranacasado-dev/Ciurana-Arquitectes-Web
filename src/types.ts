export type Language = 'ca' | 'es';

export type ProjectCategory = 'architecture' | 'rehabilitation' | 'restoration';

export interface ProjectSpec {
  label: Record<Language, string>;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: ProjectCategory;
  image: string;
  year: string;
  description: Record<Language, string>;
  story: Record<Language, string>;
  specs: ProjectSpec[];
  keyFeatures: Record<Language, string[]>;
}

export interface TranslationSet {
  navProjects: string;
  navStory: string;
  navPhilosophy: string;
  navContact: string;
  heroSubtitle: string;
  heroTagline: string;
  viewCaseStudy: string;
  categoryAll: string;
  categoryArch: string;
  categoryRehab: string;
  categoryRest: string;
  philosophyTitle: string;
  philosophySubtitle: string;
  philosophyText1: string;
  philosophyText2: string;
  yearsExperience: string;
  projectsCompleted: string;
  restoredHeritage: string;
  contactTitle: string;
  contactSubtitle: string;
  contactPhone: string;
  contactEmail: string;
  contactFormName: string;
  contactFormEmail: string;
  contactFormType: string;
  contactFormTypeArch: string;
  contactFormTypeRehab: string;
  contactFormTypeRest: string;
  contactFormTypeOther: string;
  contactFormMsg: string;
  contactFormSend: string;
  contactFormSending: string;
  contactFormSuccess: string;
  closeBtn: string;
  locationLabel: string;
  yearLabel: string;
  categoryLabel: string;
  scrollDown: string;
}
