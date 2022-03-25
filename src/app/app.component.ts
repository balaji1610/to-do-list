import { Component } from '@angular/core';
// import { NEVER } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /* An empty array that is responsible
	to add a division */
 items = Array();

  /* A two-way binding performed which
	pushes text on division */

  newTask:any

  /* When input is empty, it will
	not create a new division */
   addToList() {
    if (this.newTask == '') {
    } else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }

  /* This function takes to input the
	task, that has to be deleted*/
  public deleteTask(index: any) {
    this.items.splice(index, 1);
  }
}
