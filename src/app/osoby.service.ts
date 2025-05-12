import { Injectable } from '@angular/core';
import { Osoba } from '../models/osoba.class';
import { Observable, delay, of } from 'rxjs';
import { OsobaForm } from '../models/osoba-form';

@Injectable({
  providedIn: 'root'
})
export class OsobyService {
  private osoby: Osoba[] = [
    new Osoba("Jan", "Kowalski", 33, false),
    new Osoba("Anna", "Nowak", 44, false),
    new Osoba("Adam", "XXX", 13, true),
    new Osoba("Ewelina", "YYY", 41, false),
  ];
  
  constructor() { }

  public get(): Observable<Osoba[]> {
    return of(this.osoby);
  }

  public getById(id: number): Observable<Osoba> {
    const osoba = this.osoby.find(o => o.id === id);
    if(osoba == null) {
      throw new Error("nie znaleziono osoby o id = " + id);
    }
    return of(osoba).pipe(delay(1000));
  }

  public post(body: OsobaForm): Observable<void> {
    const nowaOsoba = new Osoba(body.imie, body.nazwisko, body.wiek, false);
    this.osoby.push(nowaOsoba);
    return of(undefined);
  }
}
