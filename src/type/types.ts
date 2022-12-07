export type EudcationType = {
  institution: string;
  studySubject: string;
  period: string;
};

export type ProfileType = {
  imgUrl: string;
  imgAlt: string;
  subTitle: string;
  introductionParagraphs: string[];
  contacts: ContactType[];
};
export type ContactType = {
  name: string;
  logoUrl: string;
  logoAlt: string;
  content: string;
  link?: string;
};

export type ProjectType = {
  title: string;
  description: string;
  contribute: string[];
  imgUrl: string;
  imgAlt: string;
  link: string;
};

export type SkillType = {
  logo: string;
  name: string;
};
