import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="section-padding">
      <div class="max-w-7xl mx-auto">
        <h1 class="heading-primary text-center">Entre em Contato</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 class="heading-secondary">Informações de Contato</h2>
            <div class="space-y-4">
              <p class="flex items-center text-gray-600">
                <span class="mr-3">📍</span>
                Av. da Educação, 1000 - São Paulo, SP
              </p>
              <p class="flex items-center text-gray-600">
                <span class="mr-3">📞</span>
                (11) 1234-5678
              </p>
              <p class="flex items-center text-gray-600">
                <span class="mr-3">✉️</span>
                contato&#64;futurobrilhante.edu.br
              </p>
            </div>

            <h2 class="heading-secondary mt-8">Horário de Atendimento</h2>
            <div class="space-y-2 text-gray-600">
              <p>Segunda a Sexta: 7h às 18h</p>
              <p>Sábado: 8h às 12h</p>
            </div>
          </div>

          <div>
            <form class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700">Nome</label>
                <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700">Assunto</label>
                <select class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Informações sobre Matrículas</option>
                  <option>Dúvidas sobre Cursos</option>
                  <option>Trabalhe Conosco</option>
                  <option>Outros Assuntos</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
              </div>

              <button type="submit" class="btn-primary w-full">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {}