import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Person } from '../../model/Person';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
   
@Output() createPerson = new EventEmitter<Person>();
  constructor() { }

  ngOnInit() {
  }

  addPerson(name:string,age:number,address:string) {
    this.createPerson.emit(new Person((Math.random()*1000+1),name,age,address));    
  }

}
