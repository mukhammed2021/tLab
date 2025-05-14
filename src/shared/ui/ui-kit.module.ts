import { NgModule } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './highlight.directive';
import { HoverDirective } from './hover.directive';
import { MoreInfoButtonComponent } from './more-info-button/more-info-button.component';
import { LogoComponent } from './logo/logo.component';
import { RouterLink } from '@angular/router';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';

@NgModule({
  declarations: [
    HighlightDirective,
    HoverDirective,
    MoreInfoButtonComponent,
    LogoComponent,
    BurgerMenuComponent,
  ],
  imports: [HttpClientModule, AngularSvgIconModule, RouterLink, CommonModule],
  exports: [
    HighlightDirective,
    HoverDirective,
    CdkAccordionModule,
    MoreInfoButtonComponent,
    LogoComponent,
    BurgerMenuComponent,
  ],
})
export class UiKitModule {}
