import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpringhttpService {

  constructor(public http:HttpClient) { }

  getConfig():Observable<any> {
    return this.http.get(`${environment.apiUrl}/home`,{responseType: 'text'});
  }

  postConfig():Observable<any> {
    return this.http.post(`${environment.apiUrl}/test`,null,{responseType: 'text'});
  }
}
