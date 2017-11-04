import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PatternComponent } from "./pattern/pattern.component";
import { PaletteComponent } from "./pattern/palette.component";
import { RibbonComponent } from "./pattern/ribbon.component";

@NgModule({
  declarations: [
    AppComponent,
    PatternComponent,
    PaletteComponent,
    RibbonComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
