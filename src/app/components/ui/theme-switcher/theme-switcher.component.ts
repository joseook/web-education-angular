import { Component, OnInit, Renderer2, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="inline-flex items-center justify-center rounded-md p-2.5 text-foreground bg-background hover:bg-muted transition-colors"
      (click)="toggleTheme()"
      aria-label="Toggle theme"
    >
      <!-- Sun icon -->
      <svg
        *ngIf="isDarkTheme"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      
      <!-- Moon icon -->
      <svg
        *ngIf="!isDarkTheme"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </button>
  `,
  styles: []
})
export class ThemeSwitcherComponent implements OnInit {
  private renderer = inject(Renderer2);
  isDarkTheme = false;
  
  ngOnInit() {
    // Verifica o tema salvo no localStorage ou prefere o tema do sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
  }
  
  toggleTheme() {
    if (this.isDarkTheme) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }
  
  private setDarkTheme() {
    this.renderer.addClass(document.documentElement, 'dark');
    localStorage.setItem('theme', 'dark');
    this.isDarkTheme = true;
  }
  
  private setLightTheme() {
    this.renderer.removeClass(document.documentElement, 'dark');
    localStorage.setItem('theme', 'light');
    this.isDarkTheme = false;
  }
}
