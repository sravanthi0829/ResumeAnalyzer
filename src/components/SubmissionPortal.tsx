import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  RefreshCw,
  Sparkles,
  ArrowRight,
  Maximize2,
  Check,
  Copy,
  Layers,
  Send,
  Mail,
  User,
  Sliders,
  FileCheck
} from 'lucide-react';
import { SAMPLE_RESUMES, TARGET_ROLES } from '../data/sampleResumes';
import { SubmissionResponse, SampleResume } from '../types';

const N8N_URL = 'https://sravsss29.app.n8n.cloud/form/ae413c38-756f-4cad-9a1b-f35b808d281c';

export const SubmissionPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'studio' | 'embed' | 'architecture'>('studio');

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [targetRole, setTargetRole] = useState(TARGET_ROLES[0]);
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStep, setSubmitStep] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [result, setResult] = useState<SubmissionResponse | null>(null);

  // Embed Controls
  const [iframeKey, setIframeKey] = useState(1);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [isEmbedFullscreen, setIsEmbedFullscreen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setErrorMessage(null);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
      setErrorMessage(null);
    }
  };

  const handleLoadSample = (sample: SampleResume) => {
    setName(sample.candidateName);
    setEmail(sample.candidateEmail);
    setTargetRole(sample.role.includes('Full') ? TARGET_ROLES[0] : sample.role.includes('Product') ? TARGET_ROLES[3] : TARGET_ROLES[4]);
    // Create a real File object from sample resume text
    const sampleBlob = new Blob([sample.content], { type: 'text/plain' });
    const sampleFile = new File([sampleBlob], sample.filename, { type: 'text/plain' });
    setFile(sampleFile);
    setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!file) {
      setErrorMessage('Please upload your resume file (PDF, DOCX, or TXT).');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);
    setSubmitStep('Packaging resume payload...');

    try {
      const formData = new FormData();
      formData.append('field-0', name);
      formData.append('field-1', email);
      formData.append('field-2', file);
      formData.append('targetRole', targetRole);

      setSubmitStep('Triggering n8n Cloud Workflow...');

      const response = await fetch('/api/submit-to-n8n', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit to n8n form.');
      }

      setSubmitStep('Generating ATS Diagnostic Report...');
      setTimeout(() => {
        setIsSubmitting(false);
        setResult(data);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 600);
    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMessage(err.message || 'Error occurred while contacting n8n workflow.');
    }
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(N8N_URL);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const resetForm = () => {
    setResult(null);
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section id="upload-studio" className="py-12 md:py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <span>Direct Automation Interface</span>
            <span aria-hidden="true">·</span>
            <span>n8n Cloud Webhook</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-['Plus_Jakarta_Sans']">
            Resume Analysis & Submission Hub
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Submit your resume through our direct integration portal or interact with the native embedded n8n form.
          </p>
        </div>

        {/* Tab Controls (Functional Segmented Control) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800">
            <button
              onClick={() => setActiveTab('studio')}
              className={`cursor-pointer px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'studio'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="h-4 w-4" />
              <span>Smart Analysis Studio</span>
            </button>
            <button
              onClick={() => setActiveTab('embed')}
              className={`cursor-pointer px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'embed'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live n8n Form View</span>
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`cursor-pointer px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'architecture'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="h-4 w-4" />
              <span>Workflow Architecture</span>
            </button>
          </div>
        </div>

        {/* TAB 1: SMART ANALYSIS STUDIO */}
        {activeTab === 'studio' && (
          <div className="mx-auto max-w-4xl">
            {!result ? (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl">
                {/* Sample Resumes Preloader */}
                <div className="mb-6 rounded-xl border border-slate-800/80 bg-slate-950/60 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-300">Quick-Load Demo Resumes:</span>
                    <span className="text-[11px] text-indigo-400">Click to autofill form & file</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {SAMPLE_RESUMES.map((sample) => (
                      <button
                        key={sample.id}
                        type="button"
                        onClick={() => handleLoadSample(sample)}
                        className="cursor-pointer text-left p-2.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800/80 hover:border-indigo-500/50 transition-all text-xs"
                      >
                        <div className="font-medium text-white truncate">{sample.candidateName}</div>
                        <div className="text-[11px] text-slate-400 truncate">{sample.role}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Grid for Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-indigo-400" />
                        <span>Full Name</span>
                        <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Rivera"
                        required
                        className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-indigo-400" />
                        <span>Email Address</span>
                        <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. alex.rivera@example.com"
                        required
                        className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Target Role Selector */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Sliders className="h-3.5 w-3.5 text-indigo-400" />
                      <span>Target Role Benchmark (for ATS matching)</span>
                    </label>
                    <select
                      value={targetRole}
                      onChange={(e) => setTargetRole(e.target.value)}
                      className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                    >
                      {TARGET_ROLES.map((r) => (
                        <option key={r} value={r} className="bg-slate-900 text-white">
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* File Upload Area */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <FileText className="h-3.5 w-3.5 text-indigo-400" />
                        <span>Resume Document</span>
                        <span className="text-rose-400">*</span>
                      </span>
                      <span className="text-[11px] text-slate-400">PDF, DOCX, or TXT up to 15MB</span>
                    </label>

                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragOver(true);
                      }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`cursor-pointer relative rounded-xl border-2 border-dashed p-6 text-center transition-all ${
                        dragOver
                          ? 'border-indigo-500 bg-indigo-500/10'
                          : file
                          ? 'border-emerald-500/60 bg-emerald-950/20'
                          : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-950'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.docx,.doc,.txt"
                        onChange={handleFileChange}
                        className="hidden"
                      />

                      {file ? (
                        <div className="flex flex-col items-center justify-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-2">
                            <FileCheck className="h-6 w-6" />
                          </div>
                          <span className="text-sm font-semibold text-white">{file.name}</span>
                          <span className="text-xs text-slate-400 mt-0.5">
                            {(file.size / 1024).toFixed(1)} KB · Ready for n8n processing
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setFile(null);
                            }}
                            className="mt-2 text-xs text-rose-400 hover:text-rose-300 underline"
                          >
                            Remove file
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-slate-400 mb-3 border border-slate-800">
                            <UploadCloud className="h-6 w-6 text-indigo-400" />
                          </div>
                          <div className="text-sm font-medium text-white">
                            Drag and drop your resume file here
                          </div>
                          <div className="text-xs text-slate-400 mt-1">
                            or click to browse your local documents
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="flex items-center gap-2 rounded-lg border border-rose-800/40 bg-rose-950/40 p-3 text-xs text-rose-300">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submission Progress / Button */}
                  <div>
                    {isSubmitting ? (
                      <div className="rounded-lg border border-indigo-500/40 bg-indigo-950/30 p-4 text-center">
                        <div className="inline-flex items-center justify-center mb-2">
                          <RefreshCw className="h-5 w-5 animate-spin text-indigo-400" />
                        </div>
                        <div className="text-sm font-semibold text-white">{submitStep}</div>
                        <div className="text-xs text-slate-400 mt-1">
                          Connecting with n8n cloud webhook at sravsss29.app.n8n.cloud
                        </div>
                      </div>
                    ) : (
                      <button
                        type="submit"
                        className="cursor-pointer w-full rounded-lg bg-indigo-600 py-3.5 px-4 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all hover:bg-indigo-500 active:scale-98 flex items-center justify-center gap-2"
                      >
                        <Send className="h-4 w-4" />
                        <span>Submit to n8n Resume Analyzer</span>
                      </button>
                    )}
                  </div>
                </form>
              </div>
            ) : (
              /* RESULTS DASHBOARD */
              <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl">
                {/* Header status */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-5 gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-emerald-400">
                        Workflow Executed Successfully
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-1 font-['Plus_Jakarta_Sans']">
                      Diagnostic Assessment for {result.candidate.name}
                    </h3>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Target Role: <span className="text-slate-200">{result.analysis.targetRole}</span> · Document: <span className="text-slate-200">{result.analysis.fileInfo.name}</span> ({result.analysis.fileInfo.sizeKb} KB)
                    </div>
                  </div>

                  <button
                    onClick={resetForm}
                    className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs font-medium text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    <span>Analyze Another</span>
                  </button>
                </div>

                {/* Score Card Banner */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center rounded-xl border border-slate-800/80 bg-slate-950/80 p-5">
                  <div className="md:col-span-4 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-4">
                    <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">Overall ATS Score</div>
                    <div className="text-5xl font-black text-indigo-400 tabular-nums">
                      {result.analysis.overallScore}
                      <span className="text-xl text-slate-500 font-normal">/100</span>
                    </div>
                    <div className="mt-2 text-xs font-medium text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800/40">
                      High Interview Probability
                    </div>
                  </div>

                  <div className="md:col-span-8">
                    <div className="text-xs font-semibold text-white mb-2">n8n Execution Status:</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {result.message}
                    </p>
                    {result.executionNote && (
                      <p className="text-[11px] text-slate-400 mt-1 italic">
                        {result.executionNote}
                      </p>
                    )}
                    <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                      <span>Confirmation dispatched to:</span>
                      <span className="font-mono text-slate-200">{result.candidate.email}</span>
                    </div>
                  </div>
                </div>

                {/* 4 Core Metrics */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {result.analysis.metrics.map((metric, idx) => (
                    <div key={idx} className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-white">{metric.label}</span>
                        <span className="text-sm font-bold text-indigo-400 tabular-nums">{metric.score}%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
                        <div
                          className="bg-indigo-500 h-full rounded-full transition-all duration-700"
                          style={{ width: `${metric.score}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-emerald-400">{metric.status}</span>
                        <span className="text-slate-400">{metric.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skills Detected & Recommended */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                    <div className="text-xs font-semibold text-white mb-2.5">
                      Detected Keywords ({result.analysis.detectedSkills.length})
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {result.analysis.detectedSkills.length > 0 ? (
                        result.analysis.detectedSkills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700/60"
                          >
                            {skill}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-slate-500">None detected in sample excerpt</span>
                      )}
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                    <div className="text-xs font-semibold text-white mb-2.5">
                      High-Yield Keywords to Add
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {result.analysis.recommendedKeywords.map((rec, rIdx) => (
                        <span
                          key={rIdx}
                          className="text-xs px-2.5 py-1 rounded bg-indigo-950/50 text-indigo-300 border border-indigo-800/40"
                        >
                          +{rec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actionable Tips */}
                <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <div className="text-xs font-semibold text-white mb-2">
                    Actionable Improvement Recommendations
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {result.analysis.actionableTips.map((tip, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <span className="text-indigo-400 font-bold">·</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: LIVE EMBEDDED N8N FORM */}
        {activeTab === 'embed' && (
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 shadow-xl overflow-hidden">
              {/* Iframe Control Bar */}
              <div className="flex flex-wrap items-center justify-between border-b border-slate-800 bg-slate-950/90 px-4 py-3 gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-slate-400 truncate max-w-xs sm:max-w-md">
                    {N8N_URL}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyUrl}
                    className="cursor-pointer inline-flex items-center gap-1 rounded bg-slate-800 px-2.5 py-1 text-xs text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                  >
                    {copiedUrl ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copiedUrl ? 'Copied' : 'Copy URL'}</span>
                  </button>
                  <button
                    onClick={() => setIframeKey((k) => k + 1)}
                    className="cursor-pointer inline-flex items-center gap-1 rounded bg-slate-800 px-2.5 py-1 text-xs text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    <span>Reload Form</span>
                  </button>
                  <a
                    href={N8N_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer inline-flex items-center gap-1 rounded bg-indigo-600 px-3 py-1 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors"
                  >
                    <span>Open in Tab</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Native Iframe Container */}
              <div className="relative min-h-[580px] bg-slate-950 flex flex-col items-center justify-center p-2">
                <iframe
                  key={iframeKey}
                  src={N8N_URL}
                  title="n8n Resume Analyzer Form"
                  sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
                  className="w-full h-[620px] rounded-lg border-0 bg-[#fbfcfe]"
                />
              </div>

              {/* Informational footer about n8n form schema */}
              <div className="border-t border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-300">Schema Form Fields:</span>
                  <span>Name (field-0) · Email (field-1) · Upload resume (field-2)</span>
                </div>
                <div className="text-[11px] text-indigo-400">
                  Direct submission via n8n Cloud webhook
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: WORKFLOW ARCHITECTURE */}
        {activeTab === 'architecture' && (
          <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">
              n8n Cloud Workflow Execution Pipeline
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              When a resume is submitted to <code className="bg-slate-800 px-1.5 py-0.5 rounded text-indigo-300 font-mono text-xs">{N8N_URL}</code>, the automated n8n cloud pipeline triggers the following discrete nodes:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <div className="text-xs font-mono text-indigo-400 mb-1">Node 01</div>
                <div className="font-semibold text-white text-sm">Form Trigger</div>
                <div className="text-xs text-slate-400 mt-1">
                  Listens for incoming multipart POST containing name, email, and resume binary file.
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <div className="text-xs font-mono text-indigo-400 mb-1">Node 02</div>
                <div className="font-semibold text-white text-sm">Document Extraction</div>
                <div className="text-xs text-slate-400 mt-1">
                  Extracts text, section headers, work history, and formatting markers from PDF/DOCX.
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <div className="text-xs font-mono text-indigo-400 mb-1">Node 03</div>
                <div className="font-semibold text-white text-sm">AI Evaluation Node</div>
                <div className="text-xs text-slate-400 mt-1">
                  Evaluates ATS keyword match, readability index, and quantifiable impact formulas.
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <div className="text-xs font-mono text-indigo-400 mb-1">Node 04</div>
                <div className="font-semibold text-white text-sm">Email Delivery</div>
                <div className="text-xs text-slate-400 mt-1">
                  Dispatches comprehensive evaluation report directly to candidate's verified inbox.
                </div>
              </div>
            </div>

            {/* API Specification Block */}
            <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950 p-4">
              <div className="text-xs font-semibold text-slate-300 mb-2">Form Submission Technical Specification:</div>
              <div className="font-mono text-xs text-slate-400 space-y-1 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <div><span className="text-indigo-400">POST</span> {N8N_URL}</div>
                <div><span className="text-slate-500">Content-Type:</span> multipart/form-data</div>
                <div><span className="text-slate-500">Body field-0:</span> Candidate Full Name (string, required)</div>
                <div><span className="text-slate-500">Body field-1:</span> Candidate Email (email, required)</div>
                <div><span className="text-slate-500">Body field-2:</span> Resume Binary (file, required)</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
