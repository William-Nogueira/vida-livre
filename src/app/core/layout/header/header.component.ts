import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [RouterLink],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
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
