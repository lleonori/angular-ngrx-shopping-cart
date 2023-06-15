import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/features/home/home.component';
import { RoutingPaths } from './constants/enums';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: RoutingPaths.Home },
  { component: HomeComponent, path: RoutingPaths.Home },
  { path: '**', pathMatch: 'full', redirectTo: RoutingPaths.Home },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
