import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
  { path: '', pathMatch: 'full', redirectTo: 'spoken' },
  {
    path: 'spoken',
    loadChildren: () => import('./spoken-languages/spoken-languages.module').then(m => m.SpokenLanguagesModule)
  },
  {
    path: 'programming',
    loadChildren: () => import('./programing-languages/programing-languages.module').then(m => m.ProgramingLanguagesModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
