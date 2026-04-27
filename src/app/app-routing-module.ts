import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListComponent } from './usuarios/usuarios-list/usuarios-list.component';

const routes: Routes = [
  {path: 'usuarios', loadChildren: () => import('./usuarios/usuarios-routing.module').then(m => m.RepositorioRoutingModule)},
  {path: 'repositorios', loadChildren: () => import('./repositorios/repositorio-routing.module').then(m => m.RepositorioRoutingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
