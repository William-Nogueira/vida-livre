import { Component, inject, OnInit, Signal, computed } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Pais } from 'src/app/core/models/Pais';
import { FilterService } from 'src/app/core/services/filter.service';
import { PaisService } from 'src/app/core/services/pais.service';

@Component({
  selector: 'app-country-list',
  imports: [CardComponent],
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {
  filteredPaisList!: Signal<Pais[]>;

  private readonly paisService = inject(PaisService);
  private readonly filterService = inject(FilterService);

  ngOnInit(): void {
    const paisList = this.paisService.getAllPais();
    paisList.sort((a, b) => a.pais.localeCompare(b.pais));

    this.filteredPaisList = computed(() => {
      const filter = this.filterService.filterValue;
      const normalizedFilter = this.normalize(filter);

      return paisList.filter(
        (pais) =>
          this.normalize(pais?.pais).includes(normalizedFilter) ||
          this.normalize(pais?.cidade).includes(normalizedFilter)
      );
    });
  }

  private normalize(input: string): string {
    return input
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }
}
