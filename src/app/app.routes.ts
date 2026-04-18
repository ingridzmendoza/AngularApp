import { Routes } from '@angular/router';
import { Saludo } from './saludo/saludo';

import { Pagina1Component } from './pagina1/pagina1';
import { Pagina2Component } from './pagina2/pagina2';
import { Pagina3Component } from './pagina3/pagina3';
import { Pagina4Component } from './pagina4/pagina4';

export const routes: Routes = [
    { path: '', redirectTo: 'pagina1', pathMatch: 'full' },

    { path: 'saludo', component: Saludo },

    { path: 'pagina1', component: Pagina1Component },
    { path: 'pagina2', component: Pagina2Component },
    { path: 'pagina3', component: Pagina3Component },
    { path: 'pagina4', component: Pagina4Component },

    { path: '**', redirectTo: 'pagina1' }
];