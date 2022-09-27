import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class BusverwaltungService{
  constructor(private http:HttpClient) { }

  addbus(Busverwaltung:any){
return this.http.post('http://localhost:8080/endpoint', Busverwaltung);
  }
}

describe('BusverwaltungService', () => {
  let service: BusverwaltungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusverwaltungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
