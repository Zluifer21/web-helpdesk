import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
 declare var $ :any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   menus:any[]=[];

  constructor(private router: Router) { }

  ngOnInit() {
    $(".button-collapse").sideNav({
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true// Choose whether you can drag to open on touch screens
      });
    this.menus = [
      {
        name: 'Dashboard',
        state: ['home'],
        isActive: true,
        permissions: '*',
        icon: 'dashboard',
        iconM: 'dashboard'
      },
      {
        name: 'Tickets',
        state: ['tickets', 'ticketsdetail', 'ticketsnew'],
        isActive: false,
        permissions: '*',
        //icon: 'assignment',
        iconM: 'assignment'
      },
      {
        name: 'Reportes',
        state: ['reports'],
        isActive: false,
        permissions: 'Superuser, Director, Lider de Area',
        //icon: 'assessment',
        iconM: 'assessment'
      },
      {
        name: 'Personas',
        state: ['persons'],
        isActive: false,
        permissions: 'Superuser, Recepcionista, Director',
        //icon: 'supervisor_account',
        iconM: 'supervisor_account'
      }
    ]
  }
Logout()
  { localStorage.clear();
    this.router.navigate(['/login']);
  }
  updateMenu(menu){
     this.router.navigate(['/'+menu.state[0]]);
     //console.log(menu.state[0]);
   }
}
