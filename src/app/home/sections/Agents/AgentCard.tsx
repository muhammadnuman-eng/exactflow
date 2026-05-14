import React from 'react';
import Image from 'next/image';
import { Agent } from '../../types/agent';

interface AgentCardProps {
  agent: Agent;
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden h-auto md:h-70">
      <Image
        src={agent.image}
        alt={agent.name}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover md:object-contain"
        priority
      />
    </div>
  );
};