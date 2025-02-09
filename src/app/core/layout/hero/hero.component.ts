import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @ViewChild('filter') 
  filterElement: ElementRef | undefined

  private readonly filterService = inject(FilterService)

  filterResults(text: string): void {
    this.filterService.setFilterValue(text);
  }

  scrollDown(): void {
    const offset = 70;
    window.scrollTo({ top: this.filterElement?.nativeElement.offsetTop - offset, behavior: 'smooth' });
  }
}
