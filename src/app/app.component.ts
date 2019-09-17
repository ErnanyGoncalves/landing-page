import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  offers = [{
    imagePath:"../assets/bozzano.webp",
    name:"Desodorante Bozzano Sensitive Sem Perfume Aerosol",
    price: 8.99,
    active:true
  },{
    imagePath:"../assets/fralda.webp",
    name:"Fralda Pampers Confort Sec Pacote Giga Tamanho XG",
    price: 75.90
  },{
    imagePath:"../assets/lenco.webp",
    name:"Lenço Umedecido Dove Baby Hidratação Sensível",
    price: 16.90
  },{
    imagePath:"../assets/protetor.webp",
    name:"Protetor Solar Anthelios AIRlicium FPS 70 Gel Creme",
    price: 94.90
  },{
    imagePath:"../assets/umidificador.webp",
    name:"Umidificador Suggar Fresh Bivolt",
    price: 129.90
  },{
    imagePath:"../assets/vitaminac.webp",
    name:"Vitamina C 1000mg Sundown",
    price: 144.85
  }]
}
