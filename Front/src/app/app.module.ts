import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheMenuComponent } from './presentation/components/the-sidebar/the-menu/the-menu.component';
import { TheSidebarComponent } from './presentation/components/the-sidebar/the-sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './core/guards/auth.guard';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    TheSidebarComponent,
    TheMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
