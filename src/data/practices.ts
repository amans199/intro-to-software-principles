import { LucideIcon, Repeat, Sparkles, Package } from 'lucide-react';
import { Principle } from './principles';

export const bestPractices: Principle[] = [
  {
    title: "DRY (Don't Repeat Yourself)",
    description: "Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.",
    analogy: "Like keeping a master recipe instead of writing it down every time you cook.",
    icon: Repeat
  },
  {
    title: "KISS (Keep It Simple, Stupid)",
    description: "Systems work best when they are kept simple rather than made complex.",
    analogy: "Using a hammer for a nail rather than building an elaborate machine.",
    icon: Sparkles
  },
  {
    title: "YAGNI (You Aren't Gonna Need It)",
    description: "Don't add functionality until you need it.",
    analogy: "Pack only what you need for a trip, not everything you might use.",
    icon: Package
  }
];