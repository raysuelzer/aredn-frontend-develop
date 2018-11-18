import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusPageComponent } from './status-page/status-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'status',
        pathMatch: 'full'
      },
      {
        path: 'status',
        component: StatusPageComponent
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
