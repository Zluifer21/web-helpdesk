import { Component, OnInit } from '@angular/core';
import {User} from'../../models/user';
import {LoginService} from '../../services/auth/login.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
public user: User;
  constructor(private _login:LoginService) {this.user= new User('','','','','',0,false,[],[]); }

  ngOnInit() {

    this.user =this._login.getUSer();
    console.log(this.user);
  }

}
