import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-padding">
      <div class="max-w-7xl mx-auto">
        <h1 class="heading-primary text-center">Sobre Nós</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="heading-secondary">Nossa História</h2>
            <p class="text-gray-600 mb-4">
              Fundada em 2010, a Academia Futuro Brilhante nasceu com o propósito de transformar a educação em nossa comunidade.
              Com mais de uma década de experiência, nos tornamos referência em ensino de qualidade.
            </p>
            <p class="text-gray-600 mb-4">
              Nossa missão é formar cidadãos conscientes, preparados para os desafios do século XXI e
              comprometidos com o desenvolvimento sustentável da sociedade.
            </p>
          </div>
          <div>
            <h2 class="heading-secondary">Nossos Valores</h2>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full mr-3">Excelência</span>
                <p class="text-gray-600">Buscamos a excelência em todas as nossas atividades educacionais.</p>
              </li>
              <li class="flex items-start">
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full mr-3">Inovação</span>
                <p class="text-gray-600">Incorporamos metodologias e tecnologias inovadoras no processo de ensino.</p>
              </li>
              <li class="flex items-start">
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full mr-3">Respeito</span>
                <p class="text-gray-600">Valorizamos a diversidade e promovemos um ambiente inclusivo.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}