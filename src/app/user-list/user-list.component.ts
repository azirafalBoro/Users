import { Component, OnInit } from '@angular/core';
import { ServerJsonService } from '../services/server-json.service';
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
  }

  goForDetails(id: any) {
    this.router.navigate(['details/' + id]);
  }

  trackByMethod(index: number, el: User): number {
    return el.id;
  }

}
