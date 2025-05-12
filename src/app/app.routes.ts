import { Routes } from '@angular/router';
import { KlienciComponent } from './klienci/klienci.component';
import { OsobyComponent } from './osoby/osoby.component';
import { FilmyComponent } from './filmy/filmy.component';
import { OsobySzczegolyComponent } from './osoby-szczegoly/osoby-szczegoly.component';
import { OsobyFormularzComponent } from './osoby-formularz/osoby-formularz.component';

export const routes: Routes = [
    { path: 'klienci', component: KlienciComponent },
    { path: 'osoby', children: 
        [
            { path: '', component: OsobyComponent },
            { path: 'form', component: OsobyFormularzComponent },
            { path: ':id', component: OsobySzczegolyComponent },
            { path: ':id/form', component: OsobyFormularzComponent },
        ]
    },
    { path: 'filmy', component: FilmyComponent },
    { path: '', redirectTo: 'osoby', pathMatch: 'full' }
];
