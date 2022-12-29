import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(
        m => m.HomeModule
      )
  },
  {
    path: 'quest',
    loadChildren: () =>
      import('./pages/quest/quest.module').then(
        m => m.QuestModule
      )
  },
  {
    path: 'final',
    loadChildren: () =>
      import('./pages/final/final.module').then(
        m => m.FinalModule
      )
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
