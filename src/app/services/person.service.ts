import { Injectable } from '@angular/core';
import { Person } from '../model/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public persons:Person[];

  constructor() { 
    this.persons = [
      new Person(1,"mayur",16,"Fremont"),
      new Person(2,"Krish",14,"uganda") 
    ]
  }

  addPerson(person) {
    if(person) {
      console.log(JSON.stringify(person))
      this.persons.unshift(person)
    }
  }

  deletePerson(person) {
    let indexToDelete = this.persons.indexOf(person);
    if(indexToDelete!== -1) {
      this.persons.splice(indexToDelete,1);
    }
  }

  updatePerson(person) {
    console.log("update service invoked")
    this.persons.forEach(p=>{
      if(p.id === person.id) {
        p.name=person.name;
        p.age=person.age;
        p.address=person.address;
        p.toggle();
      }
    })
  }
}
