// import { Observable } from 'rxjs/Rx';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database/';
import { User } from './../models/users';

@Injectable()
export class UsersService implements OnInit {
  usersRef: AngularFireList<any>;
  users: Observable<any>;
  user: Observable<any>;

  constructor(private firebaseDB: AngularFireDatabase) {
    this.usersRef = this.firebaseDB.list('users');
    this.users = this.usersRef.snapshotChanges().map( changes => {
      return changes.map( c => ({key: c.payload.key, ...c.payload.val()}));
    });
  }

  ngOnInit(): void {}

  getUsers() {
    return this.users;
  }
}



