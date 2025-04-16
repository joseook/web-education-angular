import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { CardComponent, CardContentComponent, CardHeaderComponent } from '../../components/ui/card/card.component';
import { MotionDirective } from '../../components/ui/animations/motion.directive';
import { RouterLink } from '@angular/router';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule, 
    ButtonComponent, 
    CardComponent, 
    CardHeaderComponent, 
    CardContentComponent,
    RouterLink,
    MotionDirective
  ],
  template: `
    <div class="section-padding bg-primary/5 relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute -top-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16" uiMotion animation="fadeIn">
          <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6">Sobre Nós</h1>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça a história, missão, valores e a equipe por trás da Academia Futuro Brilhante.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div uiMotion animation="slideRight">
            <h2 class="heading-primary">Nossa História</h2>
            <p class="text-muted-foreground mb-4">
              Fundada em 2010 pelo educador Dr. Roberto Mendes, a Academia Futuro Brilhante nasceu da visão de transformar 
              a educação em nossa comunidade. Com mais de uma década de experiência, nos tornamos referência em ensino 
              de qualidade na região.
            </p>
            <p class="text-muted-foreground mb-4">
              O que começou como uma pequena escola com apenas 50 alunos, hoje atende mais de 1.200 estudantes em todos os 
              níveis educacionais, do ensino fundamental ao médio, além de diversos cursos extracurriculares.
            </p>
            <p class="text-muted-foreground mb-4">
              Nossa trajetória foi marcada por constante evolução e inovação pedagógica, sempre buscando oferecer o melhor 
              para nossos alunos. Em 2015, inauguramos um novo campus com infraestrutura moderna e, desde então, continuamos 
              expandindo nossas instalações e recursos.
            </p>

            <div class="flex gap-4 mt-8">
              <ui-button routerLink="/contact">Agende uma Visita</ui-button>
              <ui-button variant="outline" routerLink="/courses">Conheça Nossos Cursos</ui-button>
            </div>
          </div>
          
          <div class="flex justify-center" uiMotion animation="slideLeft" [delay]="0.2">
            <img 
              src="https://img.freepik.com/free-vector/school-building-educational-institution-college_107791-1051.jpg" 
              alt="Academia Futuro Brilhante" 
              class="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
        
        <div class="mb-24" uiMotion animation="fadeIn">
          <div class="text-center mb-12">
            <h2 class="heading-primary">Nossa Missão e Valores</h2>
            <p class="text-muted-foreground max-w-2xl mx-auto">
              Os princípios que norteiam nossas ações e definem nosso compromisso com a educação
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-card text-card-foreground rounded-lg border shadow-sm p-6" uiMotion animation="slideUp" [delay]="0.1">
              <div class="mb-4">
                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 1 0-16 0"></path></svg>
                </div>
              </div>
              <h3 class="text-xl font-semibold mb-2">Nossa Missão</h3>
              <p class="text-muted-foreground">
                Formar cidadãos conscientes, preparados para os desafios do século XXI e comprometidos com o 
                desenvolvimento sustentável da sociedade, através de uma educação integral e de excelência.
              </p>
            </div>
            
            <div class="bg-card text-card-foreground rounded-lg border shadow-sm p-6" uiMotion animation="slideUp" [delay]="0.2">
              <div class="mb-4">
                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                </div>
              </div>
              <h3 class="text-xl font-semibold mb-2">Nossa Visão</h3>
              <p class="text-muted-foreground">
                Ser reconhecida como instituição de referência em educação inovadora e de qualidade, contribuindo 
                para a formação de líderes e profissionais que impactam positivamente a sociedade.
              </p>
            </div>
            
            <div class="bg-card text-card-foreground rounded-lg border shadow-sm p-6" uiMotion animation="slideUp" [delay]="0.3">
              <div class="mb-4">
                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
              </div>
              <h3 class="text-xl font-semibold mb-2">Nossos Valores</h3>
              <ul class="space-y-2 text-muted-foreground">
                <li class="flex items-start gap-2">
                  <span class="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-semibold">Excelência</span>
                  <span>Buscamos a excelência em todas as nossas atividades</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-semibold">Respeito</span>
                  <span>Valorizamos a diversidade e promovemos um ambiente inclusivo</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-semibold">Inovação</span>
                  <span>Incorporamos metodologias e tecnologias inovadoras</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-semibold">Integridade</span>
                  <span>Agimos com ética, transparência e responsabilidade</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="mb-24" uiMotion animation="fadeIn">
          <div class="text-center mb-12">
            <h2 class="heading-primary">Nossa Equipe</h2>
            <p class="text-muted-foreground max-w-2xl mx-auto">
              Conheça os profissionais dedicados que fazem a diferença na Academia Futuro Brilhante
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ui-card *ngFor="let member of teamMembers; let i = index" uiMotion animation="zoom" [delay]="0.1 * i">
              <ui-card-header>
                <div class="flex flex-col items-center">
                  <img 
                    [src]="member.photo" 
                    [alt]="member.name" 
                    class="rounded-full w-32 h-32 object-cover border-4 border-primary/10 mb-4"
                  />
                  <h3 class="text-xl font-semibold">{{ member.name }}</h3>
                  <p class="text-sm text-muted-foreground">{{ member.role }}</p>
                </div>
              </ui-card-header>
              <ui-card-content>
                <p class="text-sm text-muted-foreground text-center">{{ member.bio }}</p>
              </ui-card-content>
            </ui-card>
          </div>
        </div>
        
        <div class="bg-card rounded-xl border p-8 shadow-sm" uiMotion animation="fadeIn">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="heading-primary">Estrutura Física</h2>
              <p class="text-muted-foreground mb-4">
                Nossa infraestrutura foi projetada para proporcionar um ambiente de aprendizado ideal, com:
              </p>
              
              <div class="space-y-4">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M15 14l5-5-5-5"></path><path d="M19 9H5.5A3.5 3.5 0 0 0 2 12.5 3.5 3.5 0 0 0 5.5 16H19"></path></svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-foreground">Salas de Aula Modernas</h3>
                    <p class="text-sm text-muted-foreground">Equipadas com tecnologia audiovisual, ar-condicionado e mobiliário ergonômico.</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-foreground">Laboratórios Completos</h3>
                    <p class="text-sm text-muted-foreground">Laboratórios de Ciências, Informática, Robótica e Idiomas com equipamentos de última geração.</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-foreground">Espaços de Convivência</h3>
                    <p class="text-sm text-muted-foreground">Áreas verdes, quadras esportivas, pátios e cantina com alimentação balanceada.</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-foreground">Biblioteca Atualizada</h3>
                    <p class="text-sm text-muted-foreground">Acervo físico e digital com milhares de títulos, além de ambientes para estudo individual e em grupo.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="flex justify-center" uiMotion animation="slideLeft" [delay]="0.2">
              <img 
                src="https://img.freepik.com/free-vector/university-campus-concept-illustration_114360-10506.jpg" 
                alt="Estrutura física da Academia Futuro Brilhante" 
                class="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Dr. Roberto Mendes',
      role: 'Diretor Geral e Fundador',
      bio: 'Doutor em Educação com mais de 25 anos de experiência. Fundou a Academia Futuro Brilhante com o objetivo de transformar a educação na região.',
      photo: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg'
    },
    {
      name: 'Dra. Carla Oliveira',
      role: 'Coordenadora Pedagógica',
      bio: 'Mestre em Psicopedagogia, é responsável pelo desenvolvimento dos projetos educacionais e formação continuada dos professores.',
      photo: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg'
    },
    {
      name: 'Prof. André Santos',
      role: 'Coordenador do Ensino Médio',
      bio: 'Especialista em metodologias ativas de aprendizagem, lidera a equipe de professores do Ensino Médio com foco na preparação para o ENEM.',
      photo: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg'
    },
    {
      name: 'Profa. Marina Lima',
      role: 'Coordenadora do Ensino Fundamental',
      bio: 'Pedagoga com especialização em Alfabetização e Letramento, coordena as atividades do Ensino Fundamental com abordagem lúdica e eficaz.',
      photo: 'https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg'
    }
  ];
}