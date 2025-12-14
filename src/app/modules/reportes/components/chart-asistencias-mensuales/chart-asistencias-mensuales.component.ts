import { Component, Input, OnChanges } from '@angular/core';
import { ReporteRequestDTO } from 'src/app/core/dto/dto-requests/ReporteRequestDTO';
import { ReporteAsistenciaMensualResponseDTO } from 'src/app/core/dto/dto-responses/ReporteAsistenciaMensualResponseDTO';
import { ReportesService } from '../../services/reportes.service';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart-asistencias-mensuales',
  templateUrl: './chart-asistencias-mensuales.component.html',
  styleUrls: ['./chart-asistencias-mensuales.component.css']
})
export class ChartAsistenciasMensualesComponent implements OnChanges {

  @Input() data: any[] = [];

  chartData!: ChartData<'line'>;
  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  ngOnChanges(): void {
    if (!this.data?.length) return;

    this.chartData = {
      labels: this.data.map(d => this.formatearMes(d.mes, d.anio)),
      datasets: [
        {
          label: 'Asistencias',
          data: this.data.map(d => d.cantidadAsistencias),
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37, 99, 235, 0.15)',
          fill: true
        }
      ]
    };
  }

  private formatearMes(mes: number, anio: number): string {
    const meses = [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
      'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ];
    return `${meses[mes - 1]} ${anio}`;
  }
}
