import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todocomp.component.html',
  styles: [],
  providers : [TodoService]
})
export class TodocompComponent implements OnInit {
  toDoListArray: any[];
  constructor(private toDoService: TodoService) { }

  ngOnInit() {
    let completed = 0;
    let incomplete = 0;
    this.toDoService.getToDoList().snapshotChanges()
    .subscribe(item => {
      this.toDoListArray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.toDoListArray.push(x);
      })
      this.toDoListArray.forEach(element => {
        if(element.isChecked==true){
            completed++;     
        }
        else{
          incomplete++;
        }
      });
      let len=this.toDoListArray.length;
      document.getElementById("comp").innerHTML="Completed: "+completed;
      document.getElementById("incomp").innerHTML="Active: "+incomplete;
      document.getElementById("total").innerHTML="Total: "+len;
      completed=0;
      incomplete=0;
      //sort array isChecked false  -> true
        this.toDoListArray.sort((a,b) => {
          return a.isChecked - b.isChecked;
        })
    });
  }

  onAdd(itemTitle) {
    this.toDoService.addTitle(itemTitle.value);
    itemTitle.value = null;
  }

  alterCheck($key: string,isChecked) {
    this.toDoService.checkOrUnCheckTitle($key,!isChecked);
    console.log(isChecked);
    if(isChecked){
      
    }
  }

  onEdit($key : String, title : string){

    let newval=prompt("Update Task",title);
    if (newval!=null)
      this.toDoService.editTitle(newval,$key);
  }

  onDelete($key : string){
    let val=confirm("Are you sure to delete?");
    if (val)
      this.toDoService.removeTitle($key);
  }

  deleteAll(){
    let val=confirm("Do you wish to delete all tasks?");
    if (val)
    {
      this.toDoService.removeAll();
    }
  }

}