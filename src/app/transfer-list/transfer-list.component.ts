import { Component, OnInit } from '@angular/core';
import { Service } from '../services';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.css']
})
export class TransferListComponent implements OnInit {

  users = [{
    id: Number,
    name: String,
    rut: String,
    email: String,
    amount: String,
    bank_name: String,
    tipo_cuenta: String,
    fecha: String
  }];

  constructor(
    private servicio: Service
  ) { }

  ngOnInit(): void {

    this.servicio.getAllTransfers()
    .subscribe(
      (response) => {  
        this.users = response;
      }
    );

  }

}
