import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
             Selected Work<span className="text-zinc-600">.</span>
           </h2>
           <a href="#" className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors pb-1 border-b border-transparent hover:border-white">
              View Github <ArrowUpRight size={16} />
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className="group flex flex-col h-full bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden hover:bg-zinc-900 transition-all duration-500"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-bold tracking-widest uppercase text-zinc-500 border border-zinc-800 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <ArrowUpRight className="text-zinc-600 group-hover:text-white transition-colors" size={20} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>
              </div>
              
              {/* Decorative bottom bar */}
              <div className="h-1 w-full bg-zinc-800 group-hover:bg-zinc-700 transition-colors"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors border-b border-zinc-700 pb-1">
              View Github <ArrowUpRight size={16} />
           </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;