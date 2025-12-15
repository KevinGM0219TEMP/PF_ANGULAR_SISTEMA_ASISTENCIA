import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';
import { ReporteRequestDTO } from 'src/app/core/dto/dto-requests/ReporteRequestDTO';
import { FiltrosReportes } from 'src/app/core/models/FiltrosReporte';

@Component({
  selector: 'app-filtros-reportes',
  templateUrl: './filtros-reportes.component.html',
  styleUrls: ['./filtros-reportes.component.css']
})
export class FiltrosReportesComponent implements OnInit {

  @Output() filtrosChange = new EventEmitter<FiltrosReportes>();

  fechaInicio!: string;
  fechaFin!: string;
  modo: 'GLOBAL' | 'EMPLEADO' = 'GLOBAL';

  empleadoControl = new FormControl('');

  ngOnInit(): void {
    this.obtenerFecha();
    this.empleadoControl.valueChanges.pipe(
        debounceTime(300)
      )
      .subscribe(() => this.emitir());
    this.emitir();
  }

  obtenerFecha(){
    const hoy = new Date();

    this.fechaInicio = new Date(
      hoy.getFullYear(),
      hoy.getMonth(),
      1
    ).toISOString().split('T')[0];

    this.fechaFin = new Date(
      hoy.getFullYear(),
      hoy.getMonth() + 1,
      0
    ).toISOString().split('T')[0];
  }

  emitir(): void {
    this.filtrosChange.emit({
      fecha_inicio: this.fechaInicio,
      fecha_fin: this.fechaFin,
      modo: this.modo,
      empleadoFiltro:
        this.modo === 'EMPLEADO'
          ? this.empleadoControl.value?.trim() || undefined
          : undefined
    });
  }
}