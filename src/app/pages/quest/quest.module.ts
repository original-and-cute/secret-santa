import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { QuestRoutingModule } from "./quest-routing.module";
import { QuestComponent } from "./quest.component";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    QuestRoutingModule,
    FormsModule
  ],
  declarations: [
    QuestComponent
  ],
  providers: [
  ],
  exports: [
  ]
})

export class QuestModule {
}
