import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API } from '../../API';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  constructor(public http:HttpClient) { }
  getSubjects():Observable<any>
  {
  let headers= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
  return  this.http.get(API.url+'subject',{headers});
  }
}
