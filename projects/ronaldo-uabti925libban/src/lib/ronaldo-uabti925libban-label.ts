import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-label-especial',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="label-especial" [style.color]="color">
      <span class="icono">{{ icono }}</span>
      <span class="texto">{{ texto }}</span>
    </div>
  `,
  styles: [`
    .label-especial {
      font-size: 1.2rem;
      font-weight: bold;
      display: inline-flex;
      align-items: center;
      padding: 4px 8px;
      border-radius: 6px;
      background-color: rgba(0, 123, 255, 0.1);
      margin: 5px 0;
    }
    .label-especial .icono {
      margin-right: 6px;
      font-size: 1.4rem;
    }
  `]
})
export class LabelEspecial {
  @Input() texto: string = 'Nombre:';
  @Input() color: string = '#007bff';
  @Input() icono: string = '/';

  cambiarTexto(nuevoTexto: string) {
    this.texto = nuevoTexto;
  }
}
