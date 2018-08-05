import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API } from '../../API';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 public user: User;
 public url:string;
 public token:string;
  constructor(public http:HttpClient)
    {
      this.url=API.url;
      this.user= new User('','','','','',0,false,[],[]);

     }

     login(user): Observable<any>
     {
       let headers = new HttpHeaders().set('Content-Type','application/json');
       return this.http.post(this.url+'auth', user, {headers: headers});
     }

     getUSer()
     {
       let user = JSON.parse(localStorage.getItem('user'));
       if (user !=null)
       {
         this.user =user[0];
       }else
       {
         this.user=null;
        }
        return this.user;
     }
     getToken()
     {
       let token = localStorage.getItem('token');
       if (token !=null)
       {
         this.token =token;
       }else
       {
         this.token=null;
        }
        return this.token;
     }
}
