import { Component, OnInit } from '@angular/core';
import { UserService, GlobalService } from '../../services/services.index';
import { User } from '../../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  account: User = new User();
  userSub: Subscription;
  constructor(
    public _userService: UserService,
    private global: GlobalService
  ) { }

  ngOnInit() {
    this.userSub = this.global.user.subscribe(
      me => this.account = me
    );
  }

  logout() {
    this._userService.logout();
  }

}
