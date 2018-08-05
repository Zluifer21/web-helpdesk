import { Component, OnInit } from '@angular/core';
//services
import {PersonService} from '../../services/person/person.service';
//models
import {Person} from '../../models/persons';
//interface
export interface EditingP {
  id: number;
  address:string;
  agentDni:string;
  agentName:string;
  dinType_id:number;
  dni:number;
  email:string;
  name:string;
  phone:string;

}


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})



export class PersonsComponent implements OnInit {
persons:Person;
editingP:EditingP;
constructor(private _person:PersonService) {
this.persons =new Person(0,[],'','','','','','',0,'',0,0);
this.editingP={id:0,address:'',agentDni:'',agentName:'',dinType_id:0,dni:0,email:'',phone:'',name:''};
   }

  ngOnInit() {
    this._person.getPersons().subscribe(res=>{this.persons=res},err=>{console.log(err)});

  }
  beginEdit(p){
    this.editingP = p;
    console.log(this.editingP);
  }
  saveEdit()
  {
    this._person.editPersons(this.editingP).subscribe(res=>{console.log(res);},err=>{console.log(err);});
    this._person.getPersons().subscribe(res=>{this.persons=res},err=>{console.log(err)});
    this.editingP={id:0,address:'',agentDni:'',agentName:'',dinType_id:0,dni:0,email:'',phone:'',name:''};
  }
  cancel()
  {
    this.editingP={id:0,address:'',agentDni:'',agentName:'',dinType_id:0,dni:0,email:'',phone:'',name:''};
  }
}
