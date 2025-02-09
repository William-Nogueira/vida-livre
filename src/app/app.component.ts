import { Component } from '@angular/core';
import { HeaderComponent } from './core/layout/header/header.component';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './core/layout/hero/hero.component';
import { FooterComponent } from './core/layout/footer/footer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        HeaderComponent,
        RouterOutlet,
        HeroComponent,
        FooterComponent,
    ]
})
export class AppComponent {}
