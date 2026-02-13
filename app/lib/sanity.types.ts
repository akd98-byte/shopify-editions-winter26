export interface Edition {
  _id: string;
  title: string;
  slug: { current: string };
  themeColor?: string;
  heroVideo?: { asset: { url: string } };
  heroTitle?: string[];
  chapters?: Chapter[];
  publishedAt: string;
}

export interface Chapter {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  order: number;
  accentColor?: string;
  features?: Feature[];
}

export interface Feature {
  _id: string;
  title: string;
  slug: { current: string };
  badge?: 'new' | 'update' | 'beta';
  description?: string;
  thumbnail?: {
    asset: {
      url: string;
      metadata?: {
        dimensions: { width: number; height: number };
      };
    };
  };
  media?: { asset: { url: string } };
  gridSize?: 'small' | 'wide' | 'large';
  links?: Array<{ label: string; url: string }>;
  order: number;
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  badge?: string;
  url: string;
}
