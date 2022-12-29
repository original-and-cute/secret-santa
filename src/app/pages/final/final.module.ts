import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { AnimationTextComponent } from "./animation-text/animation-text.component";
import { FinalRoutingModule } from "./final-routing.module";
import { FinalComponent } from "./final.component";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    FinalRoutingModule
  ],
  declarations: [
    FinalComponent,
    AnimationTextComponent
  ],
  providers: [
  ],
  exports: [
  ]
})

export class FinalModule {
}
