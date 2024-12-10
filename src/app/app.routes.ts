import { Routes } from '@angular/router';

import { CreateRequestComponent } from './pages/create-request/create-request.component';
import { AssetConsoleComponent } from './asset-console/asset-console.component';
import { AssetUpdateComponent } from './asset-update/asset-update.component';
import { CreateAssetComponent } from './components/asset-form/asset-form.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'createAsset', component: CreateRequestComponent, canActivate:[authGuard],data:{roles:["Admin"] }},
  { path: 'assetConsole', component: AssetConsoleComponent,canActivate:[authGuard],data:{roles:["Admin"] }},
  { path: 'update/:id', component: AssetUpdateComponent , canActivate:[authGuard],data:{roles:["Admin","Support"] }},
  { path: 'create', component: CreateAssetComponent },
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignUpComponent },
  {path:'**', redirectTo: 'login'},
];

// { path: '', redirectTo: '/login', pathMatch: 'full' },
//     {path:'createAsset',component:CreateRequestComponent,canActivate:[authGuard],data:{roles:["Admin"]}},
//     {path:'assetConsole',component:AssetConsoleComponent,canActivate:[authGuard],data:{roles:["Support"]}},
//     {path:'signUp',component:SignUpComponent},
//     {path:'login',component:LoginComponent},
//     { path: '**', redirectTo: 'login' },