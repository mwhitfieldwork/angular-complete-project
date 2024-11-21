import { Component, EventEmitter, Input, Output,output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

export interface User {
  id: string;
  avatar: string;
  name: string;
}
// ORR
 export type Users = {
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
//@Input({required:true}) id!:string;
//@Input({required: true}) avatar!:string; //{required true} - tells angluar that the property must be set
//@Input({required: true}) name!:string;// without the required true, the property wont throw an error
@Output() select= new EventEmitter<string>(); //old way, but you can use generic type to make it stricter
//select = output<string>();// new way

get imagePath(){
  return `assets/users/${this.user.avatar}`;
}

  onSelectUser(){
    this.select.emit(this.user.id);
}

}
