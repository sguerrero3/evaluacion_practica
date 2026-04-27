import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositorioListComponent } from './repositorio-list/repositorio-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RepositorioListComponent],
  declarations: [RepositorioListComponent]
})
export class RepositoriosModule { }
