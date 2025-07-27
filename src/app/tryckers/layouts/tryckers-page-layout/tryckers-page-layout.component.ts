import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tryckers-page-layout',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './tryckers-page-layout.component.html',
})
export class TryckersPageLayoutComponent { }
