import { NgModule } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { HighlightDirective } from './highlight.directive';
import { HoverDirective } from './hover.directive';
import { MoreInfoButtonComponent } from './more-info-button/more-info-button.component';

@NgModule({
  declarations: [HighlightDirective, HoverDirective, MoreInfoButtonComponent],
  imports: [HttpClientModule, AngularSvgIconModule],
  exports: [
    HighlightDirective,
    HoverDirective,
    CdkAccordionModule,
    MoreInfoButtonComponent,
  ],
})
export class UiKitModule {}
