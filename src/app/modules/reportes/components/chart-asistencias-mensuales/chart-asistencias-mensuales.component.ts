import { Component, Input } from '@angular/core';
import { ReporteRequestDTO } from 'src/app/core/dto/dto-requests/ReporteRequestDTO';
import { ReporteAsistenciaMensualResponseDTO } from 'src/app/core/dto/dto-responses/ReporteAsistenciaMensualResponseDTO';
import { ReportesService } from '../../services/reportes.service';

@Component({
  selector: 'app-chart-asistencias-mensuales',
  templateUrl: './chart-asistencias-mensuales.component.html',
  styleUrls: ['./chart-asistencias-mensuales.component.css']
})
export class ChartAsistenciasMensualesComponent {
  @Input() request!: ReporteRequestDTO;
  
  data: ReporteAsistenciaMensualResponseDTO[] = [];
  
  constructor(private reportesService: ReportesService) {}
  
  ngOnChanges() {
     if (this.request) {
      this.reportesService
         .getReporteAsistenciaMensual(this.request)
         .subscribe(res => this.data = res);
    }
  }
}
