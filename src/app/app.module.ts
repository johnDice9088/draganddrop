import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocviewerComponent } from './docviewer/docviewer.component';
// import { NewapiComponent } from './newapi/newapi.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
@NgModule({
  declarations: [
    AppComponent,
    DocviewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxDocViewerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

