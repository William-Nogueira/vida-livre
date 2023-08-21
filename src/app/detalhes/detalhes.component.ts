import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../pais.service';
import { Pais } from '../Pais';
import { RouterLink, RouterOutlet } from '@angular/router';

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

  constructor() {
    const PaisUrl = String(this.route.snapshot.params['paisurl']);
    this.Pais = this.PaisService.getPaisByUrl(PaisUrl);
  }
}
