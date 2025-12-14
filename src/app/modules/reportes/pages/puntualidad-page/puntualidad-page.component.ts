import { Component } from '@angular/core';
import { combineLatest, map, Observable, of } from 'rxjs';
import { ReporteAsistenciaPuntualidadResponseDTO } from 'src/app/core/dto/dto-responses/ReporteAsistenciaPuntualidadReponseDTO';
import { FiltrosReportes } from 'src/app/core/models/FiltrosReporte';
import { ReportesService } from '../../services/reportes.service';

@Component({
  selector: 'app-puntualidad-page',
  templateUrl: './puntualidad-page.component.html',
  styleUrls: ['./puntualidad-page.component.css']
})
export class PuntualidadPageComponent {

  private data$!: Observable<ReporteAsistenciaPuntualidadResponseDTO[]>;
  filteredData$!: Observable<ReporteAsistenciaPuntualidadResponseDTO[]>;

  private filtros$ = of<FiltrosReportes | null>(null);

  constructor(private reportesService: ReportesService) {}

  onFiltrosChange(filtros: FiltrosReportes) {

    this.data$ = this.reportesService.getReportePuntualidad({
      fecha_inicio: filtros.fecha_inicio,
      fecha_fin: filtros.fecha_fin
    });

    this.filtros$ = of(filtros);

    this.filteredData$ = combineLatest([this.data$, this.filtros$]).pipe(
      map(([data, filtros]) => {
        if (!filtros?.empleadoFiltro) {
          return this.agruparGlobal(data);
        }

        const emp = filtros.empleadoFiltro.toLowerCase();
        return data.filter(d =>
          d.empleado.toLowerCase().includes(emp)
        );
      })
    );
  }

  private agruparGlobal(data: ReporteAsistenciaPuntualidadResponseDTO[]) : ReporteAsistenciaPuntualidadResponseDTO[]{
    const totalPuntual = data.reduce((a, b) => a + b.totalPuntual, 0);
    const totalTardanzas = data.reduce((a, b) => a + b.totalTardanzas, 0);

    const reporte : ReporteAsistenciaPuntualidadResponseDTO ={
      idUsuario: 0,
      empleado: 'GLOBAL',
      totalPuntual,
      totalTardanzas
    }

    return [reporte];
  }
}
