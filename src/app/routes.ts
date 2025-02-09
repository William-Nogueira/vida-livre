import { Routes } from '@angular/router';
import { DetailsComponent } from './features/country-details/details.component';
import { CountryListComponent } from './features/country-list/country-list.component';

const routeConfig: Routes = [
  {
    path: '',
    component: CountryListComponent,
    title: 'Vida Livre',
  },
  {
    path: ':countryUrl',
    component: DetailsComponent,
    title: 'Vida Livre - Detalhes',
  },
];

export default routeConfig;
