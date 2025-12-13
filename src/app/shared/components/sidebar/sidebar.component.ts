import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserSessionService } from 'src/app/core/user-session/user-session.service';
import { JwtUtils } from 'src/app/core/utils/jwt-utils';


interface MenuItem {
  label: string;
  route?: string;
  roles: string[];
  children?: MenuItem[];
  imagen?:string;
  isExpanded?: boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<boolean>();

  empleado!: string | null;
  email!: string | null;
  isMenuOpen = true;
  constructor(private userSession: UserSessionService,private router: Router
    ,private cookieService:CookieService,private jwtUtils: JwtUtils) { }

  ngOnInit(): void {
    this.userSession.session$.subscribe(session => {
      this.empleado = session.empleado;
      this.email = session.email;
    });
  }
  menu: MenuItem[] = [
    {
      label: 'Asistencias',
      route: '/asistencia',
      roles: ['ROLE_EMPLEADO'],
      imagen: '../../../../assets/images/icon_asistencia.png'
    },
    {
      label: 'Justificaciones',
      roles: ['ROLE_EMPLEADO', 'ROLE_ADMIN'],
      isExpanded: false,
      route: '/justificaciones/solicitud',
      children: [
        { label: 'Solicitar', route: '/justificaciones/solicitud', roles: ['ROLE_EMPLEADO'] },
        { label: 'Historial', route: '/justificaciones/historial', roles: ['ROLE_EMPLEADO'] },
        { label: 'Gestionar', route: '/justificaciones/gestionar', roles: ['ROLE_ADMIN'] }
      ]
    },
    {
      label: 'Reportes',
      route: '/reportes',
      roles: ['ROLE_ADMIN'],
      imagen: '../../../../assets/images/icon_reporte.png'
    }
  ];
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuToggle.emit(this.isMenuOpen);
  }

  toggleSubmenu(item: any) {
    item.isExpanded = !item.isExpanded;
  }
  canDisplay(item: MenuItem): boolean {
    const token = this.cookieService.get('token') || '';

    const roles = this.jwtUtils.getRoles(token);

    return item.roles.some(r => roles.includes(r));
  }

  navigate(route: string | undefined) {
    if (route) this.router.navigate([route]);
  }
  logout() {
    this.cookieService.delete('token');
    this.userSession.clearSession();
    if(!this.cookieService.check('token')){
      this.router.navigate(['/auth/login']);
    };
    
  }
}
