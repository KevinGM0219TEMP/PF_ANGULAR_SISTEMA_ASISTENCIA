import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JustificacionesRoutingModule } from './justificaciones-routing.module';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { HistorialPageComponent } from '../justificaciones/pages/historial-page/historial-page.component';
import { SolicitudPageComponent } from './pages/solicitud-page/solicitud-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [GestionPageComponent,HistorialPageComponent,SolicitudPageComponent],
  imports: [
    CommonModule,
    JustificacionesRoutingModule,
    SharedModule
  ]
})
export class JustificacionesModule { }
