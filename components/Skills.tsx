import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
             Expertise<span className="text-zinc-600">.</span>
           </h2>
           <p className="text-zinc-400 max-w-md text-sm md:text-base">
             A blend of data science precision and full-stack creative engineering.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category, idx) => (
            <div 
              key={idx}
              className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-6 group-hover:text-zinc-300 transition-colors">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-zinc-950 text-zinc-400 text-xs font-medium rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;