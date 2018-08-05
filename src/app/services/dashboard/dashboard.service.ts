import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API } from '../../API';
import {User} from '../../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public url:string;
  public token:string;
  constructor(public http:HttpClient)
  {
    this.url=API.url;
    this.token=localStorage.getItem('token');
  }

  getDashboard():Observable<any>
  {

  let headers= new HttpHeaders({'Authorization':'Bearer '+this.token});
  return  this.http.get(this.url+'dashboard',{headers});
  }

  getmyDashboard():Observable<any>
  {
    console.log(this.token);
    let headers= new HttpHeaders({'Authorization':'Bearer '+this.token});
    return  this.http.get(this.url+'myDashboard',{headers});
  }
}
