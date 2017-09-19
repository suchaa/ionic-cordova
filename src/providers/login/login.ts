import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  options: RequestOptions;

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.options = new RequestOptions({ headers: headers });
  }

  doLogin(body): Observable<any> {
    let bodyString = JSON.stringify(body);
   
    return this.http.post(
      `${environment.apiUrl}/login/api/doLogin`, bodyString, this.options)
      .map((res: Response) => {
        return res.json()
      })
      .catch((error: any) => Observable.throw(error));
  }

}
