import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-[85vh] flex items-center pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center md:items-start">

          {/* Text Content */}
          <div className="flex-1 order-2 md:order-1 pt-8 md:pt-12 text-center md:text-left">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white mb-6 animate-slide-up">
              Usman<br />
              <span className="text-zinc-500">Zafar.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-zinc-400 max-w-xl leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              I am an <span className="text-zinc-100 font-medium">AI & ML Specialist</span> and <span className="text-zinc-100 font-medium">Full Stack Developer</span> building scalable digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
              >
                Let's Talk
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 bg-zinc-900 text-white border border-zinc-800 font-medium rounded-full hover:bg-zinc-800 transition-colors"
              >
                View Work
              </a>
              <a
                href="/pdfs/resume.pdf"
                download="Usman_Zafar_Resume.pdf"
                className="inline-flex items-center justify-center px-8 py-3 bg-zinc-900 text-white border border-zinc-800 font-medium rounded-full hover:bg-zinc-800 transition-colors gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[500px] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
              {/* 
                  NOTE: Replace the src below with your actual image URL.
                  The current URL is a high-quality placeholder.
                */}
              <img
                src="/images/usman_pic.png"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-widest uppercase text-zinc-500">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section >
  );
};

export default Hero;