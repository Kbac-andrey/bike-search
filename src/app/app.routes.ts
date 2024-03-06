import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: "",
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'bikes-list' },
      {
        path: "bikes-list",
        loadChildren: () => import('./bikes/bikes.module').then(m => m.BikesModule)
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
