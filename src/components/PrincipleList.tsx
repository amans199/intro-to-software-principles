import React from 'react';
import { PrincipleCard } from './PrincipleCard';
import { Principle } from '../data/principles';

interface PrincipleListProps {
  title: string;
  principles: Principle[];
}

export function PrincipleList({ title, principles }: PrincipleListProps) {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
      {principles.map((principle, index) => {
        const Icon = principle.icon;
        return (
          <PrincipleCard
            key={index}
            title={principle.title}
            description={principle.description}
            analogy={principle.analogy}
            isExpanded={expandedIndex === index}
            onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
            icon={<Icon size={24} />}
          />
        );
      })}
    </div>
  );
}