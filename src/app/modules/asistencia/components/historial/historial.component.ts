import { Component, OnInit } from '@angular/core';
import { AsistenciaResponseDTO } from 'src/app/core/dto/dto-responses/AsistenciaResponseDTO';
import { AsistenciaService } from '../../services/asistencia.service';
import { PaginationModel } from 'src/app/core/models/PaginationModel';
import { UserSessionService } from 'src/app/core/user-session/user-session.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  asistencias: AsistenciaResponseDTO[] = [];
  idUsuario!: number | null;
  pageNumber = 0;
  rowsPerPage = 5;
  totalPages = 0;
  totalElements = 0;

  isOpen = false;
  hasLoaded = false;

  fecInicio!: string;
  fecFinal!: string;

  constructor(private asistenciaService : AsistenciaService, private userSession: UserSessionService){}

  ngOnInit(): void {
    this.userSession.session$.subscribe(session => {
      this.idUsuario = session.idUsuario;
      
    });

    this.setDefaultDates();
  }

  toggleHistorial() {
    this.isOpen = !this.isOpen;

    if (this.isOpen && !this.hasLoaded && this.idUsuario) {
      this.loadAsistencias();
      this.hasLoaded = true;
    }
  }
  buscar() {
    this.pageNumber = 0;
    this.loadAsistencias();
  }
  loadAsistencias() {

    if (!this.idUsuario) return;
    const request: PaginationModel = {
      pageNumber: this.pageNumber,
      rowsPerPage: this.rowsPerPage,
      filters: [
        { field: 'idUsuario', value: String(this.idUsuario) },
        { field: 'fecInicio', value: this.fecInicio },
        { field: 'fecFinal', value: this.fecFinal }
      ],
      sorts: [
        { colName: 'fecEntrada', direction: 'DESC' }
      ]
    };

    this.asistenciaService.getAsistenciasPaged(request)
      .subscribe(response => {
        this.asistencias = response.content;
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
        console.log(this.asistencias)
      });
  }

  nextPage() {
    if (this.pageNumber + 1 < this.totalPages) {
      this.pageNumber++;
      this.loadAsistencias();
    }
  }

  prevPage() {
    if (this.pageNumber > 0) {
      this.pageNumber--;
      this.loadAsistencias();
    }
  }
  private setDefaultDates() {
    const now = new Date();

    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    this.fecInicio = firstDay.toISOString().substring(0, 10);
    this.fecFinal = lastDay.toISOString().substring(0, 10);
  }
}
