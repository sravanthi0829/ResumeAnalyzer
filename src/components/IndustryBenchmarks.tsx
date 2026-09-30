import React, { useState } from 'react';
import { Target, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

interface RoleBenchmark {
  role: string;
  category: string;
  mustHaveKeywords: string[];
  niceToHaveKeywords: string[];
  atsScoringWeights: { label: string; pct: number }[];
  redFlags: string[];
  bestPractice: string;
}

const BENCHMARKS: RoleBenchmark[] = [
  {
    role: 'Full Stack Engineer',
    category: 'Engineering',
    mustHaveKeywords: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'RESTful APIs', 'Git', 'System Design'],
    niceToHaveKeywords: ['Docker', 'AWS/GCP', 'GraphQL', 'Next.js', 'Redis', 'CI/CD Pipelines'],
    atsScoringWeights: [
      { label: 'Technical Stack Fit', pct: 40 },
      { label: 'Quantifiable Engineering Impact', pct: 30 },
      { label: 'Architecture & System Scalability', pct: 20 },
      { label: 'Collaboration & Mentorship', pct: 10 }
    ],
    redFlags: ['Generic skills lists without project context', 'Missing database technologies', 'Zero mention of testing/QA'],
    bestPractice: 'Highlight specific scale metrics (e.g. QPS, throughput, daily active users, response time reduction).'
  },
  {
    role: 'Staff Product Manager',
    category: 'Product',
    mustHaveKeywords: ['Product Strategy', 'Roadmapping', 'User Research', 'A/B Testing', 'Cross-Functional Leadership', 'SQL'],
    niceToHaveKeywords: ['OKRs', 'Mixpanel/Amplitude', 'Go-To-Market', 'Enterprise SaaS', 'Churn Reduction'],
    atsScoringWeights: [
      { label: 'Business & Revenue Impact', pct: 40 },
      { label: 'Strategic Vision & Roadmaps', pct: 25 },
      { label: 'Data & Analytical Rigor', pct: 20 },
      { label: 'Stakeholder Alignment', pct: 15 }
    ],
    redFlags: ['Listing feature deliverables instead of business outcomes', 'No quantitative metrics ($ ARR, % retention)'],
    bestPractice: 'Always tie product shipped to business KPI metrics: conversion rate, GMV, customer acquisition cost.'
  },
  {
    role: 'DevOps & Cloud Architect',
    category: 'Infrastructure',
    mustHaveKeywords: ['Kubernetes', 'Docker', 'Terraform', 'AWS/GCP/Azure', 'CI/CD', 'Linux', 'Monitoring/Prometheus'],
    niceToHaveKeywords: ['ArgoCD', 'Istio Service Mesh', 'Helm', 'SOC2 Compliance', 'Cost Optimization', 'Python/Go'],
    atsScoringWeights: [
      { label: 'Infrastructure & IaC Depth', pct: 40 },
      { label: 'Reliability & Uptime SLA Metrics', pct: 30 },
      { label: 'Security & Zero-Trust Architecture', pct: 20 },
      { label: 'Cloud Cost Governance', pct: 10 }
    ],
    redFlags: ['Focusing only on manual server administration without IaC', 'Omitting cloud security frameworks'],
    bestPractice: 'Include exact uptime numbers (e.g. 99.99%), deployment frequency improvements, and cloud budget savings.'
  },
  {
    role: 'Data Scientist & ML Engineer',
    category: 'AI & Data',
    mustHaveKeywords: ['Python', 'SQL', 'Machine Learning', 'PyTorch/TensorFlow', 'Data Modeling', 'Pandas/NumPy'],
    niceToHaveKeywords: ['MLOps', 'Feature Stores', 'LLMs / Fine-tuning', 'Vector DBs', 'Kubeflow', 'Airflow'],
    atsScoringWeights: [
      { label: 'Model Performance & Algorithms', pct: 35 },
      { label: 'Production Deployment / MLOps', pct: 30 },
      { label: 'Data Pipeline Scalability', pct: 20 },
      { label: 'Scientific Problem Formulation', pct: 15 }
    ],
    redFlags: ['Academic papers without production business use-cases', 'No mention of evaluation metrics (F1, AUC, RMSE)'],
    bestPractice: 'State the baseline vs. model improvement and how it directly influenced conversion or decision latency.'
  }
];

export const IndustryBenchmarks: React.FC = () => {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);
  const activeBenchmark = BENCHMARKS[selectedRoleIndex];

  return (
    <section id="benchmarks" className="py-16 md:py-24 bg-slate-950 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <span>Algorithmic Matching Profiles</span>
            <span aria-hidden="true">·</span>
            <span>Role Benchmarking</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-['Plus_Jakarta_Sans']">
            Industry ATS Screening Benchmarks
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            See the exact weighting and semantic keywords automated ATS parsers search for when indexing candidate profiles.
          </p>
        </div>

        {/* Role Selector Tabs (functional buttons) */}
        <div className="flex flex-wrap gap-2 mb-8">
          {BENCHMARKS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedRoleIndex(idx)}
              className={`cursor-pointer px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedRoleIndex === idx
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {item.role}
            </button>
          ))}
        </div>

        {/* Selected Role Detail Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Keywords */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs text-indigo-400 font-mono">{activeBenchmark.category} Track</span>
                <h3 className="text-2xl font-bold text-white mt-1 font-['Plus_Jakarta_Sans']">
                  {activeBenchmark.role} Standards
                </h3>
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-300 mb-2.5">
                  High-Priority ATS Keywords (Must Appear in Experience Section)
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeBenchmark.mustHaveKeywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-slate-950 text-indigo-300 border border-indigo-800/40 text-xs font-mono"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-300 mb-2.5">
                  High-Yield Differentiators (Top 10% Candidate Advantage)
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeBenchmark.niceToHaveKeywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800 text-xs font-mono"
                    >
                      +{kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="text-xs font-semibold text-emerald-400 mb-1">
                  Proven Resume Formulation Tip:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeBenchmark.bestPractice}
                </p>
              </div>
            </div>

            {/* Right Column: Scoring weights & Red flags */}
            <div className="lg:col-span-5 space-y-6 border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-6 lg:pt-0 lg:pl-8">
              <div>
                <div className="text-xs font-semibold text-white mb-3">
                  Algorithmic Evaluation Weighting
                </div>
                <div className="space-y-3">
                  {activeBenchmark.atsScoringWeights.map((w, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300">{w.label}</span>
                        <span className="text-indigo-400 font-bold tabular-nums">{w.pct}%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-indigo-500 h-full rounded-full"
                          style={{ width: `${w.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-rose-900/30 bg-rose-950/20 p-4">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 mb-2">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  <span>Frequent Disqualification Traps</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  {activeBenchmark.redFlags.map((flag, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-1.5">
                      <span className="text-rose-400 font-bold">×</span>
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
