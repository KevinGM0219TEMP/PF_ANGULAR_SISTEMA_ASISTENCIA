export interface AsistenciaResponseDTO{
    idAsistencia: number;
    fecEntrada: string;
    fecSalida: string | null;
    idUsuario: number;
    nombreUsuario: string;
}