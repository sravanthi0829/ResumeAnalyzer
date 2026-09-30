import React from 'react';
import bentoWorkflowImg from '../assets/images/workflow_automation_bento_1790759119827.jpg';
import recruiterReviewImg from '../assets/images/recruiter_evaluation_review_1790759145145.jpg';
import { Cpu, CheckCircle2, Shield, Eye, BarChart3, Binary } from 'lucide-react';

export const CapabilitiesBento: React.FC = () => {
  return (
    <section id="capabilities" className="py-16 md:py-24 bg-slate-950 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <span>Intelligent Assessment Engine</span>
            <span aria-hidden="true">·</span>
            <span>n8n Orchestration</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-['Plus_Jakarta_Sans']">
            Engineered to pass modern applicant tracking systems.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Over 75% of resumes are discarded by automated screening filters before reaching human eyes. Our automated analysis breaks down every layer of your CV.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: col-span-7 - Automated n8n Workflow with image */}
          <div className="md:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group">
            <div>
              <div className="text-xs font-mono text-indigo-400 mb-2">01. Cloud Workflow Pipeline</div>
              <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                Instant n8n Cloud Execution
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-lg leading-relaxed">
                Directly triggered via our secure form webhook. Workflows execute asynchronously in n8n cloud to extract resume metadata, validate layout integrity, and deliver rich diagnostics without delay.
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 aspect-[16/9] relative">
              <img
                src={bentoWorkflowImg}
                alt="Automated n8n cloud data workflow pipeline"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                <span className="font-mono text-[11px] text-slate-400">Webhook Node · Parser · AI Node · Dispatcher</span>
                <span className="font-mono text-indigo-400 text-[11px]">n8n Cloud Active</span>
              </div>
            </div>
          </div>

          {/* Card 2: col-span-5 - Recruiter Review with image */}
          <div className="md:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group">
            <div>
              <div className="text-xs font-mono text-indigo-400 mb-2">02. Recruiter Perspective</div>
              <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                The 6-Second First Scan
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Recruiters spend an average of six seconds on an initial resume pass. We highlight top-third eye-tracking zones and executive summary impact.
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 aspect-[4/3] relative">
              <img
                src={recruiterReviewImg}
                alt="Hiring manager reviewing candidate profile"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-xs text-slate-300 font-mono text-[11px]">
                Top 15% Hiring Manager Rubric
              </div>
            </div>
          </div>

          {/* Card 3: col-span-6 - ATS Parseability Matrix */}
          <div className="md:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-indigo-400 mb-2">03. ATS Parseability Matrix</div>
              <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                Table & Multi-Column Risk Detection
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Fancy tables, nested columns, and floating text boxes frequently break enterprise ATS parsers (Workday, Greenhouse, Lever, Taleo). We audit document hierarchy to ensure pure single-column read streams.
              </p>
            </div>

            <div className="mt-6 space-y-2 border-t border-slate-800/80 pt-4 text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span>Standard Section Header Recognition</span>
                <span className="text-emerald-400 font-mono">100% Compatible</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Contact & Link Extraction Safety</span>
                <span className="text-emerald-400 font-mono">Verified</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Font & Encoding Compatibility</span>
                <span className="text-emerald-400 font-mono">Unicode / UTF-8</span>
              </div>
            </div>
          </div>

          {/* Card 4: col-span-6 - Quantifiable Impact Formula */}
          <div className="md:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-indigo-400 mb-2">04. Impact & Quantifiability</div>
              <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                Google's X-Y-Z Bullet Point Formula
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                "Accomplished [X], as measured by [Y], by doing [Z]." We detect weak passive phrases and flag opportunities to insert measurable outcomes, revenue metrics, or percentage improvements.
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-3.5 text-xs font-mono">
              <div className="text-rose-400 line-through">"Worked on improving web app load times."</div>
              <div className="text-emerald-400 mt-1.5">
                "Optimized bundle size by 38% and reduced Time-to-Interactive from 3.2s to 1.1s via code splitting."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
