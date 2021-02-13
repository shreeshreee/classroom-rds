export interface StudentGrade {
  id?: string;
  courseId: string;
  studentId: string;
  studentName?: string;
  evaluationYear?: string;
  evaluationType?: 'Parcial' | 'Trimestral' | 'Final' | '';
  evaluationUnit?: 0 | 1 | 2 | 3 | null;
  grade?: 5 | 6 | 7 | 8 | 9 | 10 | null;
  observations?: string;
}
export enum CourseRoles {
  ADMIN,
  OWNER,
  TEACHER,
  STUDENT,

}
