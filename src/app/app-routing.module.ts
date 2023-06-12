import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/features/home/home.component';
import { RoutingPaths } from './constants/enums';

const routes: Routes = [
  { path: '', redirectTo: RoutingPaths.Home, pathMatch: 'full' },
  { path: RoutingPaths.Home, component: HomeComponent },
  { path: '**', redirectTo: RoutingPaths.Home, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
