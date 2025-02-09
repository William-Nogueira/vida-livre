import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/core/models/Pais';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() 
  pais: Pais | undefined;

  private readonly router = inject(Router);

  openDetails(countryUrl: string | undefined): void {
    this.router.navigate([countryUrl]);
  }
}
