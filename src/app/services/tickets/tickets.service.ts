import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API } from '../../API';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  headers;
  constructor(public http:HttpClient) {
  this.headers=new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})  }

   getTicket(page):Observable<any>
   {
    
   return  this.http.get(API.url+'ticket?page='+page,{headers:this.headers});
   }
   getHotTicket(page):Observable<any>
   {
   return  this.http.get(API.url+'ticketExpired?page='+page,{headers:this.headers});
   }
   myTicketsByFilters(filter,page):Observable<any>
   {
    return this.http.post(API.url+'myTicketsByFilters?page='+page, filter, {headers: this.headers});
   }

   TicketsByFilters(filter,page):Observable<any>
   {
    return this.http.post(API.url+'ticketByFilters?page='+page, filter, {headers: this.headers});
   }

   getTicketDetails(id):Observable<any>
   {
     return this.http.get(API.url+'ticket/'+id, {headers: this.headers});
   }

   createticket_new(ticket):Observable<any>
   {

    let formData:FormData = new FormData();
    formData.append('dni', ticket.dni);
    formData.append('dinType_id', ticket.dinType_id);
    formData.append('name', ticket.name);
    formData.append('agentDni', ticket.agentDni);
    formData.append('agentName', ticket.agentName);
    formData.append('email', ticket.email);
    formData.append('phone', ticket.phone);
    formData.append('address', ticket.address);
    formData.append('user_assigned', ticket.user_assigned);
    formData.append('priority_id', ticket.priority_id);
    formData.append('description', ticket.description);
    formData.append('folios', ticket.folios);
    formData.append('status_id', ticket.status_id);
    formData.append('phone', ticket.phone);
    if (ticket.id)
    {
      formData.append('person_id', ticket.id);
    }


   for (let i=0; i<ticket.files.length;i++)
   {
    formData.append('files[]',ticket.files[i]);
   }

    console.log(ticket.files);


    let headers = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

     return this.http.post(API.url+'ticket', formData, {headers: headers});
   }

}
