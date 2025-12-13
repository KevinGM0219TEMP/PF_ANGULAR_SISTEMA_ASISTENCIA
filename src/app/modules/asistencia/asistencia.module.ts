import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsistenciaRoutingModule } from './asistencia-routing.module';
import { AsistenciaPageComponent } from './pages/asistencia-page/asistencia-page.component';
import { MarcarComponent } from './components/marcar/marcar.component';
import { HistorialComponent } from './components/historial/historial.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AsistenciaPageComponent,MarcarComponent,HistorialComponent],
  imports: [
    CommonModule,
    AsistenciaRoutingModule,
    SharedModule
  ]
})
export class AsistenciaModule { }
