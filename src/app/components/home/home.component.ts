import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/auth/login.service';
import {ActivatedRoute,Router} from '@angular/router';
import {DashboardService} from '../../services/dashboard/dashboard.service';
import {User} from'../../models/user';
import {Dashboard} from '../../models/dashboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public user: User;
public dashboard:Dashboard;
  constructor(private _login:LoginService,private router: Router,private _dashboard:DashboardService)
  {
      this.dashboard= new Dashboard(0,0,0,0,0,0);
      this.user =this._login.getUSer();
  }

    ngOnInit()
    {
    if(this.user==null){this.router.navigate(['/login']);}
    if (this.user.roles[0].pivot.role_id==2)
        {this._dashboard.getDashboard().subscribe(res=>{this.dashboard=res;},err=>{console.log(<any>err.mensaje);})}
    else
        {this._dashboard.getmyDashboard().subscribe(res=>{this.dashboard=res;},err=>{console.log(<any>err.mensaje);})}
    }

}
