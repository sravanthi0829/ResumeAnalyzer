import React from 'react';
import { ArrowUpRight, Cpu } from 'lucide-react';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollToSection }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text wordmark */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm shadow-indigo-500/20">
            <Cpu className="h-4 w-4" />
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-90 font-['Plus_Jakarta_Sans']"
          >
            ResumeAI
          </a>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button
            onClick={() => onScrollToSection('upload-studio')}
            className="cursor-pointer text-slate-300 transition-colors hover:text-white hover:underline underline-offset-4 whitespace-nowrap"
          >
            Upload Studio
          </button>
          <button
            onClick={() => onScrollToSection('n8n-embed')}
            className="cursor-pointer text-slate-300 transition-colors hover:text-white hover:underline underline-offset-4 whitespace-nowrap"
          >
            Live n8n Form
          </button>
          <button
            onClick={() => onScrollToSection('capabilities')}
            className="cursor-pointer text-slate-300 transition-colors hover:text-white hover:underline underline-offset-4 whitespace-nowrap"
          >
            Capabilities
          </button>
          <button
            onClick={() => onScrollToSection('benchmarks')}
            className="cursor-pointer text-slate-300 transition-colors hover:text-white hover:underline underline-offset-4 whitespace-nowrap"
          >
            ATS Benchmarks
          </button>
          <button
            onClick={() => onScrollToSection('faq')}
            className="cursor-pointer text-slate-300 transition-colors hover:text-white hover:underline underline-offset-4 whitespace-nowrap"
          >
            FAQ
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://sravsss29.app.n8n.cloud/form/ae413c38-756f-4cad-9a1b-f35b808d281c"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors px-2 py-1.5"
          >
            <span>Direct n8n URL</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={() => onScrollToSection('upload-studio')}
            className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-indigo-600/30 transition-all hover:bg-indigo-500 active:scale-95 whitespace-nowrap"
          >
            Analyze Resume Now
          </button>
        </div>
      </div>
    </header>
  );
};
