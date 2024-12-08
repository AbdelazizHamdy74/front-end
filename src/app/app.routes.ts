import { Routes } from '@angular/router';

import { CreateRequestComponent } from './pages/create-request/create-request.component';
import { AssetConsoleComponent } from './asset-console/asset-console.component';
import { AssetUpdateComponent } from './asset-update/asset-update.component';
import { CreateAssetComponent } from './components/asset-form/asset-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/createAsset', pathMatch: 'full' },
  { path: 'createAsset', component: CreateRequestComponent },
  { path: 'assetConsole', component: AssetConsoleComponent },
  { path: 'update/:id', component: AssetUpdateComponent },
  { path: 'create', component: CreateAssetComponent },
];
