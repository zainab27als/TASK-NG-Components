import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContentComponent } from '../content/content.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, SidebarComponent, ContentComponent, HomeComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
