import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  template: `
    <footer class="bg-muted/30 pt-16 pb-8">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
          <!-- Logo and Description -->
          <div class="md:col-span-1 space-y-4">
            <h3 class="text-lg font-bold text-primary">Academia Futuro Brilhante</h3>
            <p class="text-muted-foreground text-sm">
              Transformando vidas através da educação de qualidade desde 1995.
            </p>
            <div class="flex space-x-4 pt-4">
              <a href="#" class="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" class="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" class="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" class="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <!-- Links Section 1 -->
          <div class="md:col-span-1">
            <h4 class="font-medium text-foreground mb-4">Navegação</h4>
            <ul class="space-y-2">
              <li><a routerLink="/" class="text-muted-foreground hover:text-primary text-sm transition-colors">Início</a></li>
              <li><a routerLink="/courses" class="text-muted-foreground hover:text-primary text-sm transition-colors">Cursos</a></li>
              <li><a routerLink="/about" class="text-muted-foreground hover:text-primary text-sm transition-colors">Sobre Nós</a></li>
              <li><a routerLink="/contact" class="text-muted-foreground hover:text-primary text-sm transition-colors">Contato</a></li>
            </ul>
          </div>

          <!-- Links Section 2 -->
          <div class="md:col-span-1">
            <h4 class="font-medium text-foreground mb-4">Informações</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-muted-foreground hover:text-primary text-sm transition-colors">Admissões</a></li>
              <li><a href="#" class="text-muted-foreground hover:text-primary text-sm transition-colors">Calendário Acadêmico</a></li>
              <li><a href="#" class="text-muted-foreground hover:text-primary text-sm transition-colors">Política de Privacidade</a></li>
              <li><a href="#" class="text-muted-foreground hover:text-primary text-sm transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div class="md:col-span-1">
            <h4 class="font-medium text-foreground mb-4">Inscreva-se na Newsletter</h4>
            <p class="text-muted-foreground text-sm mb-4">Receba as últimas novidades sobre nossos cursos e eventos.</p>
            <form class="space-y-2">
              <input 
                type="email" 
                placeholder="Seu email"
                class="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <ui-button variant="default" class="w-full">Inscrever-se</ui-button>
            </form>
          </div>
        </div>

        <div class="border-t border-border mt-12 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-muted-foreground text-sm">
              © 2024 Academia Futuro Brilhante. Todos os direitos reservados.
            </p>
            <div class="flex space-x-6 mt-4 md:mt-0">
              <a href="#" class="text-muted-foreground hover:text-primary text-sm transition-colors">Privacidade</a>
              <a href="#" class="text-muted-foreground hover:text-primary text-sm transition-colors">Termos</a>
              <a href="#" class="text-muted-foreground hover:text-primary text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
