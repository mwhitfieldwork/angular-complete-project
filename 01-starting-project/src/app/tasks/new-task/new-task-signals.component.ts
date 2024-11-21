import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
enteredTitle = signal(''); //two way binding with signals
enteredSummary= signal('');
enteredDate= signal('');
@Output()cancel = new EventEmitter<void>();//void means nothing will be bubbled up to the parent

  onCancel(){
    this.cancel.emit();
  }
}
