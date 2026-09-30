import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import heroImg from '../assets/images/resume_analysis_hero_1790759105730.jpg';

interface HeroProps {
  onStartAnalysis: () => void;
  onOpenLiveForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartAnalysis, onOpenLiveForm }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[460px] w-[680px] rounded-full bg-indigo-600/15 blur-[128px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Proposition */}
          <div className="lg:col-span-7">
            {/* Unboxed clean metadata (zero-pill discipline) */}
            <div className="mb-4 flex items-center gap-2 text-xs font-medium tracking-wide text-indigo-400">
              <span>n8n Cloud Automation</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Enterprise ATS Engine</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Instant Diagnostic Delivery</span>
            </div>

            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-['Plus_Jakarta_Sans'] leading-[1.12]">
              Transform your resume into recruiter-ready precision.
            </h1>

            <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg leading-relaxed">
              Powered by an automated n8n cloud pipeline. Benchmark your CV against modern Applicant Tracking Systems, detect high-impact keywords, and receive a comprehensive diagnostic evaluation in seconds.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onStartAnalysis}
                className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-500 active:scale-98 whitespace-nowrap"
              >
                <span>Upload & Audit Resume</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={onOpenLiveForm}
                className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-5 py-3.5 text-sm font-medium text-slate-200 transition-all hover:bg-slate-800 hover:text-white active:scale-98 whitespace-nowrap"
              >
                <span>Live n8n Form View</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-6">
              <div>
                <div className="text-2xl font-bold text-white tabular-nums">98.4%</div>
                <div className="text-xs text-slate-400 mt-0.5">ATS Filter Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white tabular-nums">&lt; 15s</div>
                <div className="text-xs text-slate-400 mt-0.5">Pipeline Processing</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white tabular-nums">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Private & Ephemeral</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Hero Asset */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
                <img
                  src={heroImg}
                  alt="Modern executive resume intelligence workspace"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover aspect-[16/10] transition-transform duration-500 hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Overlaid preview badge */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-slate-700/60 bg-slate-900/90 p-3.5 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Active n8n Workflow Target</div>
                        <div className="text-[11px] text-slate-400 truncate max-w-[200px]">sravsss29.app.n8n.cloud/form/...</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
