import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hero bg-blue-50 section-padding">
      <div class="max-w-7xl mx-auto">
        <div class="text-center">
          <h1 class="text-5xl font-bold text-gray-900 mb-6">Bem-vindo à Academia Futuro Brilhante</h1>
          <p class="text-xl text-gray-600 mb-8">Construindo o futuro através da educação de excelência</p>
          <a href="/cursos" class="btn-primary">Conheça Nossos Cursos</a>
        </div>
      </div>
    </div>

    <section class="section-padding">
      <div class="max-w-7xl mx-auto">
        <h2 class="heading-primary text-center">Nossos Diferenciais</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 bg-white rounded-lg shadow-md">
            <h3 class="heading-secondary">Professores Qualificados</h3>
            <p class="text-gray-600">Equipe docente com vasta experiência e formação acadêmica.</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow-md">
            <h3 class="heading-secondary">Infraestrutura Moderna</h3>
            <p class="text-gray-600">Salas equipadas com tecnologia de ponta para melhor aprendizado.</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow-md">
            <h3 class="heading-secondary">Metodologia Inovadora</h3>
            <p class="text-gray-600">Abordagem pedagógica que combina teoria e prática.</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {}