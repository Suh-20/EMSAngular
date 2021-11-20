import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { VenueComponent } from './venue/venue.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventEditComponent } from './eventedit/eventedit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { VenuelistComponent } from './venuelist/venuelist.component';
import { VenueEditComponent } from './venue-edit/venue-edit.component';
import { CustomernexthomeComponent } from './customernexthome/customernexthome.component';
import { CustbookingComponent } from './custbooking/custbooking.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'adminpage', component: AdminpageComponent },
  { path: 'venue', component: VenueComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'customerhome', component: CustomerhomeComponent },
  { path: 'eventdetails', component: EventdetailsComponent },
  { path: 'evelist', component: EventlistComponent },
  { path: 'eventedit', component: EventEditComponent },
  { path: 'editEve/:eid', component: EventEditComponent },
  { path: '**', component: PagenotfoundComponent },
  { path: 'venlist', component: VenuelistComponent },
  { path: 'venue-edit', component: VenueEditComponent },
  { path: 'customernexthome', component: CustomernexthomeComponent }, 
  { path: 'custbooking', component: CustbookingComponent }
  
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
