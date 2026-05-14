export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  iconType: 'eye' | 'shield' | 'users' | 'key'; // Har card ke specific icon ke liye
}