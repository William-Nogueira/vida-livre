import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Vida Livre',
  },
  {
    path: ':paisurl',
    component: DetalhesComponent,
    title: 'Vida Livre - Detalhes',
  },
];

export default routeConfig;
