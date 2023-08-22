import { Injectable } from '@angular/core';
import { Pais } from './Pais';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  readonly baseUrl = '../assets/cidades/';

  protected PaisList: Pais[] = [
    {
      id: 0,
      pais: 'Portugal',
      paisurl: 'portugal',
      regiao: 'Europa',
      tempovisa: '1 ano',
      foto: `${this.baseUrl}lisboa.png`,
      cidade: 'Lisboa',
      custodevida: 'R$5.400 - R$9.900',
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
      custodevida: 'R$3.000 - R$7.000',
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
      custodevida: 'R$4.500 - R$8.000',
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
      custodevida: 'R$3.600 - R$6.500',
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
      custodevida: 'R$3.000 - R$5.500',
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
      custodevida: 'R$4.500 - R$7.500',
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
      custodevida: 'R$9.900 - R$13.500',
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
      custodevida: 'R$2.700 - R$5.000',
      descricao:
        'A Argentina é um destino apaixonante para nômades digitais, com uma mistura envolvente de cultura, história e vastidão geográfica. Buenos Aires, a capital, oferece uma atmosfera artística e animada, além de uma crescente cena de coworking e tecnologia. A rica cultura argentina é refletida na dança do tango, na culinária famosa por seus bifes e na paixão pelo futebol. Além disso, as vastas paisagens que vão desde as montanhas da Patagônia até as vinícolas de Mendoza oferecem oportunidades emocionantes para explorar a natureza e a aventura. Com uma abordagem descontraída da vida, a Argentina oferece aos nômades digitais uma experiência única, equilibrando trabalho, cultura e lazer de maneira harmoniosa.',
    },
    {
      id: 8,
      pais: 'Vietnã',
      paisurl: 'vietna',
      regiao: 'Sudeste Asiático',
      tempovisa: '3 meses',
      foto: `${this.baseUrl}ho-chi-minh.png`,
      cidade: 'Ho Chi Minh',
      custodevida: 'R$2.500 - R$4.500',
      descricao:
        'O Vietnã é um país exótico que oferece uma fusão intrigante de história rica, culinária deliciosa e paisagens diversas. Ho Chi Minh, a maior cidade do país, possui uma mistura de cultura tradicional e modernidade, com uma cena crescente de coworking. As belezas naturais do Vietnã vão desde as praias deslumbrantes de Da Nang até as montanhas de Sapa. A comida vietnamita é renomada internacionalmente, oferecendo uma experiência gastronômica única. Com custos de vida acessíveis e um ambiente vibrante, o Vietnã atrai nômades digitais em busca de uma combinação única de trabalho e aventura.',
    },
    {
      id: 9,
      pais: 'Espanha',
      paisurl: 'espanha',
      regiao: 'Europa',
      tempovisa: '90 dias',
      foto: `${this.baseUrl}barcelona.png`,
      cidade: 'Barcelona',
      custodevida: 'R$7.200 - R$10.500',
      descricao:
        'A Espanha é um país cativante, conhecido por sua cultura vibrante, praias deslumbrantes e cidades históricas. Barcelona, uma das cidades mais famosas da Espanha, oferece uma mistura única de arquitetura modernista e estilo de vida descontraído. Com uma cena de coworking em crescimento e uma rica herança cultural, a cidade proporciona um ambiente inspirador para nômades digitais. Além disso, a Espanha oferece uma culinária diversificada, festivais animados e paisagens variadas, desde as montanhas dos Pirineus até as ilhas ensolaradas das Canárias.',
    },
    {
      id: 10,
      pais: 'Indonésia',
      paisurl: 'indonesia',
      regiao: 'Sudeste Asiático',
      tempovisa: '30 dias (visa on arrival)',
      foto: `${this.baseUrl}bali.png`,
      cidade: 'Bali',
      custodevida: 'R$2.800 - R$5.500',
      descricao:
        'A Indonésia é um paraíso tropical atraente para nômades digitais em busca de beleza natural e espiritualidade. Bali, conhecida por suas praias exuberantes e atmosfera relaxante, é um destino popular entre os nômades digitais. Com uma cena de coworking vibrante e retiros espirituais, Bali oferece um ambiente propício para trabalho e relaxamento. Além disso, a rica cultura balinesa, as atividades ao ar livre, como surfe e yoga, e os templos majestosos acrescentam uma dimensão única à experiência de nômade digital.',
    },
    {
      id: 11,
      pais: 'Canadá',
      paisurl: 'canada',
      regiao: 'América do Norte',
      tempovisa: '6 meses',
      foto: `${this.baseUrl}vancouver.png`,
      cidade: 'Vancouver',
      custodevida: 'R$8.000 - R$13.000',
      descricao:
        'O Canadá oferece um ambiente acolhedor para nômades digitais que desejam explorar vastas paisagens e cidades modernas. Vancouver, situada entre o oceano e as montanhas, é uma cidade cosmopolita com uma cena de tecnologia em crescimento. A beleza natural da região, incluindo o Parque Stanley, oferece oportunidades para atividades ao ar livre. Além disso, o Canadá é conhecido por sua qualidade de vida, educação de qualidade e diversidade cultural, tornando-o um destino atraente para nômades digitais em busca de uma experiência equilibrada.',
    },
    {
      id: 12,
      pais: 'Grécia',
      paisurl: 'grecia',
      regiao: 'Europa',
      tempovisa: '90 dias',
      foto: `${this.baseUrl}atenas.png`,
      cidade: 'Atenas',
      custodevida: 'R$5.600 - R$9.800',
      descricao:
        'A Grécia oferece uma mistura encantadora de história antiga, praias deslumbrantes e uma atmosfera relaxada. Atenas, a capital, é uma cidade rica em cultura e história, com sítios arqueológicos icônicos, como a Acrópole. Com uma cena emergente de tecnologia e espaços de coworking, a Grécia oferece oportunidades para nômades digitais. As ilhas gregas, com suas águas cristalinas e charme pitoresco, proporcionam um refúgio tranquilo para relaxamento e inspiração.',
    },
    {
      id: 13,
      pais: 'Austrália',
      paisurl: 'australia',
      regiao: 'Oceania',
      tempovisa: '3 meses (eVisitor)',
      foto: `${this.baseUrl}sydney.png`,
      cidade: 'Sydney',
      custodevida: 'R$10.000 - R$16.000',
      descricao:
        'A Austrália oferece uma combinação única de vida urbana moderna e belezas naturais impressionantes. Sydney, com seu famoso porto e estilo de vida descontraído, é uma cidade atraente para nômades digitais. Com uma economia forte e uma cena de tecnologia em crescimento, a Austrália oferece oportunidades de trabalho e exploração. Além disso, as vastas paisagens, como a Grande Barreira de Coral e as montanhas azuis, proporcionam aventuras emocionantes para quem procura um equilíbrio entre trabalho e lazer.',
    },
    {
      id: 14,
      pais: 'Japão',
      paisurl: 'japao',
      regiao: 'Ásia',
      tempovisa: '90 dias',
      foto: `${this.baseUrl}toquio.png`,
      cidade: 'Tóquio',
      custodevida: 'R$9.500 - R$15.000',
      descricao:
        'O Japão oferece uma experiência única de modernidade e tradição, tornando-o um destino intrigante para nômades digitais. Tóquio, a capital, é uma metrópole futurista, conhecida por sua tecnologia de ponta e cultura pop. A cidade oferece uma cena de coworking em crescimento e oportunidades de exploração cultural. Além disso, as cidades históricas, como Quioto, e as belas paisagens naturais, como o Monte Fuji, enriquecem a experiência de viver no Japão.',
    },
    {
      id: 15,
      pais: 'Colômbia',
      paisurl: 'colombia',
      regiao: 'América do Sul',
      tempovisa: '3 meses',
      foto: `${this.baseUrl}medellin.png`,
      cidade: 'Medellín',
      custodevida: 'R$3.000 - R$6.000',
      descricao:
        'A Colômbia é um país fascinante com uma mistura única de cidades modernas e paisagens diversas. Medellín, conhecida por sua transformação urbana e clima agradável, é uma cidade popular entre nômades digitais. Com uma cena de tecnologia em ascensão e uma vibração cultural vibrante, a Colômbia oferece um ambiente inspirador para trabalhar e explorar. Além disso, as belezas naturais, como a região do café e as praias caribenhas, proporcionam uma ampla gama de experiências.',
    },
  ];

  getAllPais(): Pais[] {
    return this.PaisList;
  }

  getPaisByUrl(paisurl: string): Pais | undefined {
    return this.PaisList.find((Pais) => Pais.paisurl === paisurl);
  }
}
