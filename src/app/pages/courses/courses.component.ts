import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { CardComponent, CardContentComponent, CardDescriptionComponent, CardFooterComponent, CardHeaderComponent, CardTitleComponent } from '../../components/ui/card/card.component';
import { MotionDirective } from '../../components/ui/animations/motion.directive';

interface Course {
  title: string;
  level: string;
  description: string;
  features: string[];
  image: string;
  price: string;
  popular?: boolean;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule, 
    ButtonComponent, 
    CardComponent, 
    CardHeaderComponent, 
    CardContentComponent, 
    CardFooterComponent, 
    CardTitleComponent, 
    CardDescriptionComponent,
    MotionDirective
  ],
  template: `
    <div class="section-padding bg-primary/5 relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute -top-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16" uiMotion animation="fadeIn">
          <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6">Nossos Cursos</h1>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma experiência educacional completa, com programas adaptados para cada fase do desenvolvimento acadêmico.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ui-card *ngFor="let course of featuredCourses; let i = index" 
            [hoverEffect]="true" 
            [class.border-primary]="course.popular"
            uiMotion animation="slideUp" [delay]="0.1 * i">
            
            <div *ngIf="course.popular" class="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
              Popular
            </div>
            
            <ui-card-header>
              <img 
                [src]="course.image" 
                [alt]="course.title"
                class="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <ui-card-title>{{ course.title }}</ui-card-title>
              <ui-card-description>{{ course.level }}</ui-card-description>
            </ui-card-header>
            
            <ui-card-content>
              <p class="text-muted-foreground mb-4">{{ course.description }}</p>
              <ul class="space-y-2 mb-6">
                <li *ngFor="let feature of course.features" class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span class="text-sm">{{ feature }}</span>
                </li>
              </ul>
              <div class="text-lg font-semibold text-foreground mb-4">{{ course.price }}</div>
            </ui-card-content>
            
            <ui-card-footer>
              <ui-button class="w-full" [variant]="course.popular ? 'default' : 'outline'">Saiba Mais</ui-button>
            </ui-card-footer>
          </ui-card>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" uiMotion animation="fadeIn">
          <div>
            <img 
              src="https://img.freepik.com/free-vector/online-school-e-learning-home-education-distance-courses-website-children-teacher-computer-books-letters-symbols-knowledge-web-studying-class-vector-illustration_613284-346.jpg" 
              alt="Metodologia de ensino" 
              class="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h2 class="heading-primary">Nossa Metodologia</h2>
            <p class="text-muted-foreground mb-6">
              A Academia Futuro Brilhante utiliza uma abordagem pedagógica inovadora, que combina:
            </p>
            
            <div class="space-y-4">
              <div class="bg-card rounded-lg p-4 shadow-sm border">
                <div class="flex gap-4 items-start">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-1">Aprendizado Ativo</h3>
                    <p class="text-muted-foreground text-sm">
                      Estimulamos o aluno a ser protagonista do seu aprendizado, com atividades práticas e projetos desafiadores.
                    </p>
                  </div>
                </div>
              </div>
              
              <div class="bg-card rounded-lg p-4 shadow-sm border">
                <div class="flex gap-4 items-start">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M20 6H4V8H20V6Z"></path><path d="M20 12H4V14H20V12Z"></path><path d="M20 18H4V20H20V18Z"></path></svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-1">Personalização</h3>
                    <p class="text-muted-foreground text-sm">
                      Respeitamos o ritmo e o estilo de aprendizagem de cada aluno, oferecendo suporte individualizado.
                    </p>
                  </div>
                </div>
              </div>
              
              <div class="bg-card rounded-lg p-4 shadow-sm border">
                <div class="flex gap-4 items-start">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path></svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-1">Tecnologia Integrada</h3>
                    <p class="text-muted-foreground text-sm">
                      Utilizamos recursos tecnológicos avançados como ferramentas de apoio ao processo de ensino e aprendizagem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <section class="section-padding bg-background" uiMotion animation="fadeIn">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="heading-primary">Programas Especiais</h2>
          <p class="text-muted-foreground max-w-2xl mx-auto">
            Além dos cursos regulares, oferecemos programas especiais para complementar a formação dos nossos alunos
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-card rounded-lg p-6 border shadow-sm" uiMotion animation="slideUp" [delay]="0.1">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
            </div>
            <h3 class="font-semibold text-xl mb-2">Reforço Escolar</h3>
            <p class="text-muted-foreground mb-4">
              Aulas de apoio para alunos que precisam de ajuda extra em disciplinas específicas, com abordagem individualizada.
            </p>
            <ul class="space-y-2 mb-6 text-sm text-muted-foreground">
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Grupos reduzidos</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Foco nas dificuldades específicas</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Material didático exclusivo</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-card rounded-lg p-6 border shadow-sm" uiMotion animation="slideUp" [delay]="0.2">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            </div>
            <h3 class="font-semibold text-xl mb-2">Laboratório de Inovação</h3>
            <p class="text-muted-foreground mb-4">
              Espaço para desenvolvimento de projetos tecnológicos, estimulando a criatividade e o pensamento inovador.
            </p>
            <ul class="space-y-2 mb-6 text-sm text-muted-foreground">
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Robótica e programação</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Projetos práticos</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Participação em competições</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-card rounded-lg p-6 border shadow-sm" uiMotion animation="slideUp" [delay]="0.3">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v12"></path><path d="M6 12h12"></path></svg>
            </div>
            <h3 class="font-semibold text-xl mb-2">Programa Bilíngue</h3>
            <p class="text-muted-foreground mb-4">
              Imersão em língua inglesa com metodologia comunicativa, preparando os alunos para um mundo globalizado.
            </p>
            <ul class="space-y-2 mb-6 text-sm text-muted-foreground">
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Professores nativos</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Metodologia imersiva</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Certificação internacional</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class CoursesComponent {
  featuredCourses: Course[] = [
    {
      title: 'Ensino Fundamental',
      level: '1º ao 9º ano',
      description: 'Base sólida para o futuro acadêmico do seu filho, desenvolvendo habilidades essenciais para toda a vida.',
      features: [
        'Turmas com número reduzido de alunos',
        'Acompanhamento pedagógico personalizado',
        'Atividades extracurriculares inclusas',
        'Material didático completo'
      ],
      image: 'https://img.freepik.com/free-vector/kids-online-lessons_23-2148520742.jpg',
      price: 'A partir de R$ 1.200/mês'
    },
    {
      title: 'Ensino Médio',
      level: '1º ao 3º ano',
      description: 'Preparação completa para o ENEM e vestibulares, com foco no desenvolvimento do pensamento crítico.',
      features: [
        'Preparação intensiva para o ENEM',
        'Simulados bimestrais',
        'Orientação vocacional',
        'Plantões de dúvidas'
      ],
      image: 'https://img.freepik.com/free-vector/students-watching-webinar-computer-studying-online_74855-15522.jpg',
      price: 'A partir de R$ 1.500/mês',
      popular: true
    },
    {
      title: 'Cursos Extracurriculares',
      level: 'Todas as idades',
      description: 'Programas complementares para desenvolvimento integral do aluno em diversas áreas de conhecimento.',
      features: [
        'Inglês e outros idiomas',
        'Robótica e programação',
        'Artes e música',
        'Esportes diversos'
      ],
      image: 'https://img.freepik.com/free-vector/hand-drawn-after-school-activities-pattern_23-2149430293.jpg',
      price: 'A partir de R$ 300/mês'
    }
  ];
}