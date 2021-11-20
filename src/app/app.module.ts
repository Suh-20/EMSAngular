import { BrowserModule } from '@angular/platform-browser';


/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { VenueComponent } from './venue/venue.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { VenuelistComponent } from './venuelist/venuelist.component';
import { EventEditComponent } from './eventedit/eventedit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { VenueEditComponent } from './venue-edit/venue-edit.component';
import { CustomernexthomeComponent } from './customernexthome/customernexthome.component';
import { CustbookingComponent } from './custbooking/custbooking.component';





@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    RegisterComponent,
    LogInComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    AdminpageComponent,
    VenueComponent,
    CreateEventComponent,
    CustomerhomeComponent,
    EventdetailsComponent,
    EventlistComponent,
    EventEditComponent,
    PagenotfoundComponent,
    VenuelistComponent,
    VenueEditComponent,
    CustomernexthomeComponent,
    CustbookingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }