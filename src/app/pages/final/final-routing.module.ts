import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { FinalComponent } from "./final.component";

export const routes: Routes = [
  {
    path: '',
    component: FinalComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FinalRoutingModule {
}
