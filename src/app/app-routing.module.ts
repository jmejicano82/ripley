import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { TransferListComponent } from './transfer-list/transfer-list.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  { path: 'new-user', component: NewUserComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'transfer-list', component: TransferListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
