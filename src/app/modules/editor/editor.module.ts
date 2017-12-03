import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**/
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/**/

import { EditorComponent } from './components/editor/editor.component';
import { PatternComponent } from './components/pattern/pattern.component';
import { PaletteComponent } from './components/palette//palette.component';
import { RibbonComponent } from './components/ribbon/ribbon.component';
import { EditorService } from './editor.service'
import { NgModel } from '@angular/forms/src/directives/ng_model';

@NgModule({
  declarations: [
    EditorComponent,
    PatternComponent,
    PaletteComponent,
    RibbonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EditorComponent
  ],
  providers: [EditorService],
})
export class EditorModule { }
