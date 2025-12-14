import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgChartsModule } from 'ng2-charts';
import { AsistenciasMensualesPageComponent } from './pages/asistencias-mensuales-page/asistencias-mensuales-page.component';
import { AsistenciasVsFaltasPageComponent } from './pages/asistencias-vs-faltas-page/asistencias-vs-faltas-page.component';
import { PuntualidadPageComponent } from './pages/puntualidad-page/puntualidad-page.component';
import { FiltrosReportesComponent } from './components/filtros-reportes/filtros-reportes.component';
import { ChartAsistenciasMensualesComponent } from './components/chart-asistencias-mensuales/chart-asistencias-mensuales.component';
import { ChartAsistenciasVsFaltasComponent } from './components/chart-asistencias-vs-faltas/chart-asistencias-vs-faltas.component';
import { ChartPuntualidadComponent } from './components/chart-puntualidad/chart-puntualidad.component';


@NgModule({
  declarations: [ AsistenciasMensualesPageComponent, 
    AsistenciasVsFaltasPageComponent, PuntualidadPageComponent,
    FiltrosReportesComponent,ChartAsistenciasMensualesComponent,ChartAsistenciasVsFaltasComponent,ChartPuntualidadComponent],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    SharedModule,
    NgChartsModule
  ]
})
export class ReportesModule { }
