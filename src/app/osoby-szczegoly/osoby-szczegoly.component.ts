import { Component, inject } from '@angular/core';
import { Osoba } from '../../models/osoba.class';
import { OsobyService } from '../osoby.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-osoby-szczegoly',
  imports: [RouterLink],
  templateUrl: './osoby-szczegoly.component.html',
  styleUrl: './osoby-szczegoly.component.css'
})
export class OsobySzczegolyComponent {
  osoba?: Osoba;
  private readonly osobyService = inject(OsobyService);
  private readonly activatedRoute = inject(ActivatedRoute);

  constructor() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id == null) {
      id = '0';
    }
    
    this.osobyService.getById(+id).subscribe(res => {
      this.osoba = res;
    });
  }
}
