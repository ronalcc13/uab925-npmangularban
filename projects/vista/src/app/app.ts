import { Component, signal } from '@angular/core';
import { LabelEspecial,RonaldoUabti925libban, Slide } from 'ronaldo-uabti925libban'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LabelEspecial,RonaldoUabti925libban],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  banners: Slide[] = [
    {
      image: 'https://picsum.photos/900/300?random=1',
      title: 'Bienvenido a mi sitio',
      text: 'Este es un slider minimalista con Angular',
      url: 'https://example.com',
      btnText: 'Saber más',
      // overlay: 'rgba(206, 252, 1, 0.5)'
    },
    {
      image: 'https://picsum.photos/900/300?random=2',
      title: 'Promoción Especial',
      text: 'Disfruta nuestros servicios con descuento',
      url: 'https://example.com/promo',
      btnText: 'Ver oferta',
      overlay: 'rgba(25, 210, 120, 0.3)'
    },
  ];
  protected readonly title = signal('vista');
}
