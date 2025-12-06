import React from 'react';
import { PERSONAL_INFO, EDUCATION } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-zinc-950 border-t border-zinc-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
              Let's work <br /> <span className="text-zinc-600">together.</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
              >
                WhatsApp Me <ArrowUpRight size={18} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-900 transition-colors"
              >
                Email Me
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-zinc-500 uppercase tracking-widest text-xs font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-zinc-300">
                <a href={PERSONAL_INFO.email} target="_blank" rel="noreferrer">{PERSONAL_INFO.email}</a> <br />
                <a href={PERSONAL_INFO.phone} target="_blank" rel="noreferrer">{PERSONAL_INFO.phone}</a>
                <p>{PERSONAL_INFO.location}</p>
              </div>
            </div>

            <div>
              <h3 className="text-zinc-500 uppercase tracking-widest text-xs font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="text-zinc-300">
                    <p className="font-medium text-white">{edu.institution}</p>
                    <p className="text-sm text-zinc-500">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} Usman Zafar.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href={`https://${PERSONAL_INFO.github}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://twitter.com/usmanzafarofficial" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;