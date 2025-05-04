import { NgModule } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { HighlightDirective } from './highlight.directive';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [HighlightDirective, HoverDirective],
  exports: [HighlightDirective, HoverDirective, CdkAccordionModule],
})
export class UiKitModule {}
