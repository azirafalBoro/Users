import { Component, OnInit } from '@angular/core';
import { ServerJsonService } from '../server-json.service';
import { Observable } from 'rxjs/index';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private users$: Observable<User[]>;

  constructor(private usersService: ServerJsonService,
              private router: Router) { }

  ngOnInit() {
    this.users$ = this.usersService.getUsers();

    this.users$.subscribe(tmp => console.log(tmp));
  }

  goForDetails(id: any) {
    console.log('id', id);
    this.router.navigate(['/' + id]);
  }

}
