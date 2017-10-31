import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PatternComponent } from "./pattern/pattern.component";
import { PaletteComponent } from "./pattern/palette.component";
import { StrapComponent } from "./pattern/strap.component";

@NgModule({
  declarations: [
    AppComponent,
    PatternComponent,
    PaletteComponent,
    StrapComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
