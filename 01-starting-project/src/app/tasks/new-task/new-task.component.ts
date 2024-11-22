import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
enteredTitle = '';
enteredSummary = '';
enteredDate = '';

@Input({required: true}) userId!:string;
@Output()close = new EventEmitter<void>();//void means nothing will be bubbled up to the parent
private taskService = inject(TasksService);

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.taskService.addTask({
      title: this.enteredTitle, 
      summary: this.enteredSummary, 
      dueDate: this.enteredDate
    },this.userId);
    
    this.close.emit();
  }
}
