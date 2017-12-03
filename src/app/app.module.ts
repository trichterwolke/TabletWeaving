import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PatternComponent } from './modules/editor/components/pattern/pattern.component';
import { PaletteComponent } from './modules/editor/components/palette//palette.component';
import { RibbonComponent } from './modules/editor/components/ribbon/ribbon.component';
import { EditorService } from './modules/editor/editor.service'

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
  providers: [EditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
