import { Component, Input } from '@angular/core';
import { ReporteRequestDTO } from 'src/app/core/dto/dto-requests/ReporteRequestDTO';
import { ReporteAsistenciaFaltasResponseDto } from 'src/app/core/dto/dto-responses/ReporteAsistenciasFaltasResponseDTO';
import { ReportesService } from '../../services/reportes.service';

@Component({
  selector: 'app-chart-asistencias-vs-faltas',
  templateUrl: './chart-asistencias-vs-faltas.component.html',
  styleUrls: ['./chart-asistencias-vs-faltas.component.css']
})
export class ChartAsistenciasVsFaltasComponent {

  @Input() request!: ReporteRequestDTO;
  
    data: ReporteAsistenciaFaltasResponseDto[] = [];
  
    constructor(private reportesService: ReportesService) {}
  
    ngOnChanges() {
      if (this.request) {
        this.reportesService
          .getReporteAsistenciaFaltas(this.request)
          .subscribe(res => this.data = res);
      }
    }

}
