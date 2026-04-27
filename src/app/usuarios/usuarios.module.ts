import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuariosDetailComponent } from './usuarios-detail/usuarios-detail.component';
import { RepositorioRoutingModule } from './usuarios-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RepositorioRoutingModule
  ],
  exports: [UsuariosListComponent, UsuariosDetailComponent],
  declarations: [UsuariosListComponent, UsuariosDetailComponent]
})
export class UsuariosModule { }
