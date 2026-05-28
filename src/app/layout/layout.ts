import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Dashboard } from './dashboard/dashboard';

@Component({
  selector: 'app-layout',
  imports: [Dashboard],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
