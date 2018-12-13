import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the JpromisApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JpromisApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello JpromisApiProvider Provider');
  }

  getAllGsr() {
    return this.http.get("http://...");
  }

}
