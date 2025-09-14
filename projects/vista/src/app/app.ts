import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LabelEspecial } from 'ronaldo-uabti925libban'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LabelEspecial],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('vista');
}
