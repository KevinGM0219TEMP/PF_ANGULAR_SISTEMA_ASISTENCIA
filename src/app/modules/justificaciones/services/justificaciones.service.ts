import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JustificacionProcesarRequestDTO } from 'src/app/core/dto/dto-requests/JustificacionProcesarRequestDTO';
import { JustificacionRegisterRequestDTO } from 'src/app/core/dto/dto-requests/JustificacionRegisterRequestDTO';
import { JustificacionResponseDTO } from 'src/app/core/dto/dto-responses/JustificacionResponseDTO';
import { PageResponseDTO } from 'src/app/core/dto/dto-responses/PageResponseDTO';
import { PaginationModel } from 'src/app/core/models/PaginationModel';
import { enviroment } from 'src/app/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class JustificacionesService {
  private readonly URL = enviroment.api;

  constructor(private httpClient: HttpClient) { }

  RegistrarJustificacion(justificacionRequest: JustificacionRegisterRequestDTO): Observable<JustificacionResponseDTO> {
  
    return this.httpClient.post<JustificacionResponseDTO>(
      `${this.URL}/api/v1/asistencia/justificaciones_solicitud`,
       justificacionRequest
    );
  }

  ProcesarJustificacion(justificacionRequest: JustificacionProcesarRequestDTO): Observable<JustificacionResponseDTO> {
  
    return this.httpClient.post<JustificacionResponseDTO>(
      `${this.URL}/api/v1/asistencia/justificaciones_aprobacion`,
       justificacionRequest
    );
  }
  getAsistenciasPaged(paginationRequest: PaginationModel): Observable<PageResponseDTO<JustificacionResponseDTO>> {
  
      return this.httpClient.post<PageResponseDTO<JustificacionResponseDTO>>(
        `${this.URL}/api/v1/asistencia/listar_justificaciones`,
        paginationRequest
      );
    }
}
