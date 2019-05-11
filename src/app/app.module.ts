import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//services
import { UserService } from './services/user.service';

//ruotes
import { APP_ROUTING } from './app.routes';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
