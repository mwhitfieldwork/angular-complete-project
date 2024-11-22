import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './new-task/new-task.model';

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
//@Input() name:string | undefined; //can also use a union as weel

tasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
]

get selectedUserTasks() {
  return this.tasks.filter((task) => task.userId === this.userId);
}

onCompleteTask(id:string){
  this.tasks = this.tasks.filter((task) => task.id !== id);//deleting tasks of a flat data set
}

onStartNewTask(){
  this.isAddingTask = true;
}
onCancelAddTask(){
  this.isAddingTask = false;
}

onAddTask(addedTask:NewTask){
  this.tasks.unshift({
    id: 't' + Math.random().toString(),
    userId: this.userId,
    title: addedTask.title,
    summary: addedTask.summary,
    dueDate: addedTask.dueDate
  })
  this.isAddingTask = false;
}

}