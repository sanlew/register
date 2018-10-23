import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../../models/person'
import { Address } from '../../models/address'
import { Register } from '../../models/register'


@Injectable({
  providedIn: 'root',
})

export class RegisterService {

  private baseUrl = 'http://localhost:8080/register';
  
  constructor(private http:HttpClient) { }


    createNewUser(register:Register) {
        return this.http.post(`${this.baseUrl}` + `/newPerson`, register);
    }
 
}
