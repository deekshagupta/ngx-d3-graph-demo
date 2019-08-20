import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class D3GraphsService {

  constructor(private http: HttpClient) { }

    getD3Graph(path) {
    return this.http.get(path);
  }
}
