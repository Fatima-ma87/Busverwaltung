import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BusverwaltungService {

  constructor(private http:HttpClient) { }

    addbus(Bus:any){
      return this.http.post('http://localhost:4200/Bus/ubersicht/addbus', Bus);
    }

    ueubersicht(){
      return this.http.get('http://localhost:4200/Bus/ubersicht');
    }
}
