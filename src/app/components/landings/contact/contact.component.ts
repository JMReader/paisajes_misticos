import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nombre: string = '';
  correo: string = '';
  telefono: string = '';
  mensaje: string = '';
  mail:string=" tusviajes22@gmail.com"
  openWindow(opc: string) {
    var x = '';
    switch (opc) {
      case 'wpp':
        x =
          "https://wa.me/5493885872269?text=¡Hola! Estoy interesado/a en obtener más información sobre los circuitos que ofrecen para conocer Jujuy.";
        break;
      case 'ig':
        x = 'https://www.instagram.com/senderosenjujuy?utm_source=qr&igsh=ZXQydW9wMmE5dDZ2';
        break;
      case 'email':
        x='mailto: tusviajes22@gmail.com ';
        break;
    }
    window.open(x);
  }
  enviarMensaje() {
    const numeroWhatsApp = '3885219555';
    const mensajeWhatsApp = `Nombre: ${this.nombre}\nCorreo: ${this.correo}\nTelefono: ${this.telefono}\nMensaje: ${this.mensaje}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;
    window.open(url, '_blank');
  }
}
