import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBikeResp, IBikesResp } from '../types/bike';

@Injectable({
  providedIn: 'root'
})
export class BikesService {
  constructor(private _http: HttpClient) { }
  public getBikes(): Observable<IBikesResp> {
   return this._http.get<IBikesResp>('https://bikeindex.org:443/api/v3/search');
  }

  public searchBike(location: string): Observable<IBikesResp> {
    return this._http.get<IBikesResp>(`https://bikeindex.org/api/v3/search?page=1&per_page=10&location=${location.toLowerCase()}&distance=10&stolenness=proximity`);
  }

  public getBike(id: string): Observable<IBikeResp> {
    return this._http.get<IBikeResp>(`https://bikeindex.org:443/api/v3/bikes/${id}`);
  }
}
