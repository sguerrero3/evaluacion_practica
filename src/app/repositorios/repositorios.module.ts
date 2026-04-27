import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RepositorioListComponent } from './repositorio-list/repositorio-list.component';
import { RepositorioDetailComponent } from './repositorio-detail/repositorio-detail.component';
import { RepositorioRoutingModule } from './repositorio-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RepositorioRoutingModule
  ],
  exports: [RepositorioListComponent, RepositorioDetailComponent],
  declarations: [RepositorioListComponent, RepositorioDetailComponent]
})
export class RepositoriosModule { }
