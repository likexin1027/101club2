
export interface AchievementData {
  label: string;
  value: string;
  subtext: string;
}

export interface VideoWork {
  id: string;
  title: string;
  author: string;
  views: string;
  likes: string;
  thumbnail: string;
  platform: 'Bilibili' | 'Douyin' | 'Video';
}

export interface IncentiveTier {
  views: string;
  bonus: string;
  description: string;
}

export interface Post {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}

export interface Member {
  name: string;
  avatar: string;
  hasBadge: boolean;
}
