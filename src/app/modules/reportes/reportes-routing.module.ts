import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { rolesGuard } from 'src/app/core/guards/roles.guard';
import { AsistenciasMensualesPageComponent } from './pages/asistencias-mensuales-page/asistencias-mensuales-page.component';
import { AsistenciasVsFaltasPageComponent } from './pages/asistencias-vs-faltas-page/asistencias-vs-faltas-page.component';
import { PuntualidadPageComponent } from './pages/puntualidad-page/puntualidad-page.component';

const routes: Routes = [
  {
      path: 'asistencia-mensual',
      component: AsistenciasMensualesPageComponent,
      data: { roles: ['ROLE_ADMIN'] },
      canActivate: [rolesGuard]
    },
    {
      path:'asistencia-faltas',
      component: AsistenciasVsFaltasPageComponent,
      data: { roles: ['ROLE_ADMIN'] },
      canActivate: [rolesGuard]
    },
    {
      path:'puntualidad',
      component: PuntualidadPageComponent,
      data: { roles: ['ROLE_ADMIN'] },
      canActivate: [rolesGuard]
    },
    {
      path:'**',redirectTo:'solicitud'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
