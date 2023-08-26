import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  hamburgerActive = false;
  navMenuActive = false;

  toggleHamburger() {
    this.hamburgerActive = !this.hamburgerActive;
    this.navMenuActive = !this.navMenuActive;
  }

  closeNavMenu() {
    this.hamburgerActive = false;
    this.navMenuActive = false;
  }
}
