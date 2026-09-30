export interface MetricItem {
  label: string;
  score: number;
  status: string;
  detail: string;
}

export interface AnalysisReport {
  overallScore: number;
  targetRole: string;
  fileInfo: {
    name: string;
    sizeKb: number;
    type: string;
  };
  metrics: MetricItem[];
  detectedSkills: string[];
  recommendedKeywords: string[];
  actionableTips: string[];
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  n8nStatus: number;
  executionNote?: string;
  targetUrl: string;
  candidate: {
    name: string;
    email: string;
  };
  analysis: AnalysisReport;
}

export interface SampleResume {
  id: string;
  role: string;
  candidateName: string;
  candidateEmail: string;
  experienceYears: number;
  filename: string;
  content: string;
}
