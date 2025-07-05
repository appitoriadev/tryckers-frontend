import { Component } from '@angular/core';
import { Icon } from '../../interfaces/icon';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  socialNetworks: Icon[] = [
    {
      label: 'Facebook',
      icon: 'fa-brands fa-facebook',
      route: ''
    },
    {
      label: 'Instragam',
      icon: 'fa-brands fa-instagram',
      route: ''
    },
    {
      label: 'Github',
      icon: 'fa-brands fa-github',
      route: ''
    },
    {
      label: 'X',
      icon: 'fa-brands fa-x-twitter',
      route: ''
    },

  ]
 }
