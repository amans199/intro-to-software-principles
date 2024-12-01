import React from 'react';
import { SOLIDPrinciples } from './components/SOLIDPrinciples';
import { BestPractices } from './components/BestPractices';
import { Code } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Code size={32} className="text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Coding Best Practices
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <SOLIDPrinciples />
          <BestPractices />
        </div>
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            Interactive guide to software development best practices
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;