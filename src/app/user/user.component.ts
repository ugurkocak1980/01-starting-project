/*
import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]) 
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
*/

//Input is decorater
//input is a function that takes an object as an argument
import { Component, Input, input, computed, Output, EventEmitter, output, Type} from '@angular/core';
import { OutletContext } from '@angular/router';


// type User = {
//   id: string,
//   avatar: string,
//   name: string
// }

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input() id!:string; 
  // @Input({required: true}) avatar!:string; //with decorator
  // @Input({required: true}) name!:string; // with decorator


  // @Input({required: true}) user!: { 
  //   id: string, 
  //   avatar: string, 
  //   name: string };


  @Input({required: true}) user!: User;

  @Output() select = new EventEmitter<string>();

  // id= input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // signals
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => 
  //   'assets/users/' + this.avatar());

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
    //    this.select.emit(this.id);

  }
   
}