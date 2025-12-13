import { Component, Input } from '@angular/core';
import { ReporteRequestDTO } from 'src/app/core/dto/dto-requests/ReporteRequestDTO';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Input() request!: ReporteRequestDTO;
  @Input() modo!: 'GLOBAL' | 'EMPLEADO';  
}
