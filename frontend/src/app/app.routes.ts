import { Routes } from '@angular/router';
import { MecanicoComponent } from './view/mecanico/mecanico.component/mecanico.component';

export const routes: Routes = [
    {path: '', redirectTo: 'user', pathMatch:'full'},
    {path: 'userMecanico', component: MecanicoComponent},
];
