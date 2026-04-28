import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { Register } from './components/register/register';

export const routes: Routes = [
    {path:'',component:Login},
  
      { path: 'login', redirectTo: '', pathMatch: 'full' },
          {path:'dashboard',component:Dashboard},
              {path:'register',component:Register},
  { path: '**', redirectTo: '' }
];
