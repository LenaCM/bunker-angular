import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//services
import { UserService, GlobalService } from './services/services.index';

//ruotes
import { APP_ROUTING } from './app.routes';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainModule } from './components/main/main.module';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTING,
    MainModule
  ],
  providers: [
    UserService, 
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
