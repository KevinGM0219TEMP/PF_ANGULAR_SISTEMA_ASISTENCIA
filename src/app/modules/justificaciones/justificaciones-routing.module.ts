import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudPageComponent } from './pages/solicitud-page/solicitud-page.component';
import { rolesGuard } from 'src/app/core/guards/roles.guard';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { HistorialPageComponent } from './pages/historial-page/historial-page.component';

const routes: Routes = [
  {
    path: 'solicitud',
    component: SolicitudPageComponent,
    data: { roles: ['ROLE_EMPLEADO'] },
    canActivate: [rolesGuard]
  },
  {
    path:'gestionar',
    component: GestionPageComponent,
    data: { roles: ['ROLE_ADMIN'] },
    canActivate: [rolesGuard]
  },
  {
    path:'historial',
    component: HistorialPageComponent,
    data: { roles: ['ROLE_EMPLEADO'] },
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
export class JustificacionesRoutingModule { }
