import { Component, OnInit } from '@angular/core';
import { IBikeResp, IDetailBike } from '../types/bike';
import { ActivatedRoute } from '@angular/router';
import { BikesService } from '../services/bikes.service';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrl: './bike-details.component.scss'
})
export class BikeDetailsComponent implements OnInit  {
  public bikeDetails!: IDetailBike;
  public bikeId!: string | null;
  constructor(private readonly route: ActivatedRoute, private _bikesService: BikesService) {}

  ngOnInit() {
    this.bikeId = this.route.snapshot.params['id'];
     if (this.bikeId) {
       this._bikesService.getBike(this.bikeId).pipe().subscribe((bike: IBikeResp) => this.bikeDetails = bike.bike)
     }
  }
}
