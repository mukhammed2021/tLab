import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { UiKitModule } from '../../shared/ui';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HttpClientModule, AngularSvgIconModule, UiKitModule],
})
export class HomeModule {}
