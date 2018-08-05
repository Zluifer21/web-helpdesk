import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API } from '../../API';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
   public url:string;
   public token:string;

  constructor(public http:HttpClient) {
    this.url=API.url;
    this.token=localStorage.getItem('token');
   }

   getUsers(): Observable<any>
   {
      let headers= new HttpHeaders({'Authorization':'Bearer '+this.token});
     return this.http.get(this.url+'userAll', {headers: headers});
   }
}
