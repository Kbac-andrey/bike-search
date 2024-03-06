import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesListComponent } from './bikes-list/bike-list.component';
import { BikesService } from './services/bikes.service';
import { BikeDetailsComponent } from './bike-details/bike-details.component';

const routes: Routes = [
  {
    path: '',
    component: BikesListComponent,
  },
  {
    path: ':id',
    component: BikeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [BikesService],
  exports: [RouterModule]
})
export class BikesRoutingModule { }
