import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ReporteAsistenciaMensualResponseDTO } from 'src/app/core/dto/dto-responses/ReporteAsistenciaMensualResponseDTO';
import { ReportesService } from '../../services/reportes.service';
import { FiltrosReportes } from 'src/app/core/models/FiltrosReporte';

@Component({
  selector: 'app-asistencias-mensuales-page',
  templateUrl: './asistencias-mensuales-page.component.html',
  styleUrls: ['./asistencias-mensuales-page.component.css']
})
export class AsistenciasMensualesPageComponent {

  data$!: Observable<ReporteAsistenciaMensualResponseDTO[]>;

  constructor(private reportesService: ReportesService) {}

  onFiltrosChange(filtros: FiltrosReportes) {
    this.data$ = this.reportesService.getReporteAsistenciaMensual({
      fecha_inicio: filtros.fecha_inicio,
      fecha_fin: filtros.fecha_fin
    });
  }
}