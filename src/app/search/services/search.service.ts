import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _searchedStringSource$$: Subject<string> = new Subject<string>();

  searchedString$: Observable<string> = this._searchedStringSource$$.asObservable();
  public searchString(location: string): void {
    this._searchedStringSource$$.next(location);
  }
}
