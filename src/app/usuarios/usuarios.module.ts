import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [UsuariosListComponent],
  declarations: [UsuariosListComponent]
})
export class UsuariosModule { }
