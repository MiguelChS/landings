import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MbCardModule, MbButtonModule } from '@am/moebius';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MbCardModule,
    MbButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
