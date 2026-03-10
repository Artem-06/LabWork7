import { Component, AfterViewInit, HostListener } from '@angular/core';
import { Header } from './header/header';
import { Carousel } from './carousel/carousel';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Carousel, Footer],
  templateUrl: './app.html',
})
export class App implements AfterViewInit {
  ngAfterViewInit() {
    this.updateHeights();
  }

  @HostListener('window:resize')
  updateHeights() {
    const header = document.querySelector('nav');
    const footer = document.querySelector('footer');

    if (header && footer) {
      document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
      document.documentElement.style.setProperty('--footer-height', `${footer.offsetHeight}px`);
    }
  }
}
