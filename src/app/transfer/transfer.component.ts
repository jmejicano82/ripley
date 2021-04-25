import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from '../services';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  transferForm!: FormGroup;

  users = [{
    id: Number,
    name: String,
    rut: String,
    email: String,
    bank_name: String,
    tipo_cuenta: String
  }];

  done = false;

  userSelected = {
    id: null,
    name: null,
    rut: null,
    email: null,
    bank_name: null,
    tipo_cuenta: null
  };

  constructor(
    private formBuilder: FormBuilder,
    private servicio: Service
  ) { }

  ngOnInit() {

    this.transferForm = this.formBuilder.group({
      user: [null, Validators.required],
      monto: [null, [Validators.required, Validators.min(1)]],
    }); 

    this.servicio.getAllUsers()
    .subscribe(
      (response) => {  
        this.users = response;
      }
    );

  }

  getSelected(user: any){
    
    if(user){
      this.userSelected = user;
    }
  }

  getTransferFromForm(form: FormGroup) {

    const user = {
      user_id: this.userSelected.id,
      amount: form.get('monto')!.value
    };
    return user;
  }

  onSubmit() {
    const transfer = this.getTransferFromForm(this.transferForm);
    this.servicio.setTransferUser(transfer)
    .subscribe(
      (response) => {  
        if(response){
          this.done = true;
          this.transferForm.setValue({user: null, monto: null});
        }
        console.log(response);
      }
    );
  }

  

}
