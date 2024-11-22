import { Component, Input, inject } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required: true}) userId!:string;// we sue required true because we KNOW we will get values for these properties
@Input({required: true}) name!:string; // it might not be initiallized yet
@Input() isAddingTask = false;
//@Input() name:string | undefined; //can also use a union as well
private taskService = inject(TasksService);

get selectedUserTasks() {
  return this.taskService.getUserTasks(this.userId);
}

onStartNewTask(){
  this.isAddingTask = true;
}
onCloseAddedTask(){
  this.isAddingTask = false;
}

onAddTask(addedTask:NewTask){
  this.isAddingTask = false;
}

}