import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private readonly getUrl = "https://peticiones.online/api/series"

  private readonly postUrl = "https://peticiones.online/api/series"

  constructor(private http: HttpClient){}

  getAll(): Observable<any[]>{
    return this.http.get<any[]>(this.getUrl)
  }

  createSerie(serie: any): Observable<any>{
    return this.http.post<any>(this.postUrl, serie)
  }
}
