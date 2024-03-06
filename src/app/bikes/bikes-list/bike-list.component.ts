import { Component, OnDestroy, OnInit } from '@angular/core';
import { BikesService } from '../services/bikes.service';
import { IBike, IBikesResp } from '../types/bike';
import { SearchService } from '../../search/services/search.service';
import {Observable, Subscription} from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.scss']
})
export class BikesListComponent implements OnInit, OnDestroy {
  public isLoading: boolean = true;
  public bikes: IBike[] = [];
  public errorMessage: string = '';
  private searchedStringSubscription$!: Subscription;

  constructor(private bikesService: BikesService, private searchService: SearchService) {}

  public ngOnInit(): void {
    this.loadData();

    this.searchedStringSubscription$ = this.searchService.searchedString$.pipe(
      switchMap((searchString: string) => {
        this.isLoading = true;
        return this.getBikes(searchString);
      })
    ).subscribe((bikesResp: IBikesResp) => {
      this.bikes = bikesResp.bikes;
      this.isLoading = false;
    });
  }

  public ngOnDestroy(): void {
    this.searchedStringSubscription$.unsubscribe();
  }

  private loadData(): void {
    this.getBikes().subscribe(
      {
        next: (bikes: IBikesResp) => {
            this.bikes = bikes.bikes;
            this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
          this.errorMessage = 'An error occurred while fetching bikes. Please try again later.';
        },
      }
    );
  }

  private getBikes(searchString: string = ''): Observable<IBikesResp> {
    return searchString === '' ? this.bikesService.getBikes() : this.bikesService.searchBike(searchString);
  }
}
