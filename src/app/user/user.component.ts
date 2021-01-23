import { Component, OnInit } from '@angular/core';
import {ServerJsonService} from '../services/server-json.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/index';
import {User} from '../models/user';
import {Post} from '../models/post';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private user$: Observable<User>;
  private userPosts$: Observable<Post[]>;
  selectedUser: string;
  public radioData: any;

  constructor(private usersService: ServerJsonService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.selectedUser = this.route.snapshot.params.id;
    this.user$ = this.usersService.getUserId(this.selectedUser);
    this.userPosts$ = this.usersService.getUserPosts(this.selectedUser);
    this.radioData = 'show';
  }

  isShowButtonSelected(): boolean {
    return this.radioData === 'show';
  }

  goToMain() {
    this.router.navigateByUrl('/');
  }
}
