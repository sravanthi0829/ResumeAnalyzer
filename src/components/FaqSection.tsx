import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'How does the n8n Resume Analyzer workflow operate?',
    answer:
      'When you submit your resume, the data is dispatched to the active n8n cloud webhook (sravsss29.app.n8n.cloud). The automated workflow parses the document binary, performs entity recognition, calculates ATS parseability and keyword metrics, and dispatches the customized diagnostic evaluation directly to your submitted email address.'
  },
  {
    question: 'What fields does the n8n form accept?',
    answer:
      'The form natively takes three parameters: Name (field-0, text, required), Email (field-1, email, required), and Upload resume (field-2, binary file, required). Both our Smart Interactive Studio and the embedded live view submit cleanly to these parameters.'
  },
  {
    question: 'Which file formats and sizes are supported?',
    answer:
      'The system supports PDF, DOCX, DOC, and plain text TXT files up to 15MB. For optimal ATS parseability across enterprise recruitment software like Workday and Greenhouse, standard clean PDF or DOCX formats with standard single-column typography are recommended.'
  },
  {
    question: 'Is my resume data stored or sold?',
    answer:
      'No. Your resume file is processed purely in ephemeral memory for the duration of the workflow execution. It is never logged in public databases, used for training models without consent, or shared with third-party data brokers.'
  },
  {
    question: 'Can I test the system without uploading my personal resume?',
    answer:
      'Yes! Use the "Quick-Load Demo Resumes" buttons at the top of the Smart Analysis Studio. You can choose between a Senior Full-Stack Engineer, Staff Product Manager, or DevOps & Cloud Architect resume to inspect the workflow in one click.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-950 border-t border-slate-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <span>Frequently Asked Questions</span>
            <span aria-hidden="true">·</span>
            <span>Workflow Documentation</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-['Plus_Jakarta_Sans']">
            Everything you need to know
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Detailed answers regarding our n8n cloud integration, ATS standards, and processing pipeline.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="cursor-pointer w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-slate-800/40"
                >
                  <span className="text-sm sm:text-base font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-indigo-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
