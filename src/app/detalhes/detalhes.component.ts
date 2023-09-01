import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { PaisService } from '../pais.service';
import { Pais } from '../Pais';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],
})
export class DetalhesComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  PaisService = inject(PaisService);
  Pais: Pais | undefined;

  constructor(private location: Location) {
    const PaisUrl = String(this.route.snapshot.params['paisurl']);
    this.Pais = this.PaisService.getPaisByUrl(PaisUrl);
  }

  back(): void {
    this.location.back();
  }
}
