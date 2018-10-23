import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { Address } from '../../models/address';
import { Register } from '../../models/register';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ RegisterService ]
})
export class RegisterComponent implements OnInit {

	person: Person = new Person();
    	address: Address = new Address(0);
  	submitted = false;
  	element: HTMLElement;
  	password: string;
	register: Register = new Register();
  
  	
  	
  constructor( private registerService: RegisterService) { }

  ngOnInit() {}

     newPerson(): void {
    	this.person = new Person();
  }
     newAddress(): void {
    	this.address = new Address(0);
  }
     
     newRegister(): void {
         this.register = new Register();
       }
        

  save() {
      this.register.address = this.address;
      this.register.person = this.person;
      this.register.password = this.password;
      
    this.registerService.createNewUser(this.register)
      .subscribe(data => console.log(data), error => console.log(error));
   
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    alert(JSON.stringify(this.register))
    this.newPerson();
    this.newAddress();
    this.newRegister();
  }
  
  nextStep(step){

      this.element = document.getElementsByClassName('stepAnchor')[step-1] as HTMLElement;
      this.element.click();
  }
  
  backStep(step){

      this.element = document.getElementsByClassName('stepAnchor')[step-1] as HTMLElement;
      this.element.click();
  }
 
}

