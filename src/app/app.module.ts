import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FileUploadModule} from 'primeng/fileupload';
//routes
import {APP_ROUTING} from './app.routes';
//components
import { AppComponent } from './app.component';
import {LoginComponent} from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PersonsComponent } from './components/persons/persons.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReportsComponent } from './components/reports/reports.component';
import { DuedateComponent } from './components/tickets/duedate/duedate.component';
import { ThreadComponent } from './components/tickets/thread/thread.component';
import { TicketDetailComponent } from './components/tickets/ticket-detail/ticket-detail.component';
import { TicketDetailModalComponent } from './components/tickets/ticket-detail-modal/ticket-detail-modal.component';
import { TicketListComponent } from './components/tickets/ticket-list/ticket-list.component';
import { TicketNewComponent } from './components/tickets/ticket-new/ticket-new.component';
import { TrackingComponent } from './components/tickets/tracking/tracking.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HelpersComponent } from './components/shared/helpers/helpers.component';
import { ViewerComponent } from './components/shared/viewer/viewer.component';
import { ChipComponent } from './components/chip/chip.component';


//services
import {LoginService} from './services/auth/login.service';
import {DashboardService} from './services/dashboard/dashboard.service';
import {UsersService} from './services/users/users.service';
import {SubjectService} from './services/subject/subject.service';
import {PersonService} from './services/person/person.service';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PersonsComponent,
    ProfileComponent,
    ReportsComponent,
    DuedateComponent,
    ThreadComponent,
    TicketDetailComponent,
    TicketDetailModalComponent,
    TicketListComponent,
    TicketNewComponent,
    TrackingComponent,
    NavbarComponent,
    HelpersComponent,
    ViewerComponent,
    ChipComponent,
    DomseguroPipe

  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpClientModule,
    FormsModule,
    AutoCompleteModule,
    FileUploadModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
