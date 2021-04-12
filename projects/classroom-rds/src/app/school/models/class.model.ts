export interface Class {
  id?: string;
  name: string;
  teacherId?: string;
  grade: string;
  description?: string;
  classState: ClassState;
}

export enum ClassState {
  ACTIVO,
  BORRADOR,
  ARCHIVADO,
  SUSPENDIDO,
  NINGUNO
}
