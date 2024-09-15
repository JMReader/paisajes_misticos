import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { CarrouselComponent } from './components/utils/carrousel/carrousel.component';
import { FirstpageComponent } from './components/landings/firstpage/firstpage.component';
import { SecondpageComponent } from './components/landings/secondpage/secondpage.component';
import { ContactComponent } from './components/landings/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LandingComponent,
    FirstpageComponent,
    SecondpageComponent,
    ContactComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarrouselComponent,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
