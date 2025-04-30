import { Injectable } from '@angular/core';
import { Osoba } from '../models/osoba.class';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZaznaczoneOsobyService {
  // private zaznaczoneOsoby: Osoba[] = [];

  private readonly zaznaczoneOsobySub = new BehaviorSubject<Osoba[]>([]);
  private readonly odznaczenieSub = new Subject<Osoba>();

  constructor() { }

  get zaznaczoneOsobyObservable(): Observable<Osoba[]> {
    return this.zaznaczoneOsobySub.asObservable();
  }

  get odznaczenieObservable(): Observable<Osoba> {
    return this.odznaczenieSub.asObservable();
  }

  // get getZaznaczoneOsoby(): Osoba[] {
  //   console.log('getter')
  //   return this.zaznaczoneOsoby;
  // }

  zaznacz(osoba: Osoba): void {
    const staraTablica = this.zaznaczoneOsobySub.value;
    staraTablica.push(osoba);
    this.zaznaczoneOsobySub.next(staraTablica);
  }

  odznacz(osoba: Osoba): void {
    const staraTablica = this.zaznaczoneOsobySub.value;
    const nowaTablica = staraTablica.filter(x => x !== osoba);
    this.zaznaczoneOsobySub.next(nowaTablica);
    this.odznaczenieSub.next(osoba);
  }
}
