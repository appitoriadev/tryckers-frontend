import { Menubar } from 'primeng/menubar';
import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [Menubar,BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule, ButtonModule, RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  authService = inject(AuthService);


  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Tryckers',
                icon: 'pi pi-home',
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                badge: '3',
                items: [
                    {
                        label: 'Core',
                        icon: 'pi pi-bolt',
                        shortcut: '⌘+S',
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server',
                        shortcut: '⌘+B',
                    },
                    {
                        separator: true,
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil',
                        shortcut: '⌘+U',
                    },
                ],
            },
        ];
    }
 }
