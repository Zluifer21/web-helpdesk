import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {LoginService} from '../../../services/auth/login.service';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: User;
  public mensaje;
  constructor(private _login:LoginService,private router: Router)
    {
      this.user= new User('','','','','',0,false,[],[]);

    }

  ngOnInit()
  {
        let user =this._login.getUSer();
        if (user!=null)this.router.navigate(['/'])

  }

  logIn()
    {
      this._login.login(this.user).subscribe(
        response=>  {
          //Save user in localStorage
          localStorage.setItem("user", JSON.stringify(response.user));
          //Save Token in localStorage
          localStorage.setItem("token", response.token);
          this.router.navigate(['/']);

        },
        error=>
        {
              this.mensaje=error.error.mensaje;
              console.log(error);

        });
        }

}
