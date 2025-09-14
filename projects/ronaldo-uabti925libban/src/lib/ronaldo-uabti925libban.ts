import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
export interface Slide {
  image: string;
  title: string;
  text: string;
  url?: string;
  btnText?: string;
  overlay?: string;
}

@Component({
  selector: 'lib-banner-animado',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="slider">
      <div
        class="slide"
        *ngFor="let slide of slides; let i = index"
        [class.active]="i === currentSlide"
      >
        <div class="overlay" [ngStyle]="{ background: slide.overlay || 'rgba(0,0,0,0.3)' }"></div>
        <img [src]="slide.image" alt="slide image" />
        <div class="content">
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.text }}</p>
          <button *ngIf="slide.url" (click)="openUrl(slide.url)">
            {{ slide.btnText || 'Ver más' }}
          </button>
        </div>
      </div>
      <button class="prev" (click)="prevSlide()">‹</button>
      <button class="next" (click)="nextSlide()">›</button>
    </div>
  `,
  styles: [
    `
      .slider {
        position: relative;
        width: 100%;
        max-width: 100%;
        margin: auto;
        overflow: hidden;
        border-radius: 0.8rem;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      }
      .slide {
        position: absolute;
        width: 100vw;
        max-width: 100%;
        height: 300px;
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      .slide.active {
        opacity: 1;
        position: relative;
      }

      .slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.8rem;
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0.6rem;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        background: linear-gradient(to top, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
      }

      .content {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: white;
      }
      .content h2 {
        margin: 0 0 0.5rem 0;
        font-size: 1.5rem;
      }
      .content p {
        margin: 0 0 1rem 0;
        font-size: 1rem;
      }
      .content button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;
        background: rgba(255, 255, 255, 0.2);
        color: white;
        font-weight: bold;
        cursor: pointer;
        transition: background 0.3s;
      }
      .content button:hover {
        background: rgba(255, 255, 255, 0.35);
      }

      .prev,
      .next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.4);
        color: white;
        border: none;
        font-size: 2rem;
        padding: 0.3rem 0.8rem;
        cursor: pointer;
        border-radius: 0.3rem;
      }
      .prev {
        left: 10px;
      }
      .next {
        right: 10px;
      }
    `,
  ],
})
export class RonaldoUabti925libban {
  @Input() slides: Slide[] = [];
  @Input() tiempo: number = 5000;
  currentSlide: number = 0;
  private timeoutId: any;

  ngOnInit() {
    this.startSlideTimer();
  }

  ngOnDestroy() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.startSlideTimer();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.startSlideTimer();
  }

  openUrl(url: string) {
    window.open(url, '_blank');
  }

  private startSlideTimer() {
    if (this.timeoutId) clearTimeout(this.timeoutId);

    // Usamos solo this.tiempo general
    this.timeoutId = setTimeout(() => this.nextSlide(), this.tiempo);
  }
}
