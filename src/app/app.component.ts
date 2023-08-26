import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { Pais } from './Pais';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    HomeComponent,
    HeaderComponent,
    RouterLink,
    RouterOutlet,
    HeroComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'vidalivre';
  PaisList: Pais[] = [];
  filterPaisList: Pais[] = [];
  filterResults(text: string) {
    if (!text) {
      this.filterPaisList = this.PaisList;
    }

    this.filterPaisList = this.PaisList.filter((Pais) =>
      Pais?.cidade.toLowerCase().includes(text.toLowerCase())
    );
  }

  isHeroVisible = true;

  toggleHeroVisibility() {
    this.isHeroVisible = !this.isHeroVisible;
  }
}
