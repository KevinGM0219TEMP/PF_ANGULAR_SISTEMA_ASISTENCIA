import { Component } from '@angular/core';
import { combineLatest, map, Observable, of } from 'rxjs';
import { ReporteAsistenciaFaltasResponseDto } from 'src/app/core/dto/dto-responses/ReporteAsistenciasFaltasResponseDTO';
import { FiltrosReportes } from 'src/app/core/models/FiltrosReporte';
import { ReportesService } from '../../services/reportes.service';

@Component({
  selector: 'app-asistencias-vs-faltas-page',
  templateUrl: './asistencias-vs-faltas-page.component.html',
  styleUrls: ['./asistencias-vs-faltas-page.component.css']
})
export class AsistenciasVsFaltasPageComponent {

  private data$!: Observable<ReporteAsistenciaFaltasResponseDto[]>;
  filteredData$!: Observable<ReporteAsistenciaFaltasResponseDto[]>;

  private filtros$ = of<FiltrosReportes | null>(null);

  constructor(private reportesService: ReportesService) {}

  onFiltrosChange(filtros: FiltrosReportes): void {


    this.data$ = this.reportesService.getReporteAsistenciaFaltas({
      fecha_inicio: filtros.fecha_inicio,
      fecha_fin: filtros.fecha_fin
    });

    this.filtros$ = of(filtros);

    this.filteredData$ = combineLatest([this.data$, this.filtros$]).pipe(
      map(([data, filtros]) => {

        if (!filtros?.empleadoFiltro) {
          return this.agruparGlobal(data);
        }

        const filtro = filtros.empleadoFiltro.toLowerCase();
        return data.filter(d =>
          d.empleado.toLowerCase().includes(filtro)
        );
      })
    );
  }

  private agruparGlobal(data: ReporteAsistenciaFaltasResponseDto[]): ReporteAsistenciaFaltasResponseDto[] {

    const totalAsistencias = data.reduce((a, b) => a + b.totalAsistencias, 0);

    const totalFaltas = data.reduce((a, b) => a + b.totalFaltas, 0);

    const reporte : ReporteAsistenciaFaltasResponseDto ={
      idUsuario: 0,
      empleado: 'GLOBAL',
      totalAsistencias,
      totalFaltas
    }

    return [reporte];
  }
}
