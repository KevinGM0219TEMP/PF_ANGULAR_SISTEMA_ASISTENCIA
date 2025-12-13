import { Component } from '@angular/core';
import { ReporteRequestDTO } from 'src/app/core/dto/dto-requests/ReporteRequestDTO';

@Component({
  selector: 'app-reportes-page',
  templateUrl: './reportes-page.component.html',
  styleUrls: ['./reportes-page.component.css']
})
export class ReportesPageComponent {
  request!: ReporteRequestDTO;
  modo: 'GLOBAL' | 'EMPLEADO' = 'GLOBAL';

  onFiltrosChange(event: {
    fecha_inicio: string;
    fecha_fin: string;
    modo: 'GLOBAL' | 'EMPLEADO';
    idUsuario?: number;
  }) {
    this.modo = event.modo;

    this.request = {
      fecha_inicio: event.fecha_inicio,
      fecha_fin: event.fecha_fin,
      ...(event.idUsuario && { idUsuario: event.idUsuario })
    };
  }
}
