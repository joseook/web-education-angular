import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { CardComponent, CardContentComponent, CardDescriptionComponent, CardHeaderComponent, CardTitleComponent } from '../../components/ui/card/card.component';
import { RouterLink } from '@angular/router';
import { MotionDirective } from '../../components/ui/animations/motion.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    RouterLink,
    MotionDirective
  ],
  template: `
    <div class="hero bg-primary/5 section-padding relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div uiMotion animation="slideRight">
            <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">Transformando Futuros Através da <span class="text-primary">Educação</span></h1>
            <p class="text-xl text-muted-foreground mb-8">A Academia Futuro Brilhante oferece educação de excelência para todas as idades, formando cidadãos preparados para os desafios do amanhã.</p>
            <div class="flex flex-wrap gap-4">
              <ui-button size="lg" routerLink="/courses">Conheça Nossos Cursos</ui-button>
              <ui-button size="lg" variant="outline" routerLink="/contact">Agende uma Visita</ui-button>
            </div>
          </div>
          <div class="flex justify-center" uiMotion animation="slideLeft" [delay]="0.2">
            <img 
              src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" 
              alt="Estudantes aprendendo" 
              class="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>

    <section class="section-padding bg-background" uiMotion animation="fadeIn">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="heading-primary">Nossos Diferenciais</h2>
          <p class="text-muted-foreground max-w-2xl mx-auto">O que faz da Academia Futuro Brilhante a escolha ideal para sua formação educacional</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ui-card uiMotion animation="slideUp" [delay]="0.1" [hoverEffect]="true">
            <ui-card-header>
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </div>
              <ui-card-title>Professores Qualificados</ui-card-title>
              <ui-card-description>Mestres e doutores com vasta experiência acadêmica</ui-card-description>
            </ui-card-header>
            <ui-card-content>
              <p class="text-muted-foreground">Nossa equipe docente é composta por profissionais altamente qualificados, com formação acadêmica sólida e experiência em sala de aula, garantindo um ensino de excelência.</p>
            </ui-card-content>
          </ui-card>
          
          <ui-card uiMotion animation="slideUp" [delay]="0.2" [hoverEffect]="true">
            <ui-card-header>
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              </div>
              <ui-card-title>Infraestrutura Moderna</ui-card-title>
              <ui-card-description>Ambientes projetados para potencializar o aprendizado</ui-card-description>
            </ui-card-header>
            <ui-card-content>
              <p class="text-muted-foreground">Nossas instalações contam com salas equipadas com recursos tecnológicos de ponta, laboratórios completos, espaços de convivência e bibliotecas atualizadas.</p>
            </ui-card-content>
          </ui-card>
          
          <ui-card uiMotion animation="slideUp" [delay]="0.3" [hoverEffect]="true">
            <ui-card-header>
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              </div>
              <ui-card-title>Metodologia Inovadora</ui-card-title>
              <ui-card-description>Abordagem pedagógica combinando teoria e prática</ui-card-description>
            </ui-card-header>
            <ui-card-content>
              <p class="text-muted-foreground">Nossa metodologia de ensino combina teoria e prática, estimulando o pensamento crítico, a criatividade e o protagonismo dos alunos no processo de aprendizagem.</p>
            </ui-card-content>
          </ui-card>
        </div>
      </div>
    </section>

    <section class="section-padding bg-secondary/5" uiMotion animation="fadeIn">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="heading-primary">Depoimentos de Alunos</h2>
          <p class="text-muted-foreground max-w-2xl mx-auto">O que nossos alunos e famílias dizem sobre a Academia Futuro Brilhante</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ui-card uiMotion animation="zoom" [delay]="0.1">
            <ui-card-content>
              <div class="flex flex-col gap-4">
                <div class="flex gap-1 text-amber-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                </div>
                <p class="italic text-muted-foreground">"A Academia Futuro Brilhante transformou o aprendizado do meu filho. Os professores são dedicados e a metodologia fez com que ele se interessasse mais pelos estudos."</p>
                <div class="flex items-center gap-4 mt-4">
                  <div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span class="text-primary font-semibold">MP</span>
                  </div>
                  <div>
                    <h4 class="font-semibold">Maria Pereira</h4>
                    <p class="text-sm text-muted-foreground">Mãe de aluno do 7º ano</p>
                  </div>
                </div>
              </div>
            </ui-card-content>
          </ui-card>
          
          <ui-card uiMotion animation="zoom" [delay]="0.2">
            <ui-card-content>
              <div class="flex flex-col gap-4">
                <div class="flex gap-1 text-amber-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                </div>
                <p class="italic text-muted-foreground">"Como aluno do ensino médio, sinto que estou sendo bem preparado para o ENEM e para a vida. Os projetos práticos e atividades extracurriculares fazem toda a diferença."</p>
                <div class="flex items-center gap-4 mt-4">
                  <div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span class="text-primary font-semibold">JS</span>
                  </div>
                  <div>
                    <h4 class="font-semibold">João Silva</h4>
                    <p class="text-sm text-muted-foreground">Aluno do 2º ano do Ensino Médio</p>
                  </div>
                </div>
              </div>
            </ui-card-content>
          </ui-card>
          
          <ui-card uiMotion animation="zoom" [delay]="0.3">
            <ui-card-content>
              <div class="flex flex-col gap-4">
                <div class="flex gap-1 text-amber-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                </div>
                <p class="italic text-muted-foreground">"Como professor, posso afirmar que a Academia Futuro Brilhante oferece todas as condições para um ensino de qualidade. O apoio pedagógico e a infraestrutura são excelentes."</p>
                <div class="flex items-center gap-4 mt-4">
                  <div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span class="text-primary font-semibold">CA</span>
                  </div>
                  <div>
                    <h4 class="font-semibold">Carlos Andrade</h4>
                    <p class="text-sm text-muted-foreground">Professor de Matemática</p>
                  </div>
                </div>
              </div>
            </ui-card-content>
          </ui-card>
        </div>
      </div>
    </section>

    <section class="section-padding relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full bg-primary/5 -skew-y-3 transform origin-top-right"></div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div uiMotion animation="slideRight">
            <h2 class="heading-primary">Calendário Acadêmico</h2>
            <p class="text-muted-foreground mb-6">Fique por dentro das datas importantes do ano letivo</p>
            
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="w-16 h-16 bg-primary text-primary-foreground rounded-lg flex items-center justify-center shrink-0">
                  <span class="text-sm">JUN</span>
                  <span class="text-2xl font-bold">15</span>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">Início das Matrículas</h3>
                  <p class="text-muted-foreground">Período de matrículas para novos alunos começa em todas as unidades.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="w-16 h-16 bg-primary text-primary-foreground rounded-lg flex items-center justify-center shrink-0">
                  <span class="text-sm">JUL</span>
                  <span class="text-2xl font-bold">10</span>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">Feira de Ciências</h3>
                  <p class="text-muted-foreground">Exposição dos projetos científicos desenvolvidos pelos alunos durante o semestre.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="w-16 h-16 bg-primary text-primary-foreground rounded-lg flex items-center justify-center shrink-0">
                  <span class="text-sm">AGO</span>
                  <span class="text-2xl font-bold">05</span>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">Início das Aulas</h3>
                  <p class="text-muted-foreground">Início do período letivo 2025/2026 para todos os níveis de ensino.</p>
                </div>
              </div>
            </div>
            
            <div class="mt-8">
              <ui-button variant="outline" routerLink="/about">Ver Calendário Completo</ui-button>
            </div>
          </div>
          
          <div class="flex justify-center" uiMotion animation="slideLeft" [delay]="0.2">
            <img 
              src="https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg" 
              alt="Calendário acadêmico" 
              class="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-primary text-primary-foreground">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12" uiMotion animation="fadeIn">
          <h2 class="text-4xl font-bold mb-4">Pronto para fazer parte da nossa história?</h2>
          <p class="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Venha conhecer nossa estrutura e metodologia. Agende uma visita e descubra como podemos contribuir para o futuro brilhante do seu filho.
          </p>
          <ui-button size="lg" variant="secondary" routerLink="/contact">Agende uma Visita</ui-button>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent { }