import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EstadoFilaDirective } from './directives/estado-fila.directive';
import { FormatFechasPipe } from './pipes/format-fechas.pipe';



@NgModule({
  declarations: [
    SidebarComponent,
    EstadoFilaDirective,
    FormatFechasPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ReactiveFormsModule,
    SidebarComponent,
    FormsModule,
    EstadoFilaDirective,
    FormatFechasPipe
  ]
})
export class SharedModule { }
