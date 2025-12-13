import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReporteRequestDTO } from 'src/app/core/dto/dto-requests/ReporteRequestDTO';
import { ReporteAsistenciaMensualResponseDTO } from 'src/app/core/dto/dto-responses/ReporteAsistenciaMensualResponseDTO';
import { ReporteAsistenciaPuntualidadResponseDTO } from 'src/app/core/dto/dto-responses/ReporteAsistenciaPuntualidadReponseDTO';
import { ReporteAsistenciaFaltasResponseDto } from 'src/app/core/dto/dto-responses/ReporteAsistenciasFaltasResponseDTO';
import { enviroment } from 'src/app/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private readonly URL = enviroment.api;

  constructor(private httpClient: HttpClient,) { }

  getReporteAsistenciaMensual(request:ReporteRequestDTO): Observable<ReporteAsistenciaMensualResponseDTO[]> {
  
      return this.httpClient.post<ReporteAsistenciaMensualResponseDTO[]>(
        `${this.URL}/api/v1/reportes/asistencias_mensuales`,
        request
      );
  }

  getReporteAsistenciaFaltas(request:ReporteRequestDTO): Observable<ReporteAsistenciaFaltasResponseDto[]> {
  
      return this.httpClient.post<ReporteAsistenciaFaltasResponseDto[]>(
        `${this.URL}/api/v1/reportes/faltas`,
        request
      );
  }

  getReportePuntualidad(request:ReporteRequestDTO): Observable<ReporteAsistenciaPuntualidadResponseDTO[]> {
  
      return this.httpClient.post<ReporteAsistenciaPuntualidadResponseDTO[]>(
        `${this.URL}/api/v1/reportes/puntualidad`,
        request
      );
  }


}
