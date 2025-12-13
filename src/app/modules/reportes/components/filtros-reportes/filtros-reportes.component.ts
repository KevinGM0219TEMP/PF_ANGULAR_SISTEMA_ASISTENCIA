import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtros-reportes',
  templateUrl: './filtros-reportes.component.html',
  styleUrls: ['./filtros-reportes.component.css']
})
export class FiltrosReportesComponent {
  @Output() filtrosChange = new EventEmitter<any>();

  fechaInicio!: string;
  fechaFin!: string;
  modo: 'GLOBAL' | 'EMPLEADO' = 'GLOBAL';
  idUsuario?: number;

  emitir() {
    this.filtrosChange.emit({
      fecha_inicio: this.fechaInicio,
      fecha_fin: this.fechaFin,
      modo: this.modo,
      idUsuario: this.modo === 'EMPLEADO' ? this.idUsuario : undefined
    });
  }
}
