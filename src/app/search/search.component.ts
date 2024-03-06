import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit, OnDestroy {
  public readonly PLACEHOLDER_TEXT: string = 'Search address, zipcode, city, or latitude...';

  public locationControl: FormControl<string> = new FormControl();

  private _destroy$$: Subject<void> = new Subject<void>();

  constructor(private _searchService: SearchService) {}

  public ngOnInit(): void {
    this.locationControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        takeUntil(this._destroy$$)
      )
      .subscribe((searchString: string) => {
        this._searchService.searchString(searchString);
      });
  }

  public ngOnDestroy(): void {
    this._destroy$$.next();
    this._destroy$$.complete();
  }
}
