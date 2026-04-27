import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repositorio } from '../repositorio';
import { RepositorioService } from '../repositorio.service';

@Component({
  selector: 'app-repositorio-detail',
  templateUrl: './repositorio-detail.component.html',
  styleUrls: ['./repositorio-detail.component.css'],
  standalone: false
})
export class RepositorioDetailComponent implements OnInit {

  repositorioId!: number;
  repositorio!: Repositorio;

  constructor(private route: ActivatedRoute, private repositorioService: RepositorioService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.repositorioId = Number(this.route.snapshot.paramMap.get('id'));

    if(this.repositorioId){
      this.getRepositorio();
    }
  }

  getRepositorio(): void {
    this.repositorioService.getRepositorios().subscribe((repositorios) => {
      this.repositorio = repositorios.filter(repo => repo.id === this.repositorioId)[0];
      this.cdr.detectChanges();
    });
  }

}
