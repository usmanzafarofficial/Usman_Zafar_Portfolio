import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16">
          Experience<span className="text-zinc-600">.</span>
        </h2>

        <div className="space-y-4">
          {EXPERIENCE.map((exp, index) => (
            <div 
              key={index} 
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 p-6 rounded-2xl hover:bg-zinc-900 transition-all duration-300 border border-transparent hover:border-zinc-800"
            >
              {/* Period */}
              <div className="md:col-span-3 text-sm font-medium text-zinc-500 pt-1 group-hover:text-zinc-400">
                {exp.period}
              </div>

              {/* Details */}
              <div className="md:col-span-9">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-zinc-200 group-hover:text-white transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-zinc-500 text-sm">{exp.company}, {exp.location}</span>
                </div>
                <p className="text-zinc-400 text-base leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;