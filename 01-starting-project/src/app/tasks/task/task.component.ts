// import{ Component, EventEmitter, inject, Input, Output } from '@angular/core'; -- uncommet for use of @Output
import{ Component, inject, Input } from '@angular/core';
import { Task } from './Tasks.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required: true})task!:Task; //we will always have a task
//@Output() complete = new EventEmitter<string>();
private taskService = inject(TasksService);

onCompleteTask(){
  this.taskService.removeTasks(this.task.id);
}
}
