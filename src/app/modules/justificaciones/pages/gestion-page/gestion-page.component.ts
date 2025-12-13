import { Component } from '@angular/core';
import { JustificacionesService } from '../../services/justificaciones.service';
import { debounceTime } from 'rxjs';
import { JustificacionResponseDTO } from 'src/app/core/dto/dto-responses/JustificacionResponseDTO';
import { FormControl } from '@angular/forms';
import { PaginationModel } from 'src/app/core/models/PaginationModel';

@Component({
  selector: 'app-gestion-page',
  templateUrl: './gestion-page.component.html',
  styleUrls: ['./gestion-page.component.css']
})
export class GestionPageComponent {


  justificaciones: JustificacionResponseDTO[] = [];

  pageNumber = 0;
  rowsPerPage = 6;
  totalPages = 0;

  fecInicio!: string;
  fecFinal!: string;
  estado: string = 'P';

  empleadoControl = new FormControl('');

  constructor(private justService: JustificacionesService) {}

  ngOnInit(): void {
    const now = new Date();
    this.fecInicio = new Date(now.getFullYear(), now.getMonth(), 1)
      .toISOString().split('T')[0];
    this.fecFinal = new Date(now.getFullYear(), now.getMonth() + 1, 0)
      .toISOString().split('T')[0];

    this.empleadoControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe(() => this.buscar());

    this.buscar();
  }

  buscar(): void {
    const filters = [
      { field: 'estado', value: this.estado },
      { field: 'fecInicio', value: this.fecInicio },
      { field: 'fecFinal', value: this.fecFinal }
    ];

    if (this.empleadoControl.value) {
      filters.push({ field: 'empleado', value: this.empleadoControl.value });
    }

    const request: PaginationModel = {
      pageNumber: this.pageNumber,
      rowsPerPage: this.rowsPerPage,
      filters: filters,
      sorts: [
        { colName: 'fecJust', direction: 'DESC' }
      ]
    };
    this.justService.getAsistenciasPaged(request).subscribe(res => {
      this.justificaciones = res.content;
      this.totalPages = res.totalPages;
      console.log(this.justificaciones)
    });
  }

  procesar(idJustificacion:number, estado: 'A' | 'R'): void {
    this.justService.ProcesarJustificacion({
      idJust: idJustificacion,
      estado
    }).subscribe(() => this.buscar());
  }

  nextPage(): void {
    this.pageNumber++;
    this.buscar();
  }

  prevPage(): void {
    this.pageNumber--;
    this.buscar();
  }
}
