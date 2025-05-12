import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OsobyService } from '../osoby.service';
import { Osoba } from '../../models/osoba.class';
import { OsobaForm } from '../../models/osoba-form';

@Component({
  selector: 'app-osoby-formularz',
  imports: [FormsModule, CommonModule],
  templateUrl: './osoby-formularz.component.html',
  styleUrl: './osoby-formularz.component.css'
})
export class OsobyFormularzComponent {
  imie = 'Imię';
  nazwisko = 'Nazwisko';
  wiek = 18;

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly osobyService = inject(OsobyService);
  private readonly router = inject(Router);

  constructor() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id != null) {
      this.osobyService.getById(+id).subscribe(res => {
        this.imie = res.imie;
        this.nazwisko = res.nazwisko;
        this.wiek = res.wiek;
      })
    }
  }

  onSubmit(event: NgForm): void {
    console.log(event.form.value);
    console.log('imię', this.imie);
    console.log('nazwisko', this.nazwisko);
    console.log('wiek', this.wiek);

    console.log('Czy poprawnie wypełniony: ', event.form.valid);
    console.log('Czy błędnie wypełniony: ', event.form.invalid);

    const osobaForm: OsobaForm = {
      imie: event.form.value['imie'],
      nazwisko: event.form.value['nazwisko'],
      wiek: event.form.value['wiek'],
    }

    this.osobyService.post(osobaForm).subscribe(() => {
      this.router.navigate(['/osoby']);
    });
  }

  onAnuluj(): void {
    this.imie = 'Imię';
    this.nazwisko = 'Nazwisko';
    this.wiek = 18;
  }

  onWiekChange(event: number): void {
    console.log('Zmiana wieku na ' + event);
    if(event > 200) {
      this.wiek = 18;
    }
  }
}
