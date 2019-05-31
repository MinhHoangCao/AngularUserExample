import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-ng-login-google',
  templateUrl: './ng-login-google.component.html',
  styleUrls: ['./ng-login-google.component.css']
})
export class NgLoginGoogleComponent implements OnInit {

  user: User;
  result: string;
  login(): void {
    this.userService.loginRequest(this.user).subscribe(result => this.result = result);
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
   this.user = new User();
  }

}
