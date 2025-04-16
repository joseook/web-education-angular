import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../ui/button/button.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ThemeSwitcherComponent } from '../../ui/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, ThemeSwitcherComponent],
  animations: [
    trigger('menuAnimation', [
      state('closed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden'
      })),
      state('open', style({
        height: '*',
        opacity: '1'
      })),
      transition('closed <=> open', [
        animate('300ms ease-in-out')
      ])
    ])
  ],
  template: `
    <nav 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background"
      [class.shadow-md]="scrolled || mobileMenuOpen"
      [class.py-3]="!scrolled"
      [class.py-2]="scrolled">
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <a routerLink="/" class="text-xl md:text-2xl font-bold text-primary">
            Academia Futuro Brilhante
          </a>

          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-8">
            <a 
              *ngFor="let item of menuItems" 
              [routerLink]="item.path"
              routerLinkActive="text-primary font-medium"
              class="text-foreground hover:text-primary transition-colors py-2">
              {{ item.label }}
            </a>
          </div>

          <!-- Call to Action Button and Theme Switcher -->
          <div class="hidden md:flex items-center space-x-3">
            <ui-theme-switcher></ui-theme-switcher>
            <ui-button [routerLink]="'/contato'" size="sm">
              Fale Conosco
            </ui-button>
          </div>

          <!-- Mobile Menu Toggle -->
          <button 
            class="md:hidden text-foreground p-2 rounded-md focus:outline-none"
            (click)="toggleMobileMenu()">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              [class.hidden]="mobileMenuOpen"
              >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              [class.hidden]="!mobileMenuOpen"
              >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div 
          [@menuAnimation]="mobileMenuOpen ? 'open' : 'closed'"
          class="md:hidden">
          <div class="pt-4 pb-2 space-y-3">
            <a 
              *ngFor="let item of menuItems" 
              [routerLink]="item.path"
              routerLinkActive="text-primary font-medium"
              class="block py-2 text-foreground hover:text-primary transition-colors">
              {{ item.label }}
            </a>
            <div class="flex justify-between items-center mt-4">
              <ui-theme-switcher></ui-theme-switcher>
              <ui-button [routerLink]="'/contato'" size="sm" class="flex-1 ml-3">
                Fale Conosco
              </ui-button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="h-20"></div> <!-- Spacer for fixed navbar -->
  `,
  styles: []
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  mobileMenuOpen = false;

  menuItems = [
    { label: 'Início', path: '/' },
    { label: 'Cursos', path: '/cursos' },
    { label: 'Sobre Nós', path: '/sobre' },
    { label: 'Contato', path: '/contato' },
  ];

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 20;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
