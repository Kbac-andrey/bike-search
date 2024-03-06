import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikesListComponent } from './bikes-list/bike-list.component';
import { BikesRoutingModule } from './bikes-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { SearchComponent } from '../search/search.component';

@NgModule({
  declarations: [BikesListComponent, BikeDetailsComponent],
  imports: [
    CommonModule, BikesRoutingModule, HttpClientModule, SearchComponent
  ]
})
export class BikesModule { }
