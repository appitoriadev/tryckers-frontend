import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { Icon } from '../../interfaces/icon';

@Component({
  selector: 'app-footer',
  imports: [ButtonModule, DividerModule, TooltipModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  socialNetworks: Icon[] = [
    {
      label: 'Facebook',
      icon: 'pi pi-facebook',
      route: 'https://facebook.com',
    },
    {
      label: 'Instagram',
      icon: 'pi pi-instagram',
      route: 'https://instagram.com',
    },
    {
      label: 'Github',
      icon: 'pi pi-github',
      route: 'https://github.com',
    },
    {
      label: 'Twitter',
      icon: 'pi pi-twitter',
      route: 'https://twitter.com',
    },
  ];

  openSocialLink(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
