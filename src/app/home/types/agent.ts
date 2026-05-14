export interface AgentStat {
  label: string;
  value: string;
  change?: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
 
  image: string;
  badgeColor?: string;
  cardBg?: string;
  stat?: AgentStat;
}
