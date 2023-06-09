export interface BearMdData {
  id: string;
  title: string;
  file: string;
  icon: string;
  excerpt: string;
  link?: string;
  pdf?: string;
  embed?: string;
}

export interface BearData {
  id: string;
  title: string;
  icon: string;
  md: BearMdData[];
}
