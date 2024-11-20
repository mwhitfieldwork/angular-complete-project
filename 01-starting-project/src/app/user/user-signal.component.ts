import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user-signal.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
//selectedUser = DUMMY_USERS[randomIndex]; // Change detection method
selectedUser = signal(DUMMY_USERS[randomIndex]); //singal method
imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`)// the new getter accpets a function

/*
get imagePath(){ //used like a property that does a computation that returns the updated prperty
  return `assets/users/${this.selectedUser.avatar}`//signals eleiminates the need for getters
}*/

/*
*  STATE -  data that when changed has an impact on the UI
* 
* Signal - looks for all of the places where the signal is used and updates the UI, when a 
* SPECIFIC signal is changed, NOT the whole component
* 
* Signals can elminate the need for change detection, more efficient way
*/

onSelectUser(){
  const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);// re-use this method to update the user
  this.selectedUser.set(DUMMY_USERS[randomIndex]); //triggers the change throughout UI by updating the signal 
  //this.selectedUser = DUMMY_USERS[randomIndex]; //old way
}

}


/*
* ZONE.JS - if a button is clicked, zone looks at all associated components and re-renders the UI
*/