import { Component, Input, OnChanges } from '@angular/core';
import { ReporteRequestDTO } from 'src/app/core/dto/dto-requests/ReporteRequestDTO';
import { ReporteAsistenciaFaltasResponseDto } from 'src/app/core/dto/dto-responses/ReporteAsistenciasFaltasResponseDTO';
import { ReportesService } from '../../services/reportes.service';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-chart-asistencias-vs-faltas',
  templateUrl: './chart-asistencias-vs-faltas.component.html',
  styleUrls: ['./chart-asistencias-vs-faltas.component.css']
})
export class ChartAsistenciasVsFaltasComponent implements OnChanges{

  @Input() data: ReporteAsistenciaFaltasResponseDto[] = [];
  
    chartData!: ChartData<'bar'>;
  
    ngOnChanges(): void {
      if (!this.data?.length) return;

      this.chartData = {
        labels: this.data.map(d => d.empleado),
        datasets: [
          {
            label: 'Asistencias',
            data: this.data.map(d => d.totalAsistencias),
            backgroundColor: '#2563eb'
          },
          {
            label: 'Faltas',
            data: this.data.map(d => d.totalFaltas),
            backgroundColor: '#dc2626'
          }
        ]
      };
    }

}
