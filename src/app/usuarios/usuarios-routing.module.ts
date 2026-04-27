import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosDetailComponent } from './usuarios-detail/usuarios-detail.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';

const routes: Routes = [
    {
     path: '',
     component: UsuariosListComponent
   },
   {
    path: ':id',
    component: UsuariosDetailComponent
   }
];


@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class RepositorioRoutingModule { }