import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './Tasks.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required: true})task!:Task; //we will always have a task
@Output() complete = new EventEmitter<string>();


onCompleteTask(){
  this.complete.emit(this.task.id);
}
}
