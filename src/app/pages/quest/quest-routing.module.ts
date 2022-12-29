import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { QuestComponent } from "./quest.component";

export const routes: Routes = [
  {
    path: ':id',
    component: QuestComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '1',
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QuestRoutingModule {
}
