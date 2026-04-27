import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css'],
  standalone: false
})
export class UsuariosListComponent implements OnInit {

  usuarios: Array<Usuarios> = [];

  constructor(private usuariosService: UsuariosService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
      this.cdr.detectChanges();
    });
  }

}
