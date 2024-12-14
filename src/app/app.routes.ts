import { Routes } from '@angular/router';

import { CreateRequestComponent } from './pages/create-request/create-request.component';
import { AssetConsoleComponent } from './asset-console/asset-console.component';
import { AssetUpdateComponent } from './asset-update/asset-update.component';
import { CreateAssetComponent } from './components/asset-form/asset-form.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { authGuard } from './guards/auth.guard';
import { ListContractsComponent } from './list-contracts/list-contracts.component';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { UpdateContractComponent } from './update-contract/update-contract.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'createAsset',
    component: CreateRequestComponent,
    canActivate: [authGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'assetConsole',
    component: AssetConsoleComponent,
    canActivate: [authGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'update/:id',
    component: AssetUpdateComponent,
    canActivate: [authGuard],
    data: { roles: ['Admin', 'Support'] },
  },
  { path: 'create', component: CreateAssetComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'contracts', component: ListContractsComponent },
  { path: 'contracts/create', component: CreateContractComponent },
  { path: 'contracts/update/:id', component: UpdateContractComponent },
  { path: '**', redirectTo: 'login' },
];

// { path: '', redirectTo: '/login', pathMatch: 'full' },
//     {path:'createAsset',component:CreateRequestComponent,canActivate:[authGuard],data:{roles:["Admin"]}},
//     {path:'assetConsole',component:AssetConsoleComponent,canActivate:[authGuard],data:{roles:["Support"]}},
//     {path:'signUp',component:SignUpComponent},
//     {path:'login',component:LoginComponent},
//     { path: '**', redirectTo: 'login' },
