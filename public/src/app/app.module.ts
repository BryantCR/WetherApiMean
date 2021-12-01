import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpService } from './wetherapi/http.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WetherapiComponent } from './wetherapi/wetherapi.component';
import { FormsModule } from '@angular/forms';
import { SeattleCComponent } from './seattle-c/seattle-c.component';
import { SanjoseCComponent } from './sanjose-c/sanjose-c.component';
import { BurbankCComponent } from './burbank-c/burbank-c.component';
import { WashingtonCComponent } from './washington-c/washington-c.component';
import { ChicagoCComponent } from './chicago-c/chicago-c.component';
import { DallasCComponent } from './dallas-c/dallas-c.component';

@NgModule({
  declarations: [
    AppComponent,
    WetherapiComponent,
    SeattleCComponent,
    SanjoseCComponent,
    BurbankCComponent,
    WashingtonCComponent,
    ChicagoCComponent,
    DallasCComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
