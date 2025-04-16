import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-padding">
      <div class="max-w-7xl mx-auto">
        <h1 class="heading-primary text-center">Nossos Cursos</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <h3 class="heading-secondary">Ensino Fundamental</h3>
              <p class="text-gray-600 mb-4">Base sólida para o futuro acadêmico do seu filho.</p>
              <ul class="list-disc list-inside text-gray-600 mb-4">
                <li>1º ao 9º ano</li>
                <li>Turmas reduzidas</li>
                <li>Acompanhamento personalizado</li>
              </ul>
              <button class="btn-primary w-full">Saiba Mais</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <h3 class="heading-secondary">Ensino Médio</h3>
              <p class="text-gray-600 mb-4">Preparação completa para o futuro universitário.</p>
              <ul class="list-disc list-inside text-gray-600 mb-4">
                <li>1º ao 3º ano</li>
                <li>Preparação para o ENEM</li>
                <li>Orientação vocacional</li>
              </ul>
              <button class="btn-primary w-full">Saiba Mais</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <h3 class="heading-secondary">Cursos Extracurriculares</h3>
              <p class="text-gray-600 mb-4">Desenvolvimento integral do aluno.</p>
              <ul class="list-disc list-inside text-gray-600 mb-4">
                <li>Idiomas</li>
                <li>Robótica</li>
                <li>Artes e Música</li>
              </ul>
              <button class="btn-primary w-full">Saiba Mais</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CoursesComponent {}