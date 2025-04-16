import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  template: `
    <div class="flex flex-col min-h-screen bg-background text-foreground">
      <!-- Navbar -->
      <app-navbar></app-navbar>
      
      <!-- Main Content -->
      <main class="flex-grow">
        <ng-content></ng-content>
      </main>
      
      <!-- Footer -->
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class MainLayoutComponent {}
