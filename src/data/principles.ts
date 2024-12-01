import { LucideIcon, Scissors, Lock, Bird, Usb, Power } from 'lucide-react';

export interface Principle {
  title: string;
  description: string;
  analogy: string;
  icon: LucideIcon;
}

export const solidPrinciples: Principle[] = [
  {
    title: "Single Responsibility Principle",
    description: "A class should have one, and only one, reason to change.",
    analogy: "Like a chef's knife—designed for one specific task and doing it well.",
    icon: Scissors
  },
  {
    title: "Open/Closed Principle",
    description: "Software entities should be open for extension but closed for modification.",
    analogy: "Like a suitcase that can hold extra items without altering its core design.",
    icon: Lock
  },
  {
    title: "Liskov Substitution Principle",
    description: "Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.",
    analogy: "If it looks like a duck and quacks like a duck, it should behave like a duck.",
    icon: Bird
  },
  {
    title: "Interface Segregation Principle",
    description: "Clients should not be forced to depend on interfaces they do not use.",
    analogy: "Like a buffet where you pick only what you want to eat.",
    icon: Usb
  },
  {
    title: "Dependency Inversion Principle",
    description: "High-level modules should not depend on low-level modules. Both should depend on abstractions.",
    analogy: "Like a universal power adapter that works with any plug type.",
    icon: Power
  }
];