import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './components/cities/cities.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';

import { BasicAuthHtppInterceptorService } from './shared/BasicAuthHtppInterceptor/basic-auth-htpp-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{  
    provide: HTTP_INTERCEPTORS,
    useClass: BasicAuthHtppInterceptorService,
    multi: true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
