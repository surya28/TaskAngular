import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable()
export class TodoService {
  toDoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getToDoList() {
    this.toDoList = this.firebasedb.list('titles');
    return this.toDoList;
  }

  addTitle(title: string) {
    this.toDoList.push({
      title: title,
      isChecked: false
    });
  }

  editTitle(title: String,$key){
    this.toDoList.update($key,{title}); 
  }

  checkOrUnCheckTitle($key: string, flag: boolean) {
    this.toDoList.update($key, { isChecked: flag });
    console.log(this.toDoList);
  }

  removeTitle($key: string) {
    this.toDoList.remove($key);
  }

  removeAll(){
    this.toDoList.remove();
  }
}