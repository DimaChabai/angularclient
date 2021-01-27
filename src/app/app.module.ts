import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ParticipantListComponent} from './participant-list/participant-list.component';
import {AppRoutingModule} from './app-routing.module';
import {ParticipantServiceService} from './participant-service.service';
import {HttpClientModule} from '@angular/common/http';
import {ParticipantVerificationListComponent} from './participant-verification-list/participant-verification-list.component';
import {CreatePlaceComponent} from './create-place/create-place.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PlaceServiceService} from './place-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ParticipantListComponent,
    ParticipantVerificationListComponent,
    CreatePlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ParticipantServiceService,
    PlaceServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
