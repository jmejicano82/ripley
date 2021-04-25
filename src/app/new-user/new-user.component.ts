import { Component, OnInit } from '@angular/core';
import { Service } from '../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm!: FormGroup;

  done = false;

  accounts = [{
    id: Number,
    name: String
  }];

  banks = [{
    id: Number,
    name: String
  }];

  banksSelected = {
    id: null,
    name: null
  };

  constructor(
    private servicio: Service,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      rut: [null, Validators.required],
      email : [null, Validators.required],
      number : [null, Validators.required],
      bank_name : [null,  Validators.required],
      account_type_id: [null, Validators.required],
      account_number: [null, [Validators.required, Validators.min(1)]],
    }); 

    this.servicio.getAllAccouns()
    .subscribe(
      (response) => {  
        this.accounts = response;
      }
    );

    this.servicio.getAllBanks()
    .subscribe(
      (response) => {  
        console.log(response);
        this.banks = response.banks;
      }
    );

  }

  getUserFromForm(form: FormGroup) {

    const user = {
      name: form.get('name')!.value,
      rut: form.get('rut')!.value,
      email: form.get('email')!.value,
      number: form.get('number')!.value,
      bank_name: form.get('bank_name')!.value,
      account_type_id: form.get('account_type_id')!.value,
      account_number: form.get('account_number')!.value,
    };
    return user;
  }

  onSubmit() {
    const user = this.getUserFromForm(this.userForm);
    console.log(user);
    this.servicio.setUser(user)
    .subscribe(
      (response) => {  
        if(response){
          this.done = true;
          this.userForm.setValue({
            name: null, 
            rut: null, 
            email: null, 
            number: null, 
            bank_name: null, 
            account_type_id: null,
            account_number: null
          });
        }
        console.log(response);
      }
    );
  }

}
