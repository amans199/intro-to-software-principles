import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PrincipleCardProps {
  title: string;
  description: string;
  analogy: string;
  isExpanded: boolean;
  onToggle: () => void;
  icon: React.ReactNode;
}

export function PrincipleCard({ 
  title, 
  description, 
  analogy, 
  isExpanded, 
  onToggle,
  icon 
}: PrincipleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          <div className="text-indigo-600">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {isExpanded && (
        <div className="p-4 pt-0 bg-gray-50">
          <p className="text-gray-600 mb-3">{description}</p>
          <div className="bg-indigo-50 p-3 rounded-md">
            <p className="text-sm text-indigo-700">
              <span className="font-semibold">Analogy:</span> {analogy}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}