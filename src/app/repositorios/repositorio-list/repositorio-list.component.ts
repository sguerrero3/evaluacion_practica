import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RepositorioService } from '../repositorio.service';
import { Repositorio } from '../repositorio';

@Component({
  selector: 'app-repositorio-list',
  templateUrl: './repositorio-list.component.html',
  styleUrls: ['./repositorio-list.component.css'],
  standalone: false
})
export class RepositorioListComponent implements OnInit {

  repositorios: Array<Repositorio> = [];

  constructor(private repositorioService: RepositorioService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.getRepositorios();
  }

  getRepositorios(): void {
    this.repositorioService.getRepositorios().subscribe((repositorios) => {
      this.repositorios = repositorios;
      this.cdr.detectChanges();
    });
  }

}
