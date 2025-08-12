export interface PaperData {
  title: string;
  abstract: string;
  abstractBullets: string[];
  problemStatement: string;
  problemBullets: string[];
  proposedSolution: string;
  solutionBullets: string[];
  algorithms: string[];
  summary: string;
  summaryBullets: string[];
  keyFindings: string;
  findingsBullets: string[];
  methodology: string;
  methodologyBullets: string[];
  contributions: string;
  contributionsBullets: string[];
  fullText: string;
  fileName: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}