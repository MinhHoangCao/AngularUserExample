import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id !== 0) {
      this.userService.getUser(id)
        .subscribe(user => this.user = user);
    } else {
      this.user = new User();
      this.user.id = 0;
      this.user.name = '';
    }
  }

  save(): void {
    if (this.user.id === 0) {
      this.userService.createUser(this.user)
        .subscribe(() => this.goBack());
    } else {
      this.userService.updateUser(this.user)
        .subscribe(() => this.goBack());
    }
  }

  goBack() {
    this.location.back();
  }

  constructor(private route: ActivatedRoute, private userService: UserService,
              private location: Location) { }

  ngOnInit() {
    this.getUser();
  }

}
