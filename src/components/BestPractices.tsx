import React from 'react';
import { PrincipleList } from './PrincipleList';
import { bestPractices } from '../data/practices';

export function BestPractices() {
  return <PrincipleList title="Other Best Practices" principles={bestPractices} />;
}