import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { OwlComponent } from './owl/owl.component';
import { SnowflakesComponent } from './snowflakes/snowflakes.component';
import { WichtelComponent } from './wichtel/wichtel.component';

@NgModule({
  declarations: [
    AppComponent,
    OwlComponent,
    SnowflakesComponent,
    WichtelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
