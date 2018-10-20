import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { OmOsComponent } from './pages/om-os/om-os.component';
import { ProjekterComponent } from './pages/projekter/projekter.component';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OmOsComponent,
    ProjekterComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
