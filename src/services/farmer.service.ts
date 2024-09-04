import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, tap } from "rxjs";
import { TDashboardDetailsData, TDashboardDetailsResponse } from "src/app/newapi/newapi.model";

@Injectable({
    providedIn: 'root',
  })
  export class Farmerservice {

    constructor(private http:HttpClient){

    }

getCreditLaneDashBoardDetails(startDate: string,endDate: string,type: 'ACTUAL'): Observable<TDashboardDetailsData> {
  return this.http
    .get<TDashboardDetailsResponse>(
      `https://creditlane-uat.agrosperity.com/api/getCreditLaneDashBoardDetails/${startDate}/${endDate}/${type}`
    )
    .pipe(
      map((response) => response.data),
      tap((res)=>{
        console.log(res)
      }),
    );
  }}