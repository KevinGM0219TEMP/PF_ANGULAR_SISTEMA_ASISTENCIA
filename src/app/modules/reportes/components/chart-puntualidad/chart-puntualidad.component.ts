import { Component, Input, OnChanges } from '@angular/core';
import { ReporteRequestDTO } from 'src/app/core/dto/dto-requests/ReporteRequestDTO';
import { ReporteAsistenciaPuntualidadResponseDTO } from 'src/app/core/dto/dto-responses/ReporteAsistenciaPuntualidadReponseDTO';
import { ReportesService } from '../../services/reportes.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart-puntualidad',
  templateUrl: './chart-puntualidad.component.html',
  styleUrls: ['./chart-puntualidad.component.css']
})
export class ChartPuntualidadComponent implements OnChanges {

  @Input() data: ReporteAsistenciaPuntualidadResponseDTO[] = [];

  chartData!: ChartData<'bar'>;

  ngOnChanges(): void {
    this.chartData = {
      labels: this.data.map(d => d.empleado),
      datasets: [
        {
          label: 'Puntual',
          data: this.data.map(d => d.totalPuntual),
          backgroundColor: '#16a34a'
        },
        {
          label: 'Tardanzas',
          data: this.data.map(d => d.totalTardanzas),
          backgroundColor: '#dc2626'
        }
      ]
    };
  }
}