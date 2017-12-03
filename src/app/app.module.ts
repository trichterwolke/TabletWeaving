import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { EditorModule } from './modules/editor/editor.module';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    EditorModule,
    NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
