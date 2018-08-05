import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/auth/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {TicketListComponent} from './components/tickets/ticket-list/ticket-list.component';
import {ProfileComponent} from './components/profile/profile.component';
import {TicketNewComponent} from './components/tickets/ticket-new/ticket-new.component';
import {ChipComponent} from './components/chip/chip.component';
import {PersonsComponent} from './components/persons/persons.component';
import {TicketDetailComponent} from './components/tickets/ticket-detail/ticket-detail.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  {path: 'tickets', component: TicketListComponent},
  {path:'new', component:TicketNewComponent},
  {path:'chip', component:ChipComponent},
  {path:'persons',component:PersonsComponent},
  {path:'ticket-detail/:id',component:TicketDetailComponent},
  {path:'ticket-new',component:TicketNewComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
