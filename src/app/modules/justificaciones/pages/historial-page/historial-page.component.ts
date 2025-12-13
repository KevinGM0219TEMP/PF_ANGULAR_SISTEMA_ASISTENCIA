import { Component } from '@angular/core';
import { JustificacionResponseDTO } from 'src/app/core/dto/dto-responses/JustificacionResponseDTO';
import { JustificacionesService } from '../../services/justificaciones.service';
import { UserSessionService } from 'src/app/core/user-session/user-session.service';
import { PaginationModel } from 'src/app/core/models/PaginationModel';

@Component({
  selector: 'app-historial-page',
  templateUrl: './historial-page.component.html',
  styleUrls: ['./historial-page.component.css']
})
export class HistorialPageComponent {

  justificaciones: JustificacionResponseDTO[] = [];

  pageNumber = 0;
  totalPages = 0;
  rowsPerPage = 10;
  fecInicio!: string;
  fecFinal!: string;
  estado: string = 'P';

  idUsuario!: number | null;

  constructor(private justService: JustificacionesService,private userSession: UserSessionService) {}

  ngOnInit(): void {
    const now = new Date();

    this.fecInicio = new Date(
      now.getFullYear(),
      now.getMonth(),
      1
    ).toISOString().split('T')[0];

    this.fecFinal = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      0
    ).toISOString().split('T')[0];
    this.userSession.session$.subscribe(session => {
      this.idUsuario = session.idUsuario;
      this.buscar();
    });
  }

  buscar(): void {

    if (!this.idUsuario) return;

    const request: PaginationModel = {
      pageNumber: this.pageNumber,
      rowsPerPage: this.rowsPerPage,
      filters: [
        { field: 'idUsuario', value: String(this.idUsuario) },
        { field: 'estado', value: this.estado },
        { field: 'fecInicio', value: this.fecInicio },
        { field: 'fecFinal', value: this.fecFinal }
      ],
      sorts: [
        { colName: 'fecJust', direction: 'DESC' }
      ]
    };
    
    this.justService.getAsistenciasPaged(request).subscribe(res => {
      this.justificaciones = res.content;
      this.totalPages = res.totalPages;
    });
  }

  nextPage(): void {
    this.pageNumber++;
    this.buscar();
  }

  prevPage(): void {
    this.pageNumber--;
    this.buscar();
  }
}
