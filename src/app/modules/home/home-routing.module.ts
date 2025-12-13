import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { rolesGuard } from 'src/app/core/guards/roles.guard';
import { sessionGuard } from 'src/app/core/guards/session.guard';

const routes: Routes = [

  {
    path:'asistencia',
    loadChildren: () => import('../asistencia/asistencia.module').then(m => m.AsistenciaModule),
    data: { roles: ['ROLE_EMPLEADO']},
    canActivate: [sessionGuard,rolesGuard]
  }
  ,
  {
    path:'justificaciones',
    loadChildren: () => import('../justificaciones/justificaciones.module').then(m => m.JustificacionesModule),
    data: { roles: ['ROLE_EMPLEADO', 'ROLE_ADMIN']},
    canActivate: [sessionGuard,rolesGuard]
  },
  {
    path:'reportes',
    loadChildren: () => import('../reportes/reportes.module').then(m => m.ReportesModule),
    data: { roles: ['ROLE_ADMIN']},
    canActivate: [sessionGuard,rolesGuard]
  },
  {
    path:'**',redirectTo:'asistencia'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
