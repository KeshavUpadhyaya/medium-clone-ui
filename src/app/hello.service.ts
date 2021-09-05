import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private http: HttpClient) { }

  getTestData(): Observable<any> {
    return this.http.get(`${environment.apiURL}/api/v1/test/hello`);
  }
}
