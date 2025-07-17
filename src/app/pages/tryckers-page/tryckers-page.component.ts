import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-tryckers-page',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './tryckers-page.component.html',
})
export default class TryckersPageComponent {}
