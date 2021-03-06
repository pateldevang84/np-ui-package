import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpAutoCompleteDemoRoutingModule } from './np-auto-complete-demo-routing.module';
import { NpAutoCompleteDemoComponent } from './np-auto-complete-demo.component';
import { FormsModule } from '@angular/forms';
import { NpAutoCompleteModule, NpHightLightPipe, NpUtilityModule, NpTabsModule, NpCardModule } from 'np-ui-lib';

@NgModule({
  declarations: [NpAutoCompleteDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpAutoCompleteDemoRoutingModule,
    NpAutoCompleteModule,
    NpUtilityModule,
    NpTabsModule,
    NpCardModule
  ],
  providers: [NpHightLightPipe]
})
export class NpAutoCompleteDemoModule { }
