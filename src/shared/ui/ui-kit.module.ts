import { NgModule } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { HighlightDirective } from './highlight.directive';
import { HoverDirective } from './hover.directive';
import { MoreInfoButtonComponent } from './more-info-button/more-info-button.component';
import { LogoComponent } from './logo/logo.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    HighlightDirective,
    HoverDirective,
    MoreInfoButtonComponent,
    LogoComponent,
  ],
  imports: [HttpClientModule, AngularSvgIconModule, RouterLink],
  exports: [
    HighlightDirective,
    HoverDirective,
    CdkAccordionModule,
    MoreInfoButtonComponent,
    LogoComponent,
  ],
})
export class UiKitModule {}
