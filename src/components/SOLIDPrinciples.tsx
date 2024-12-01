import React from 'react';
import { PrincipleList } from './PrincipleList';
import { solidPrinciples } from '../data/principles';

export function SOLIDPrinciples() {
  return <PrincipleList title="SOLID Principles" principles={solidPrinciples} />;
}