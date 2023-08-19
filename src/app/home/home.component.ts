import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Pais } from '../Pais';
import { PaisService } from '../pais.service';
import { FilterService } from '../filter.service';

function normalize(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  PaisList: Pais[] = [];
  filterPaisList: Pais[] = [];

  constructor(
    private paisService: PaisService,
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.PaisList = this.paisService.getAllPais();

    this.filterService.filterValue$.subscribe((filter) => {
      const normalizedFilter = normalize(filter);

      this.filterPaisList = this.PaisList.filter((Pais) =>
        normalize(Pais?.pais).includes(normalizedFilter)
      );
    });
  }
}
