import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Osoba } from '../../models/osoba.class';
import { ZaznaczoneOsobyService } from '../zaznaczone-osoby.service';
import { Observable, Subscription } from 'rxjs';
import { ParserOsobyPipe } from '../parser-osoby.pipe';

@Component({
  selector: 'app-zaznaczone-osoby',
  imports: [CommonModule, ParserOsobyPipe],
  templateUrl: './zaznaczone-osoby.component.html',
  styleUrl: './zaznaczone-osoby.component.css'
})
export class ZaznaczoneOsobyComponent implements OnInit, OnDestroy {
  // zaznaczoneOsoby: Osoba[] = [];

  private readonly service = inject(ZaznaczoneOsobyService);
  private readonly sub: Subscription = new Subscription();

  private static intervalID = 1;
  private intervalRef: any;

  zaznaczoneOsoby$: Observable<Osoba[]> = this.service.zaznaczoneOsobyObservable;

  constructor() {
    // const zaznaczoneOsoby$ = this.service.zaznaczoneOsobyObservable;
    // const sub = zaznaczoneOsoby$.subscribe(x => {
    //   console.log('odebrano nową listę osób');
    //   this.zaznaczoneOsoby = x;
    // });

    // // this.sub = sub;
    // this.sub.add(sub);

    const id = ZaznaczoneOsobyComponent.intervalID++;
    this.intervalRef = setInterval(() => console.log('intreval ', id), 300);
  }

  ngOnInit(): void {
    console.log('init');
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.sub.unsubscribe();
    clearInterval(this.intervalRef);
  }

  odznacz(osoba: Osoba): void {
    this.service.odznacz(osoba);
  }
}
