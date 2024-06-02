import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: 'bancos',
        loadChildren: () => import('./bancos/bancos.module').then(m => m.BancosModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m=> m.HomeModule)
    },
    {
        path: 'cartoes',
        loadChildren: () => import('./cartoes/cartoes.module').then(m => m.CartoesModule)
    },
    {
        path: 'despesas',
        loadChildren: () => import('./despesas/despesas.module').then(m => m.DespesasModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    }
];


