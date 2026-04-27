import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositorioListComponent } from './repositorio-list/repositorio-list.component';
import { RepositorioDetailComponent } from './repositorio-detail/repositorio-detail.component';

const routes: Routes = [
    {
     path: '',
     component: RepositorioListComponent
   },
   {
    path: ':id',
    component: RepositorioDetailComponent
   }
];


@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class RepositorioRoutingModule { }