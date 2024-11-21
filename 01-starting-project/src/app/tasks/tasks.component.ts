import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input() name?:string; // it might not be initiallized yet
//@Input() name:string | undefined; //can also use a union as weel

}
