import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AsistenciaRequestDTO } from 'src/app/core/dto/dto-requests/AsistenciaRequestDTO';
import { AsistenciaResponseDTO } from 'src/app/core/dto/dto-responses/AsistenciaResponseDTO';
import { PageResponseDTO } from 'src/app/core/dto/dto-responses/PageResponseDTO';
import { PaginationModel } from 'src/app/core/models/PaginationModel';
import { enviroment } from 'src/app/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  private readonly URL = enviroment.api;

  constructor(private httpClient:HttpClient) { }

  getAsistenciasPaged(paginationRequest: PaginationModel): Observable<PageResponseDTO<AsistenciaResponseDTO>> {

    return this.httpClient.post<PageResponseDTO<AsistenciaResponseDTO>>(
      `${this.URL}/api/v1/asistencia/historial`,
      paginationRequest
    );
  }

  chekIn(asistenciaRequest: AsistenciaRequestDTO): Observable<AsistenciaResponseDTO> {

    return this.httpClient.post<AsistenciaResponseDTO>(
      `${this.URL}/api/v1/asistencia/checkin`,
      asistenciaRequest
    );
  }
  chekOut(asistenciaRequest: AsistenciaRequestDTO): Observable<AsistenciaResponseDTO> {

    return this.httpClient.post<AsistenciaResponseDTO>(
      `${this.URL}/api/v1/asistencia/checkout`,
      asistenciaRequest
    );
  }

  getAsistenciaDiario(idUsuario:number): Observable<AsistenciaResponseDTO[]> {

    return this.httpClient.get<AsistenciaResponseDTO[]>(
      `${this.URL}/api/v1/asistencia/diaria/${idUsuario}`
    );
  }


}
