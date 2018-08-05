import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../../services/person/person.service';
import {LoginService} from '../../../services/auth/login.service';
import {TicketNew} from'../../../models/ticketNew';
import {SubjectService} from '../../../services/subject/subject.service';
import {UsersService} from '../../../services/users/users.service';
import {TicketsService} from '../../../services/tickets/tickets.service';


@Component({
  selector: 'app-ticket-new',
  templateUrl: './ticket-new.component.html',
  styleUrls: ['./ticket-new.component.scss']
})
export class TicketNewComponent implements OnInit {
  public persons:any[];
  public filteredPerson: any[];
  public filteredPersondni: any[];
  public person:any;
  public ticket_new:TicketNew;
  public autoComplete:boolean;
  public subjects:any[];
  public filteredsubjects;
  public users: any[];
  public userform;
  public subjects_ids;
  public filteredUser: any[];

  constructor(private _persons:PersonService,private _subjects:SubjectService,private _users:UsersService,private _ticket:TicketsService) { }

  ngOnInit() {
    this._persons.getAllPersons().subscribe(res=>{this.persons=res},err=>{console.log(err);});
    this.ticket_new = new TicketNew(null,null,null,null,null,null,null,null,[],null,null,null,null,[],null);
    this._subjects.getSubjects().subscribe(res=>{this.subjects=res},err=>{console.log(err);});
    this._users.getUsers().subscribe(res=>{this.users=res;},err=>{console.log(err);});

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

  assigned()
  {
     this.ticket_new.user_assigned=this.userform.id;

  }
  subject_id()
  {
    this.ticket_new.subjects_ids.push(this.subjects_ids[0].id);

  }


  filterdni(event) {
     let query = event.query;
     this.filteredPersondni = this.filterPersonDni(query, this.persons);
       }
 filtername(event) {
    let query = event.query;
    this.filteredPerson = this.filteredPersonname(query, this.persons);
      }
  filterPersonDni(query, persons: any[]):any[] {
     let filtered : any[] = [];
     if(persons)
     {
       for(let i = 0; i < persons.length; i++) {
         if(persons[i].dni.indexOf(query) == 0)
         {
          filtered.push(persons[i]);
          }
        }
    }
     return filtered;
  }

  filteredPersonname(query, persons: any[]):any[] {
    let filtered : any[] = [];
    for(let i = 0; i < persons.length; i++) {
    if(persons[i].name.toLowerCase().indexOf(query.toLowerCase()) == 0)
    {
    filtered.push(persons[i]);
    }
    }
    return filtered;
 }
 filterSubject(event) {
    let query = event.query;
    this.filteredsubjects = this.filterSubjects(query, this.subjects);
      }

  filterSubjects(query, subjects: any[]):any[] {
    let filtered : any[] = [];
    for(let i = 0; i < subjects.length; i++) {
    if(subjects[i].name.toLowerCase().indexOf(query.toLowerCase()) == 0)
    {
    filtered.push(subjects[i]);
    }
    }
    return filtered;
 }
 person_select()
 {
    //this.ticket_new=this.person;
    this.autoComplete=true;
    this.ticket_new.address=this.person.address;
    this.ticket_new.agentDni=this.person.agentDni;
    this.ticket_new.agentName=this.person.agentName;
    this.ticket_new.dinType_id=this.person.dinType_id;
    this.ticket_new.dni=this.person.dni;
    this.ticket_new.email=this.person.email;
    this.ticket_new.name=this.person.name;
    this.ticket_new.phone=this.person.phone;
    this.ticket_new.id=this.person.id;


 }
 onUpload(event) {

      for(let file of event.files) {
      this.ticket_new.files.push(file);
      }


      console.log(this.ticket_new.files);
    }


  save()
   {
    this.ticket_new.status_id=1;
    console.log(this.ticket_new);
    this._ticket.createticket_new(this.ticket_new).subscribe(res=>{console.log(res)},err=>{console.log(err)});
   }

  clean (){
    this.autoComplete=false;
    this.ticket_new.address="";
    this.ticket_new.agentDni="";
    this.ticket_new.agentName="";
    this.ticket_new.dinType_id=null;
    this.ticket_new.dni=null;
    this.ticket_new.email="";
    this.ticket_new.name="";
    this.ticket_new.phone="";
    this.ticket_new.id="";
    this.person={};
  }
}
