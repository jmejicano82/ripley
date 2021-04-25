import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const host = 'localhost:';
const port = '8000';


@Injectable({ providedIn: 'root' })
export class Service {
  constructor(private http: HttpClient) {
  }

  getAllAccouns(): Observable<any> {
    const url = 'http://' + host + port + '/accounts';
    return this.http.get<any>(url);
  }

  getAllBanks(): Observable<any> {
    const url = 'https://bast.dev/api/banks.php';
    return this.http.get<any>(url);
  }

  getAllUsers(): Observable<any> {
    const url = 'http://' + host + port + '/users';
    return this.http.get<any>(url);
  }

  getAllTransfers(): Observable<any> {
    const url = 'http://' + host + port + '/transfers';
    return this.http.get<any>(url);
  }

  setTransferUser(transfer: any) {
    const url = 'http://' + host + port + '/transfer';
    return this.http.post(url, transfer);
  }

  setUser(user: any) {
    const url = 'http://' + host + port + '/user';
    return this.http.post(url, user);
  }

 /*
  getRoles() {
    const url = 'http://' + cons.backend + cons.api + `/roles`;
    return this.http.get<Role[]>(url);
  }

  register(user: UserForCreation) {
    const url: string = 'http://' + cons.backend + cons.api + '/user';
    return this.http.post(url, user);
  }

  edit(user: UserForCreation) {
    const url: string = 'http://' + cons.backend + cons.api + '/user';
    return this.http.put(url, user);
  }

  profile(user: UserForCreation) {
    const url: string = 'http://' + cons.backend + cons.api + '/profile';
    return this.http.post(url, user);
  }

  delete(user: User) {
    return this.http.delete<UserApiResponse>('http://' + cons.backend + cons.api + `/user/` + user.id);
  }
*/
}
