export interface Score {
  courseName: string;
  unit1: string;
  unit2: string;
  unit3: string;
  notes1: string;
  notes2: string;
  notes3: string;
  recover1?: string;
  recover2?: string;
  recover3?: string;
  final: number;
  isCourseClose: boolean;
}
export interface Grade {
  isFinished: boolean
  notes1: string[];
  scores: Score[];
}
