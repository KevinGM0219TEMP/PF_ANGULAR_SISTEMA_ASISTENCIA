import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { ReportesPageComponent } from './pages/reportes-page/reportes-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartAsistenciasMensualesComponent } from './components/chart-asistencias-mensuales/chart-asistencias-mensuales.component';
import { ChartPuntualidadComponent } from './components/chart-puntualidad/chart-puntualidad.component';
import { ChartAsistenciasVsFaltasComponent } from './components/chart-asistencias-vs-faltas/chart-asistencias-vs-faltas.component';
import { FiltrosReportesComponent } from './components/filtros-reportes/filtros-reportes.component';


@NgModule({
  declarations: [ReportesPageComponent,DashboardComponent, ChartAsistenciasMensualesComponent, ChartPuntualidadComponent, ChartAsistenciasVsFaltasComponent, FiltrosReportesComponent],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
