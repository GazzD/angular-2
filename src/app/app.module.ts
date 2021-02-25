import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MiniHomeComponent } from './mini-home/mini-home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { TeamsComponent } from './teams/teams.component';
import { FanCardComponent } from './fan-card/fan-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiniHomeComponent,
    ShoppingListComponent,
    TeamsComponent,
    FanCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
