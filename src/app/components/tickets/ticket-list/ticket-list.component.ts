import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
//models
import {User} from'../../../models/user';
import {Ticket} from'../../../models/tickets';
import {myTicketsByFilters} from '../../../models/myTicketsByFilters';
import {TicketByFilters} from '../../../models/ticketByFilters';
//services
import {LoginService} from '../../../services/auth/login.service';
import {UsersService} from '../../../services/users/users.service';
import {SubjectService} from '../../../services/subject/subject.service';
import {TicketsService} from '../../../services/tickets/tickets.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  //Options date picker
  private dateOptions = [{
    labelMonthNext: 'Proximo mes',
    labelMonthPrev: 'Mes anterior',
    labelMonthSelect: 'Seleccione mes',
    labelYearSelect: 'Seleccione año',
    monthsFull: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Dicciembre'],
    monthsShort: [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agos', 'Sep', 'Oct', 'Nov', 'Dec' ],
    weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
    weekdaysShort: [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado' ],
    weekdaysLetter: [ 'D', 'L', 'M', 'M', 'J', 'V', 'S' ],
    today: 'Hoy',
    clear: 'Limpiar',
    close: 'Elegir',
    format:'yyyy-mm-dd'
  }]

public tab:number;
public userassigned:any;
public userinvol:any;
public filteredUser: any[];
public tickets:Ticket;
public users: any[];
public userform:any;
public subjects:any[];
public myTicketsByFilters:myTicketsByFilters;
public ticketByFilters:TicketByFilters;
public user: User;
  constructor(private router: Router,private _tickets:TicketsService,private _login:LoginService,private _users:UsersService,private _subjects:SubjectService) {
    this.tab=1;
    this.tickets= new Ticket(0,[],'','','','','','',0,'',0,0);
    this.user =this._login.getUSer();
    this.myTicketsByFilters=new myTicketsByFilters('','','');
    this.ticketByFilters= new TicketByFilters('','','','','','','');
  }

  ngOnInit() {
    if(this.user==null){this.router.navigate(['/login']);}
    this._users.getUsers().subscribe(res=>{this.users=res;},err=>{console.log(err);});
    this._tickets.myTicketsByFilters(this.myTicketsByFilters, 1).subscribe(res=>{this.tickets=res; console.log(this.tickets);},err=>{console.log(err);});
    this._subjects.getSubjects().subscribe(res=>{this.subjects=res},err=>{console.log(err);});
  }

  filters(event) {
   let query = event.query;
   this.filteredUser = this.filterUser(query, this.users);
     }

  filterUser(query, users: any[]):any[] {
   let filtered : any[] = [];
   for(let i = 0; i < users.length; i++) {
   if(users[i].name.toLowerCase().indexOf(query.toLowerCase()) == 0)
   {
   filtered.push(users[i]);
   }
   }
   return filtered;
}

  changeTab(tab:number){
    if(tab==1)
    {
      this.tickets= new Ticket(0,[],'','','','','','',0,'',0,0);
      this._tickets.myTicketsByFilters(this.myTicketsByFilters, 1).subscribe(res=>{this.tickets=res; console.log(this.tickets);},err=>{console.log(err);});
    }else if(tab==2)
    {
      this.tickets= new Ticket(0,[],'','','','','','',0,'',0,0);
      this._tickets.getTicket(1).subscribe(res=>{this.tickets=res; console.log(this.tickets);},err=>{console.log(err);});
    }
    else if (tab==3)
    {
      this.tickets= new Ticket(0,[],'','','','','','',0,'',0,0);
      this._tickets.getHotTicket(1).subscribe(res=>{this.tickets=res; console.log(this.tickets);},err=>{console.log(err);});
    }
    this.tab=tab;
  
  }

  myTicketsByFilter()
  {
    this._tickets.myTicketsByFilters(this.myTicketsByFilters, 1).subscribe(res=>{this.tickets=res;},err=>{console.log(err);})
  }
  myTicketsByFilter_assigned()
  {
   this.myTicketsByFilters.user_assigned_by=this.userform.id;
   this._tickets.myTicketsByFilters(this.myTicketsByFilters, 1).subscribe(res=>{this.tickets=res;},err=>{console.log(err);})
}

  TicketsByFilter_involved()
  {
     this.ticketByFilters.users_involved_tickets=this.userinvol.id;
     this._tickets.myTicketsByFilters(this.myTicketsByFilters, 1).subscribe(res=>{this.tickets=res;},err=>{console.log(err);})
  }

  TicketsByFilter_assigned()
  {
     this.ticketByFilters.user_assigned=this.userassigned.id;
     this._tickets.myTicketsByFilters(this.myTicketsByFilters, 1).subscribe(res=>{this.tickets=res;},err=>{console.log(err);})
  }

  clean()
  {
    this.userform='';
    this.myTicketsByFilters.user_assigned_by='';
    this._tickets.myTicketsByFilters(this.myTicketsByFilters, 1).subscribe(res=>{this.tickets=res;},err=>{console.log(err);})
    console.log(this.myTicketsByFilters);
  }

  TicketsByFilter()
  {
    this._tickets.TicketsByFilters(this.ticketByFilters, 1).subscribe(res=>{this.tickets=res},err=>{console.log(err)});
  }

  createRange(number){
    let  items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  pagination (page:number, tab:number){
      
      
    if(tab==1)
    {
    
      this._tickets.myTicketsByFilters(this.myTicketsByFilters,page).subscribe(res=>{this.tickets=res; console.log(this.tickets);},err=>{console.log(err);});
    }else if(tab==2)
    {
      //console.log(page);
      this._tickets.getTicket(page).subscribe(res=>{this.tickets=res; console.log(this.tickets);},err=>{console.log(err);});
    }
    else if (tab==3)
    {
      
      this._tickets.getHotTicket(page).subscribe(res=>{this.tickets=res; console.log(this.tickets);},err=>{console.log(err);});
    }
    this.tab=tab;
  }

}
