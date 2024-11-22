import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';
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
@Output()cancel = new EventEmitter<void>();//void means nothing will be bubbled up to the parent
@Output() add = new EventEmitter<NewTask>();
  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    this.add.emit({
      title: this.enteredTitle, 
      summary: this.enteredSummary, 
      dueDate: this.enteredDate
    });
  }
}
