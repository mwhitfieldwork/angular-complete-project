import { Component, EventEmitter, Input, Output,output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './users.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// You can always define a type
 type Users = {
  id: string;
  avatar: string;
  name: string;
}
// you could exort your own type object. Either works fine.

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select= new EventEmitter<string>(); //old way, but you can use generic type to make it stricter
//select = output<string>();// new way

get imagePath(){
  return `assets/users/${this.user.avatar}`;
}

  onSelectUser(){
    this.select.emit(this.user.id);
}

}
