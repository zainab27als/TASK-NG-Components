import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-content',
  imports: [HomeComponent, HeaderComponent, SidebarComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {}
