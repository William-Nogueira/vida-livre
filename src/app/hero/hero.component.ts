import { Component } from '@angular/core';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  constructor(private filterService: FilterService) {}

  filterResults(text: string) {
    this.filterService.setFilterValue(text);
  }

  searchFieldInteracted() {
    this.scrollDown(70);
  }

  private scrollDown(offset: number) {
    const resultsElement = document.getElementById('pais');
    if (resultsElement) {
      resultsElement.scrollIntoView({ behavior: 'smooth' });
      const scrollPosition =
        window.scrollY + resultsElement.getBoundingClientRect().top - offset;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
  }
}
