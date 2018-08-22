import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutService } from './models/workout.service';
import { WorkoutRoutingModule } from './workout-routing/workout-routing.module';
import { WorkoutDetailsComponent } from './workout-details/workout-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutListComponent,
    WorkoutDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    WorkoutRoutingModule
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
