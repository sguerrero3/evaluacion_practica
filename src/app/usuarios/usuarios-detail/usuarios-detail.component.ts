import { Component, Input, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios';

@Component({
  selector: 'app-usuarios-detail',
  templateUrl: './usuarios-detail.component.html',
  styleUrls: ['./usuarios-detail.component.css'],
  standalone: false
})
export class UsuariosDetailComponent implements OnInit {

  @Input() usuario!: Usuarios;

  constructor() { }

  ngOnInit() {
  }

}
