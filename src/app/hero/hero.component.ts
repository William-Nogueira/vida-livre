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
}
