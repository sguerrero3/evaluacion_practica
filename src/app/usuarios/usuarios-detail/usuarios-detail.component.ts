import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios';
import { UsuariosService } from '../usuarios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios-detail',
  templateUrl: './usuarios-detail.component.html',
  styleUrls: ['./usuarios-detail.component.css'],
  standalone: false
})
export class UsuariosDetailComponent implements OnInit {

  usuarioId!: number;
  @Input() usuario!: Usuarios;

  constructor(private route: ActivatedRoute, private usuariosService: UsuariosService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {

    if(this.usuario === undefined){
            this.usuarioId = Number(this.route.snapshot.paramMap.get('id')!);
            if (this.usuarioId) {
              this.getUsuario();
            }
        }
  }

  getUsuario(): void {
    this.usuariosService.getUsuarios().subscribe(usuarios => {
      this.usuario = usuarios.find(u => u.id === this.usuarioId)!;
      this.cdr.detectChanges();
    });
  }

}
