import { SampleResume } from '../types';

export const SAMPLE_RESUMES: SampleResume[] = [
  {
    id: 'swe-senior',
    role: 'Senior Full Stack Engineer',
    candidateName: 'Alex Rivera',
    candidateEmail: 'alex.rivera.tech@example.com',
    experienceYears: 7,
    filename: 'Alex_Rivera_Senior_FullStack_Resume.txt',
    content: `ALEX RIVERA
Senior Full Stack Engineer | San Francisco, CA
alex.rivera.tech@example.com | github.com/arivera | linkedin.com/in/alexrivera

PROFESSIONAL SUMMARY
Results-driven Full Stack Engineer with 7+ years of experience designing scalable microservices, high-throughput cloud architectures, and responsive web applications. Proven track record leading distributed engineering teams and reducing infrastructure latency by 42%.

CORE SKILLS
- Languages: TypeScript, JavaScript, Python, Go, SQL, HTML5, CSS3
- Frontend: React, Next.js, Redux Toolkit, Tailwind CSS, Webpack, Vite
- Backend: Node.js, Express, PostgreSQL, MongoDB, Redis, GraphQL, REST API
- Cloud & DevOps: AWS (ECS, Lambda, S3, RDS), Docker, Kubernetes, CI/CD (GitHub Actions), Terraform
- Practices: Agile/Scrum, System Design, Unit & Integration Testing (Jest, Playwright), Clean Architecture

PROFESSIONAL EXPERIENCE

Lead Software Engineer | CloudVenture Solutions | 2022 - Present
- Architected and delivered a multi-tenant SaaS analytics platform handling 4.5M daily active events using React, TypeScript, Node.js, and PostgreSQL.
- Implemented real-time dashboard telemetry using WebSockets and Redis Pub/Sub, cutting notification latency from 1.8s to 85ms.
- Spearheaded migration of monolithic Rails app into Dockerized microservices orchestrated on Kubernetes, improving deployment frequency by 300%.
- Mentored a pod of 6 junior and mid-level engineers, instituting rigorous automated code review standards and test coverage targets (>88%).

Senior Software Engineer | FinTech Velocity Labs | 2019 - 2022
- Engineered PCI-DSS compliant payment processing checkout flow in React and Express, processing $18M+ in annual transactional volume.
- Reduced database query times by 65% via optimized PostgreSQL indexing and Redis caching tiers.
- Integrated automated end-to-end testing with Playwright into GitHub Actions CI pipeline, saving 15 engineering hours per release cycle.

EDUCATION
Bachelor of Science in Computer Science | University of California, Berkeley (2015 - 2019)`
  },
  {
    id: 'pm-lead',
    role: 'Staff Product Manager',
    candidateName: 'Elena Rostova',
    candidateEmail: 'elena.rostova.pm@example.com',
    experienceYears: 8,
    filename: 'Elena_Rostova_Staff_Product_Manager.txt',
    content: `ELENA ROSTOVA
Staff Product Manager | New York, NY
elena.rostova.pm@example.com | linkedin.com/in/elenarostova

EXECUTIVE PROFILE
Data-obsessed Product Leader with 8+ years scaling enterprise B2B SaaS products from 0-to-1 and $10M+ ARR. Recognized for cross-functional alignment between engineering, design, and go-to-market teams.

CORE COMPETENCIES
- Product Strategy: Roadmapping, OKR Definition, Market Sizing, Pricing & Packaging, Competitor Intelligence
- Execution: Agile/Scrum, User Story Mapping, Jira, Linear, PRD Authorship, Sprint Planning
- Analytics: SQL, Mixpanel, Amplitude, FullStory, A/B Testing, User Cohort Retention
- Collaboration: Executive Stakeholder Management, Customer Advisory Boards, UX Research

PROFESSIONAL EXPERIENCE

Staff Product Manager | DataPulse Enterprise | 2021 - Present
- Spearheaded the end-to-end launch of DataPulse AI Assistant, capturing 32 enterprise contracts worth $4.2M ARR within 6 months of GA.
- Collaborated with 14 engineers and 2 UX researchers to define product specifications, user journeys, and acceptance criteria.
- Boosted 90-day retention from 58% to 74% by rebuilding the onboarding workflow and introducing interactive guided walkthroughs.

Senior Product Manager | Omnichannel Systems | 2018 - 2021
- Led product strategy for merchant billing tools used by 45,000+ SMBs across North America.
- Decreased merchant churn by 18% through user feedback loops and automated dispute mitigation features.

EDUCATION
Master of Business Administration (MBA) | Columbia Business School (2016 - 2018)
B.A. in Economics & Information Science | University of Michigan (2012 - 2016)`
  },
  {
    id: 'devops-cloud',
    role: 'Senior DevOps & Cloud Architect',
    candidateName: 'Marcus Chen',
    candidateEmail: 'marcus.chen.cloud@example.com',
    experienceYears: 6,
    filename: 'Marcus_Chen_DevOps_Cloud_Architect.txt',
    content: `MARCUS CHEN
Senior DevOps & Cloud Architect | Seattle, WA
marcus.chen.cloud@example.com | github.com/marcuschen-ops

SUMMARY
Certified Cloud Architect (AWS Solutions Architect Pro) specializing in immutable infrastructure, Kubernetes cluster operations, zero-trust security postures, and cost optimization for high-scale microservices.

SKILLS & CERTIFICATIONS
- Cloud: AWS, GCP, Azure
- Containerization: Docker, Kubernetes, Helm, ArgoCD, Istio Service Mesh
- Infrastructure as Code: Terraform, Terragrunt, Ansible, CloudFormation
- CI/CD & Monitoring: GitHub Actions, GitLab CI, Prometheus, Grafana, Datadog, ELK Stack
- Security & Compliance: HashiCorp Vault, SOC2 compliance automation, IAM Least Privilege

EXPERIENCE

Senior Cloud Infrastructure Engineer | Horizon Scale Labs | 2022 - Present
- Architected enterprise multi-region Kubernetes clusters across AWS and GCP using Terraform and ArgoCD GitOps pipelines.
- Reduced monthly cloud spend by $38,000 (34%) through auto-scaling groups, spot instance scheduling, and database rightsizing.
- Engineered automated zero-downtime blue/green deployment workflows for 40+ engineering microservices.

Cloud Operations Engineer | Apex Web Solutions | 2019 - 2022
- Managed 120+ cloud instances maintaining 99.99% uptime across production environments.
- Automated secrets rotation and encryption-at-rest using HashiCorp Vault and AWS KMS.

EDUCATION
B.S. in Computer Engineering | University of Washington (2015 - 2019)`
  }
];

export const TARGET_ROLES = [
  'Full Stack Engineer',
  'Frontend Developer',
  'Backend Engineer',
  'Staff Product Manager',
  'DevOps & Cloud Architect',
  'Data Scientist & ML Engineer',
  'Engineering Manager',
  'UX/UI Design Lead'
];
