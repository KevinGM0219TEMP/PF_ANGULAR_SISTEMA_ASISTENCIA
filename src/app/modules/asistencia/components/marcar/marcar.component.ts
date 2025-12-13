import { Component, OnInit } from '@angular/core';
import { UserSessionService } from 'src/app/core/user-session/user-session.service';
import { AsistenciaService } from '../../services/asistencia.service';
import { AsistenciaResponseDTO } from 'src/app/core/dto/dto-responses/AsistenciaResponseDTO';
import { AsistenciaRequestDTO } from 'src/app/core/dto/dto-requests/AsistenciaRequestDTO';

@Component({
  selector: 'app-marcar',
  templateUrl: './marcar.component.html',
  styleUrls: ['./marcar.component.css']
})
export class MarcarComponent implements OnInit {

  idUsuario!: number | null;
  asistenciaDiaria: AsistenciaResponseDTO | null = null;

  constructor(private userSession: UserSessionService,private asistenciaService: AsistenciaService) {}

  ngOnInit(): void {
    this.userSession.session$.subscribe(session => {
      this.idUsuario = session.idUsuario;

      if (this.idUsuario) {
        this.asistenciaService.getAsistenciaDiario(this.idUsuario).subscribe(
          response => {
            this.asistenciaDiaria = response.length > 0 ? response[0] : null;
          }
        );
      }
    });
  }

  marcarEntrada() {
    if (!this.idUsuario) return;
    const request: AsistenciaRequestDTO = {
      idUsuario: this.idUsuario
    };

    this.asistenciaService.chekIn(request).subscribe(() => {
      this.ngOnInit();
    });
  }

  marcarSalida() {
    if (!this.idUsuario) return;
    const request: AsistenciaRequestDTO = {
      idUsuario: this.idUsuario
    };

    this.asistenciaService.chekOut(request).subscribe(() => {
      this.ngOnInit(); 
    });
  }


  get tieneEntrada(): boolean {
    return !!this.asistenciaDiaria?.fecEntrada;
  }

  get tieneSalida(): boolean {
    return !!this.asistenciaDiaria?.fecSalida;
  }
}

