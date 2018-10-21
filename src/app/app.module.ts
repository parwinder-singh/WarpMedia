import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { OmOsComponent } from './pages/om-os/om-os.component';
import { ProjekterComponent } from './pages/projekter/projekter.component';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';
import { PriserComponent } from './pages/priser/priser.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OmOsComponent,
    ProjekterComponent,
    ServicesComponent,
    PriserComponent,
    KontaktComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
