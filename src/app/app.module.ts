import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PatternComponent } from './pattern/pattern.component';
import { PaletteComponent } from './pattern/palette.component';
import { RibbonComponent } from './pattern/ribbon.component';
import { PatternSharedDataService } from './pattern/pattern.shareddata.service'

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
  providers: [PatternSharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
