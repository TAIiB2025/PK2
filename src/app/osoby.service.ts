import { Injectable } from '@angular/core';
import { Osoba } from '../models/osoba.class';
import { Observable, delay, of } from 'rxjs';
import { OsobaForm } from '../models/osoba-form';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OsobyService {
  // private osoby: Osoba[] = [
  //   new Osoba("Jan", "Kowalski", 33, false),
  //   new Osoba("Anna", "Nowak", 44, false),
  //   new Osoba("Adam", "XXX", 13, true),
  //   new Osoba("Ewelina", "YYY", 41, false),
  // ];

  private readonly baseURL = 'http://localhost:5120/api/Osoby';
  
  constructor(private httpClient: HttpClient) { }

  public get(): Observable<Osoba[]> {
    // return of(this.osoby);
    return this.httpClient.get<Osoba[]>(this.baseURL);
  }

  public getById(id: number): Observable<Osoba> {
    // const osoba = this.osoby.find(o => o.id === id);
    // if(osoba == null) {
    //   throw new Error("nie znaleziono osoby o id = " + id);
    // }
    // return of(osoba).pipe(delay(1000));

    const url = `${this.baseURL}/${id}`;
    return this.httpClient.get<Osoba>(url);
  }

  public post(body: OsobaForm): Observable<void> {
    // const nowaOsoba = new Osoba(body.imie, body.nazwisko, body.wiek, false);
    // this.osoby.push(nowaOsoba);
    // return of(undefined);
    return this.httpClient.post<void>(this.baseURL, body);
  }
}
