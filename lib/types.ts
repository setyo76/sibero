export interface ConsultResult {
  serviceType: string;
  estimatedDuration: string;
  followUpQuestions: string[];
  summary: string;
  outOfScope: boolean;
}
