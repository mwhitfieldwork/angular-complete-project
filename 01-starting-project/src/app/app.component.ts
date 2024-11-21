import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from '../../src/app/dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
//import { NgFor } from '@angular/common';
//import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent], //add NgIf and Ngfor to thhe imports array
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?:string;


  get selectedUser(){
    return this.users.find( x => x.id === this.selectedUserId);// the bang is added because typescript doesnt know if it was for sure find a user  in the find
  }

  onSelectUser(id: any) {
    this.selectedUserId = id;
  }
}
