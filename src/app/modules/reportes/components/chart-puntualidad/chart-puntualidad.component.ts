import { Component, Input } from '@angular/core';
import { ReporteRequestDTO } from 'src/app/core/dto/dto-requests/ReporteRequestDTO';
import { ReporteAsistenciaPuntualidadResponseDTO } from 'src/app/core/dto/dto-responses/ReporteAsistenciaPuntualidadReponseDTO';
import { ReportesService } from '../../services/reportes.service';

@Component({
  selector: 'app-chart-puntualidad',
  templateUrl: './chart-puntualidad.component.html',
  styleUrls: ['./chart-puntualidad.component.css']
})
export class ChartPuntualidadComponent {
  @Input() request!: ReporteRequestDTO;

  data: ReporteAsistenciaPuntualidadResponseDTO[] = [];

  constructor(private reportesService: ReportesService) {}

  ngOnChanges() {
    if (this.request) {
      this.reportesService
        .getReportePuntualidad(this.request)
        .subscribe(res => this.data = res);
    }
  }
}
