import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheMenuComponent } from './presentation/components/the-sidebar/the-menu/the-menu.component';
import { TheSidebarComponent } from './presentation/components/the-sidebar/the-sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RequestService } from './core/services/request.service';

@NgModule({
  declarations: [
    AppComponent,
    TheSidebarComponent,
    TheMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
