import { Injectable } from '@angular/core';
import { Pais } from './Pais';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  readonly baseUrl = '../assets/';

  protected PaisList: Pais[] = [
    {
      id: 0,
      pais: 'Portugal',
      paisurl: 'portugal',
      regiao: 'Europa',
      tempovisa: '1 ano',
      foto: `${this.baseUrl}lisboa.png`,
      cidade: 'Lisboa',
      custodevida: 'R$5400-R$9900+ Reais',
      descricao:
        'Portugal é um destino inspirador. Com sua rica história, cidades pitorescas e belas paisagens, o país oferece um ambiente inspirador para trabalhar e explorar. Lisboa, a capital, combina tradição e modernidade, com bairros históricos, como Alfama, e uma cena tecnológica em crescimento no Parque das Nações. O Porto, conhecido por suas vinícolas e charme urbano, também atrai nômades digitais em busca de uma atmosfera acolhedora.',
    },
    {
      id: 1,
      pais: 'Tailândia',
      paisurl: 'tailandia',
      regiao: 'Sudeste Asiático',
      tempovisa: '1 ano',
      foto: `${this.baseUrl}bangkok.png`,
      cidade: 'Bangkok',
      custodevida: 'R$3000-R$7000+ Reais',
      descricao:
        'A Tailândia é um paraíso exótico e vibrante, oferecendo uma fusão única entre praias deslumbrantes, selvas exuberantes e cidades movimentadas. Com uma combinação de infraestrutura moderna e cultura tradicional, é um local atraente para trabalhar remotamente. Bangkok, a capital, é um hub dinâmico com uma cena de coworking em crescimento, enquanto destinos como Chiang Mai e as ilhas tailandesas proporcionam uma mistura perfeita de beleza natural, gastronomia deliciosa e opções de lazer, tornando a Tailândia um refúgio inspirador para nômades digitais em busca de diversidade e aventura.',
    },
    {
      id: 2,
      pais: 'Costa Rica',
      paisurl: 'costa-rica',
      regiao: 'América Central',
      tempovisa: '2 anos',
      foto: `${this.baseUrl}costa-rica.png`,
      cidade: 'San Jose',
      custodevida: 'R$4500-R$8000+ Reais',
      descricao:
        'A Costa Rica é um refúgio tropical fascinante para nômades digitais, oferecendo uma harmoniosa conexão entre natureza exuberante e comodidades modernas. Com suas praias deslumbrantes, florestas tropicais biodiversas e parques nacionais bem preservados, o país proporciona um ambiente inspirador para trabalhar remotamente. Além disso, as cidades como San José oferecem opções de coworking e infraestrutura digital, enquanto a cultura "pura vida" e a variedade de atividades ao ar livre, como surf, trilhas e observação de vida selvagem, enriquecem a experiência de um estilo de vida nômade na Costa Rica.',
    },
    {
      id: 3,
      pais: 'México',
      paisurl: 'mexico',
      regiao: 'América do Norte',
      tempovisa: '4 anos',
      foto: `${this.baseUrl}playa-del-carmen.png`,
      cidade: 'Playa del Carmen',
      custodevida: 'R$3600-R$6500+ Reais',
      descricao:
        'O México é um destino vibrante e diversificado para nômades digitais, oferecendo uma fusão rica entre cultura, história e paisagens deslumbrantes. Cidades como Cidade do México e Playa del Carmen oferecem uma mistura emocionante de vida urbana e praias cativantes, com uma crescente cena de coworking e infraestrutura digital. A gastronomia mexicana é renomada, proporcionando uma experiência culinária única. As ruínas antigas, como as de Chichen Itza, e as belas praias da Riviera Maya adicionam um toque de aventura e exploração à vida de nômade digital no México, tornando-o um destino atraente para aqueles que buscam uma mistura equilibrada entre trabalho e lazer.',
    },
    {
      id: 4,
      pais: 'Malásia',
      paisurl: 'malasia',
      regiao: 'Sudeste Asiático',
      tempovisa: '5 anos',
      foto: `${this.baseUrl}kuala-lumpur.png`,
      cidade: 'Kuala Lumpur',
      custodevida: 'R$3000-R$5500+ Reais',
      descricao:
        'A Malásia é um destino intrigante, combinando uma mistura fascinante de culturas, paisagens variadas e uma infraestrutura moderna. Kuala Lumpur, a capital, oferece uma atmosfera cosmopolita com arranha-céus impressionantes e uma cena de coworking em crescimento. Além disso, cidades como Penang e Langkawi proporcionam um ambiente mais descontraído, com belas praias e uma vibração cultural única. A rica culinária malasiana é uma atração por si só, refletindo a diversidade étnica do país. Com uma combinação de custo de vida acessível e experiências culturais enriquecedoras, a Malásia oferece um equilíbrio atraente entre trabalho e lazer para nômades digitais em busca de novas experiências.',
    },
    {
      id: 5,
      pais: 'Estônia',
      paisurl: 'estonia',
      regiao: 'Europa',
      tempovisa: '5 anos',
      foto: `${this.baseUrl}tallinn.png`,
      cidade: 'Tallinn',
      custodevida: 'R$4500-R$7500+ Reais',
      descricao:
        'A Estônia é um destino encantador, com uma mistura única de inovação digital e beleza natural. A capital, Tallinn, oferece uma combinação de história medieval e infraestrutura moderna, incluindo zonas de internet sem fio gratuito em toda a cidade. O programa de cidadania eletrônica da Estônia permite aos nômades digitais estabelecer uma presença legal e acessar serviços online de forma conveniente. Além disso, a cena de coworking está em crescimento, proporcionando oportunidades de networking. A beleza das paisagens costeiras, florestas exuberantes e ilhas pitorescas complementa a experiência, tornando a Estônia um destino atraente para aqueles que buscam uma mistura de inovação, cultura e natureza.',
    },
    {
      id: 6,
      pais: 'Irlanda',
      paisurl: 'irlanda',
      regiao: 'Europa',
      tempovisa: '1 ano',
      foto: `${this.baseUrl}dublin.png`,
      cidade: 'Dublin',
      custodevida: 'R$9900-R$13500+ Reais',
      descricao:
        'A Irlanda é um destino cativante para nômades digitais, oferecendo uma combinação única de charme histórico, paisagens deslumbrantes e uma atmosfera acolhedora. Cidades como Dublin, com sua cena tecnológica em crescimento, proporcionam uma infraestrutura moderna para trabalhar remotamente. Além disso, as paisagens irlandesas, que variam de falésias dramáticas a campos verdes exuberantes, oferecem oportunidades para explorar a natureza durante o tempo livre. A cultura rica, a música tradicional e os pubs animados acrescentam um toque especial à experiência de nômade digital na Irlanda, proporcionando um equilíbrio atraente entre trabalho e lazer.',
    },
    {
      id: 7,
      pais: 'Argentina',
      paisurl: 'argentina',
      regiao: 'América do Sul',
      tempovisa: '2 anos',
      foto: `${this.baseUrl}buenos-aires.png`,
      cidade: 'Buenos Aires',
      custodevida: 'R$2700-R$5000+ Reais',
      descricao:
        'A Argentina é um destino apaixonante para nômades digitais, com uma mistura envolvente de cultura, história e vastidão geográfica. Buenos Aires, a capital, oferece uma atmosfera artística e animada, além de uma crescente cena de coworking e tecnologia. A rica cultura argentina é refletida na dança do tango, na culinária famosa por seus bifes e na paixão pelo futebol. Além disso, as vastas paisagens que vão desde as montanhas da Patagônia até as vinícolas de Mendoza oferecem oportunidades emocionantes para explorar a natureza e a aventura. Com uma abordagem descontraída da vida, a Argentina oferece aos nômades digitais uma experiência única, equilibrando trabalho, cultura e lazer de maneira harmoniosa.',
    },
  ];

  getAllPais(): Pais[] {
    return this.PaisList;
  }

  getPaisByUrl(paisurl: string): Pais | undefined {
    return this.PaisList.find((Pais) => Pais.paisurl === paisurl);
  }
}
