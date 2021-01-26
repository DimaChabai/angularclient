import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParticipantListComponent} from './participant-list/participant-list.component';
import {ParticipantVerificationListComponent} from './participant-verification-list/participant-verification-list.component';
import {CreatePlaceComponent} from './create-place/create-place.component';

const routes: Routes = [
  {path: 'participant/list', component: ParticipantListComponent},
  {path: 'participant/verification', component: ParticipantVerificationListComponent},
  {path: 'place/create', component: CreatePlaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
