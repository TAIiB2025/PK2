import { Component, EventEmitter, Input, OnDestroy, Output, inject } from '@angular/core';
import { Osoba } from '../../models/osoba.class';
import { CommonModule } from '@angular/common';
import { PodswietlenieDirective } from '../podswietlenie.directive';
import { ZaznaczoneOsobyService } from '../zaznaczone-osoby.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-osoba',
  imports: [CommonModule, PodswietlenieDirective, RouterLink],
  templateUrl: './osoba.component.html',
  styleUrl: './osoba.component.css'
})
export class OsobaComponent implements OnDestroy {
  @Input() osoba!: Osoba;
  @Output() zmianaWyroznienia = new EventEmitter<Osoba>();

  czyNajechany = false;
  czyZaznaczona = false;

  private readonly service = inject(ZaznaczoneOsobyService);
  private readonly subs = new Subscription();

  constructor() {
    const odznaczenie$ = this.service.odznaczenieObservable;
    const sub = odznaczenie$.subscribe(x => {
      if(x === this.osoba) {
        this.czyZaznaczona = false;
      }
    });
    this.subs.add(sub);
    //this.osoba = new Osoba("Jan", "Kowalski", 33, false);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onZmianaWyroznieniaClick(): void {
    this.zmianaWyroznienia.emit(this.osoba);
    //this.osoba.czyWyrozniona = !this.osoba.czyWyrozniona;
  }

  zaznacz(): void {
    this.czyZaznaczona = true;
    this.service.zaznacz(this.osoba);
  }

  odznacz(): void {
    this.czyZaznaczona = false;
    this.service.odznacz(this.osoba);
  }
}
