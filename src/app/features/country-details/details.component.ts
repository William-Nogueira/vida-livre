import { AfterViewInit, Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Pais } from '../../core/models/Pais';
import { PaisService } from '../../core/services/pais.service';

type PaisProperty = keyof Pais;

interface InfoItem {
  header: string;
  property: PaisProperty;
}

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, AfterViewInit {

  @ViewChild('arrowElement')
  arrowElement: ElementRef | undefined

  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly paisService = inject(PaisService);
  private readonly location = inject(Location);

  pais = signal<Pais | undefined>(undefined);

  infoItems: InfoItem[] = [
    { header: 'Estadia Sem Visto', property: 'tempovisa' },
    { header: 'Clima', property: 'temperatura' },
    { header: 'Wi-Fi', property: 'internet' },
    { header: 'Cidade Recomendada', property: 'cidade' },
    { header: 'Custo de Vida', property: 'custodevida' },
    { header: 'Idioma', property: 'lingua' },
  ];

  ngOnInit(): void {
    const countryUrl = this.route.snapshot.params['countryUrl'];
    this.pais.set(this.paisService.getPaisByUrl(countryUrl));
  }

  ngAfterViewInit(): void {
    this.arrowElement?.nativeElement.scrollIntoView();
  }

  back(): void {
    this.location.back();
  }
}
