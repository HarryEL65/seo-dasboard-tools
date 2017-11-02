import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../../services/users.service';
import { User } from '../../../models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[];
  error: any[];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe( users => this.users = users,
    err => {
      // error handling
      this.error = err.code + err.message;

    } );
  }


}
