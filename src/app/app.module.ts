import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../widgets/header';
import { FooterComponent } from '../widgets/footer';
import { UiKitModule } from '../shared/ui';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiKitModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    MatSidenavModule,
  ],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
