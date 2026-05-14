export interface BlogPost {
  id: number;
  title: string;
  category: string;
  image: string;
  date?: string;
  author?: string;
}

export interface InsightsData {
  featured: BlogPost;
  recent: BlogPost[];
}