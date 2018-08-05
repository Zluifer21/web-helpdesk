import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API } from '../../API';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(public http:HttpClient) { }

  getPersons():Observable<any>
  {
  let headers= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
  return  this.http.get(API.url+'person',{headers});
  }

  editPersons(person):Observable<any>
  {
  let headers= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
  return  this.http.put(API.url+'person/'+person.id,person,{headers});
  }

  getAllPersons():Observable<any>
  {
    let headers= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return  this.http.get(API.url+'personAll',{headers});

  }
}
