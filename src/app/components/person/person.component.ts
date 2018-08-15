import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Person } from '../../model/Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input("person") data:Person;
  @Output() personDeleted=new EventEmitter<Person>();
  @Output() updatePersonEvent = new EventEmitter<Person>();

  constructor() { 
   }

  ngOnInit() {
  }

  deletePerson() {
    this.personDeleted.emit(this.data);
  }

  updatePerson(name,age,address) {
    console.log("clicked the event")
    this.updatePersonEvent.emit(new Person(this.data.id,name,age,address))
  }


}
