import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pais } from '../Pais';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() Pais!: Pais;
}
