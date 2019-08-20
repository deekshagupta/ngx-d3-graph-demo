import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgxD3GraphsService {

  constructor(private http: HttpClient) { }
  getD3Graph(graphType) {
    return this.http.get('./assets/' + graphType + '.json');
  }
}