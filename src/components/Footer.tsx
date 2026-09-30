import React from 'react';
import { Cpu, ExternalLink } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection }) => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm shadow-indigo-500/20">
                <Cpu className="h-4 w-4" />
              </div>
              <span className="text-base font-bold text-white font-['Plus_Jakarta_Sans']">
                ResumeAI
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-400 max-w-md">
              AI-driven resume intelligence and ATS evaluation platform connected to automated n8n cloud workflows.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-300">
            <button
              onClick={() => onScrollToSection('upload-studio')}
              className="cursor-pointer hover:text-white transition-colors"
            >
              Upload Studio
            </button>
            <button
              onClick={() => onScrollToSection('n8n-embed')}
              className="cursor-pointer hover:text-white transition-colors"
            >
              Live n8n Form
            </button>
            <button
              onClick={() => onScrollToSection('capabilities')}
              className="cursor-pointer hover:text-white transition-colors"
            >
              Capabilities
            </button>
            <button
              onClick={() => onScrollToSection('benchmarks')}
              className="cursor-pointer hover:text-white transition-colors"
            >
              Benchmarks
            </button>
            <button
              onClick={() => onScrollToSection('faq')}
              className="cursor-pointer hover:text-white transition-colors"
            >
              FAQ
            </button>
          </nav>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} ResumeAI. Form integration with{' '}
            <a
              href="https://sravsss29.app.n8n.cloud/form/ae413c38-756f-4cad-9a1b-f35b808d281c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 underline inline-flex items-center gap-1"
            >
              <span>sravsss29.app.n8n.cloud</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Ephemerally processed</span>
            <span aria-hidden="true">·</span>
            <span>Zero persistent resume retention</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
