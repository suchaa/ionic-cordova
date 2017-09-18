import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the ReviewsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ReviewsProvider {

  data: any;
  options: RequestOptions;

  constructor(public http: Http) {
    console.log('Hello ReviewsProvider Provider');

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + localStorage.getItem('token')
    });
    this.options = new RequestOptions({ headers: headers });

    this.data = null;
  }

  getReviews() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('http://localhost:8080/api/reviews')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          //console.log(this.data);
          resolve(this.data);
        });
    });
  }

  addData(data) {
    let bodyString = JSON.stringify(data)
    this.http.post('http://localhost:8080/api/reviews',bodyString , this.options)
      .subscribe(res => {
        console.log(res.json());
      });
  }

  deleteData(id) {
    this.http.delete('http://localhost:8080/api/reviews/' + id)
      .subscribe((res) => {
        console.log(res.json());
      });
  }

}
