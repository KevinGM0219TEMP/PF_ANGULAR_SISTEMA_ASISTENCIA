export interface FiltrosReportes {
  fecha_inicio: string;
  fecha_fin: string;
  modo: 'GLOBAL' | 'EMPLEADO';
  empleadoFiltro?: string;
}