import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnimationTitleComponent } from "./animation-title/animation-title.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing-module";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    AnimationTitleComponent
  ],
  providers: [

  ],
  exports: [
  ]
})

export class HomeModule {
}
