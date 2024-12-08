import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem, MessageService } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [PanelMenuModule, CommonModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [MessageService],
})
export class NavbarComponent {
   items!: MenuItem[];

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Create New',
                items: [
                    {
                        label: 'Incident',
                        icon: 'pi pi-objects-column',
                        // route: '/Incident'
                    },
                    {
                        label: 'Requests',
                        icon: 'pi pi-file-edit',
                        // route: '/configuration'
                    },
                    {
                      label: 'Knowledge',
                      icon: 'pi pi-file',
                      // route: '/configuration'
                  },
                  {
                    label: 'Asset',
                    icon: 'pi pi-chart-line',
                    route: '/createAsset'
                  },{
                    label: 'Contract',
                    icon: 'pi pi-file',
                    // route: '/configuration'
                  }
                ]
            },
            {
                label: 'Console',
                items: [
                    {
                      label: 'Asset',
                      icon: 'pi pi-chart-line',
                      route: '/assetConsole'
                       
                    },
                    {
                       
                        label: 'Contract',
                        icon: 'pi pi-file',
                    }
                ]
            }
        ];
    }


}
