import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  users: User[];

  getUsers(): void {
    this.userService.getUsers().subscribe(userList => this.users = userList);
  }

  delete(user: User): void {
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user).subscribe();
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

}
