import { SpokenLanguagesComponent } from './spoken-languages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

  //   path: 'spoken',
  //   loadChildren: () => import('./spoken-languages/spoken-languages.module').then(m => m.SpokenLanguagesModule)
  // }

const routes: Routes = [
  {path: 'spoken', component: SpokenLanguagesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpokenLanguagesRoutingModule { }
