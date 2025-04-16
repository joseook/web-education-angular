import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, RouterLink } from '@angular/router';
import { routes } from './app/app.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  template: `
    <nav class="bg-primary text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <a [routerLink]="['/']" class="text-xl font-bold">Academia Futuro Brilhante</a>
          </div>
          <div class="flex space-x-4">
            <a [routerLink]="['/']" class="hover:bg-blue-700 px-3 py-2 rounded-md">Início</a>
            <a [routerLink]="['/cursos']" class="hover:bg-blue-700 px-3 py-2 rounded-md">Cursos</a>
            <a [routerLink]="['/sobre']" class="hover:bg-blue-700 px-3 py-2 rounded-md">Sobre</a>
            <a [routerLink]="['/contato']" class="hover:bg-blue-700 px-3 py-2 rounded-md">Contato</a>
          </div>
        </div>
      </div>
    </nav>

    <router-outlet></router-outlet>

    <footer class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">Academia Futuro Brilhante</h3>
            <p class="text-gray-300">Transformando vidas através da educação de qualidade.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Contato</h3>
            <p class="text-gray-300">
              Email: contato&#64;futurobrilhante.edu.br<br>
              Telefone: (11) 1234-5678
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-300 hover:text-white">Facebook</a>
              <a href="#" class="text-gray-300 hover:text-white">Instagram</a>
              <a href="#" class="text-gray-300 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class App {
  name = 'Academia Futuro Brilhante';
}

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});