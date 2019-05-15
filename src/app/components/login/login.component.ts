import { Component, OnInit } from '@angular/core';
import {UserService, GlobalService} from '../../services/services.index';
import {throwError} from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: FormGroup;
  loading: boolean;
  constructor(
    private fb: FormBuilder,
    public _userService: UserService,
    private global: GlobalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loading = false;
    this.userLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    if(localStorage.getItem('token') && localStorage.getItem('account')){
      this.global.me = JSON.parse(localStorage.getItem('account'));
      console.log("if");
      this.router.navigate(['/']);
    }
  }

  onLogin() {
    this.loading = true;
    this._userService.loginUser(this.userLogin.value).subscribe(
      response => {
        this.loading = false;
        localStorage.setItem('token', response['token']);
        this.global.me = response['user'];
        this.router.navigate(['/']);
      },
      error =>{
        this.loading = false;
        console.log('error', error);
      }
    );
  }

  refreshToken() {
    this._userService.refreshToken();
  }
 
  logout() {
    this._userService.logout();
  }

}
