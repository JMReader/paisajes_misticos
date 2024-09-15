import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css'],
  animations: [
    trigger('fade', [
      state(
        'not-show',
        style({
          transform: 'translateX(-200px)',
        })
      ),
      state(
        'show',
        style({
          transform: 'translateX(0)',
        })
      ),
      transition('show => not-show', animate('1000ms ease-out')),
      transition('not-show => show', animate('1000ms ease-in'))
    ]),
    trigger('fadeLeft', [
      state(
        'not-show',
        style({
          transform: 'translateX(200px)',
        })
      ),
      state(
        'show',
        style({
          transform: 'translateX(0)',
        })
      ),
      transition('show => not-show', animate('1000ms ease-out')),
      transition('not-show => show', animate('1000ms ease-in'))
    ])
  ],
})
export class SecondpageComponent {

  constructor(private el: ElementRef) { }

  state: string = 'not-show';

  WHATSAPP_LINK: string= 'https://wa.me/5493884757489?text=¡Hola! Estoy interesado/a en obtener más información sobre sus servicios. ¿Podrian brindarme mas informacion?';
  IG_LINK: string = 'https://www.instagram.com/senderosenjujuy?utm_source=qr&igsh=ZXQydW9wMmE5dDZ2c';
  FACEBOOK_LINK: string = 'https://www.facebook.com/share/mG8swMrT3jdaktyz/?mibextid=qi2Omg';
  EMAIL_LINK: string = 'mailto:tusviajes22@gmail.com';
  
  
  
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const contentSections =
      this.el.nativeElement.querySelectorAll('#carrousel');

    contentSections.forEach((section: HTMLElement) => {
      const rect = section.getBoundingClientRect();

      // Verifica si la sección actual está visible en la ventana
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        this.state = "show";
      }
    });
  }

  openWindow(opc: string) {
    var x = '';
    switch (opc) {
      case 'wpp':
        x = this.WHATSAPP_LINK;
        break;
      case 'ig':
        x =  this.IG_LINK;
        break;
      case 'face':
        x = this.FACEBOOK_LINK;
        break;
      case 'email':
        x =  this.EMAIL_LINK;
        break;
    }
    window.open(x);
  }

}

