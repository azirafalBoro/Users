import { Component, OnInit } from '@angular/core';
import {ServerJsonService} from '../server-json.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/index';
import {User} from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private user$: Observable<User[]>;
  private userPosts$: Observable<any[]>;
  selectedUser: string;

  constructor(private usersService: ServerJsonService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.selectedUser = this.route.snapshot.params.id;
    this.user$ = this.usersService.getUserId(this.selectedUser);
    this.userPosts$ = this.usersService.getUserPosts(this.selectedUser);
  }

}
