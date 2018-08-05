import { Component, OnInit,EventEmitter} from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute,Router} from '@angular/router';
import {MaterializeAction} from "angular2-materialize";
//services
import {TicketsService} from '../../../services/tickets/tickets.service';
import {LoginService} from '../../../services/auth/login.service';
//models
import {Ticket} from'../../../models/tickets';
import {User} from'../../../models/user';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {
public user: User;
public ticket:any;

server='https://api-helpdesk-thekrash22.c9users.io/api/public/';
url:string;
type_user:string;
type_fie:string;
modal = new EventEmitter<string|MaterializeAction>();
modalviewer = new EventEmitter<string|MaterializeAction>();
  constructor(private router: Router,private route:ActivatedRoute,private _tickets:TicketsService,private _login:LoginService)
   {this.user =this._login.getUSer(); }

  ngOnInit() {

    if(this.user==null){this.router.navigate(['/login']);}
      this.route.params.subscribe((params) => {
      this._tickets.getTicketDetails(params['id']).subscribe(res=>{this.ticket=res;},err=>{console.log(err);});
    });
  }
  openModal_assigned() {
    this.type_user='assigned';
    this.modal.emit({action:"modal",params:['open']});
  }
  openModal_viewer(data) {

  this.type_fie=data.name.split('.').pop();
  if(this.type_fie=='txt' || this.type_fie=='pdf')
  {
    this.url="https://docs.google.com/viewer?url="+this.server+data.url+"&embedded=true";
  }else
  {
    this.url=this.server+data.url;
  }
    this.modalviewer.emit({action:"modal",params:['open']});

  }
  openModal_user() {
    this.type_user='person';
    this.modal.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modal.emit({action:"modal",params:['close']});
  }
  closeModal_viewer() {
    this.modalviewer.emit({action:"modal",params:['close']});
  }

}
