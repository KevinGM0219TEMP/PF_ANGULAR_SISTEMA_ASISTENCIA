import { Component } from '@angular/core';
import { JustificacionesService } from '../../services/justificaciones.service';
import { UserSessionService } from 'src/app/core/user-session/user-session.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JustificacionRegisterRequestDTO } from 'src/app/core/dto/dto-requests/JustificacionRegisterRequestDTO';

@Component({
  selector: 'app-solicitud-page',
  templateUrl: './solicitud-page.component.html',
  styleUrls: ['./solicitud-page.component.css']
})
export class SolicitudPageComponent {

  formJustificacion: FormGroup = new FormGroup({});

  idUsuario!: number | null;
  enviado = false;

  constructor(private justificacionService:JustificacionesService,private userSession:UserSessionService){};

  ngOnInit(): void {

    this.userSession.session$.subscribe(session => {
      this.idUsuario = session.idUsuario;
    });

    this.formJustificacion = new FormGroup({
      descripcion: new FormControl('', [
        Validators.required,
        Validators.maxLength(200)
      ]),
      fechaJustificacion: new FormControl('', Validators.required),
      idTipoJustificacion: new FormControl(null, Validators.required)
    });
  }

  enviarSolicitud() {
    if (this.formJustificacion.invalid || !this.idUsuario) return;

    const request: JustificacionRegisterRequestDTO = {
      descripcion: this.formJustificacion.value.descripcion,
      fecha_justificacion: this.formJustificacion.value.fechaJustificacion,
      idTipoJustificacion: this.formJustificacion.value.idTipoJustificacion
    };  
    console.log('fecha enviada:',request)
    this.justificacionService.RegistrarJustificacion(request).subscribe({
      next: () => {
        this.enviado = true;
        this.formJustificacion.reset();
      }
    });
  }


}
