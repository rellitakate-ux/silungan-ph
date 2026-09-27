export type PostCategory =
  | 'Gender Roles'
  | 'Family'
  | 'School'
  | 'Workplace'
  | 'Relationships'
  | 'Media'
  | 'LGBTQ+'
  | 'Personal Experiences'
  | 'Questions'
  | 'Other';

export interface Reply {
  id: string;
  postId?: string;
  author: string;
  isAnonymous: boolean;
  content: string;
  createdAt: string;
}

export interface ForumPost {
  id: string;
  title: string;
  author: string;
  isAnonymous: boolean;
  category: PostCategory;
  content: string;
  createdAt: string;
  listeningCount: number;
  replies: Reply[];
  reportCount: number;
}

export type ArticleCategory =
  | 'Personal Stories'
  | 'History'
  | 'Culture'
  | 'Identity'
  | 'Gender'
  | 'Relationships'
  | 'Society'
  | 'Reflection'
  | 'Family'
  | 'Workplace';

export interface EditorialArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  author: string;
  authorRole?: string;
  date: string;
  readTime: string;
  category: ArticleCategory;
  coverImage: string;
  status: 'published' | 'draft';
  quoteHighlight?: string;
}

export interface TimelineEra {
  id: string;
  era: string;
  period: string;
  theme: string;
  summary: string;
  familyRole: string;
  leadership: string;
  laborEducation: string;
  babaylanOrKeyFigures: string;
  citation: string;
}

export interface ContemporarySphere {
  id: string;
  title: string;
  kicker: string;
  expectations: string;
  realities: string;
  challenges: string[];
  progressNotes: string[];
  stats: { label: string; value: string; source: string }[];
}

export interface GenderIssue {
  id: string;
  title: string;
  subtitle: string;
  whatIsIt: string;
  whyItMatters: string;
  philippineContext: string;
  legalFrameworks: string[];
  verifiedFact: string;
  source: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focusArea: string;
  reflection: string;
}

export interface SupportResource {
  id: string;
  organization: string;
  purpose: string;
  hotline: string;
  secondaryContact?: string;
  availability: string;
  officialSource: string;
  link?: string;
  tags: string[];
}

export interface ReferenceEntry {
  category:
    | 'Books'
    | 'Journal Articles'
    | 'Government Sources'
    | 'Research Reports'
    | 'Credible Websites'
    | 'Multimedia';
  citation: string;
  annotation: string;
  link?: string;
}
