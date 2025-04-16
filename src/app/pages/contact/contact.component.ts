import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { CardComponent, CardContentComponent, CardHeaderComponent } from '../../components/ui/card/card.component';
import { MotionDirective } from '../../components/ui/animations/motion.directive';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    ButtonComponent, 
    CardComponent, 
    CardHeaderComponent, 
    CardContentComponent,
    MotionDirective
  ],
  template: `
    <div class="section-padding bg-primary/5 relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute -top-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16" uiMotion animation="fadeIn">
          <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6">Entre em Contato</h1>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atendê-lo! Entre em contato conosco para obter mais informações sobre nossos cursos, 
            processo de matrícula ou agendar uma visita.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div uiMotion animation="slideRight">
            <ui-card>
              <ui-card-header>
                <h2 class="text-2xl font-bold">Informações de Contato</h2>
                <p class="text-muted-foreground">Entre em contato ou visite-nos pessoalmente</p>
              </ui-card-header>
              <ui-card-content>
                <div class="space-y-6">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-foreground">Endereço</h3>
                      <p class="text-muted-foreground">Av. da Educação, 1000 - São Paulo, SP</p>
                      <p class="text-sm text-muted-foreground mt-1">CEP: 01001-000</p>
                      <a href="https://maps.google.com" target="_blank" class="text-sm text-primary hover:underline mt-1 inline-block">Ver no mapa</a>
                    </div>
                  </div>
                  
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-foreground">Telefones</h3>
                      <p class="text-muted-foreground">(11) 1234-5678</p>
                      <p class="text-muted-foreground">(11) 98765-4321 (WhatsApp)</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-foreground">E-mail</h3>
                      <p class="text-muted-foreground">contato&#64;futurobrilhante.edu.br</p>
                      <p class="text-muted-foreground">matriculas&#64;futurobrilhante.edu.br</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-foreground">Horário de Atendimento</h3>
                      <p class="text-muted-foreground">Segunda a Sexta: 7h às 18h</p>
                      <p class="text-muted-foreground">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </div>
                
                <div class="mt-8">
                  <h3 class="font-semibold text-foreground mb-4">Redes Sociais</h3>
                  <div class="flex gap-4">
                    <a href="#" class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                  </div>
                </div>
              </ui-card-content>
            </ui-card>
            
          
          </div>
          
          <div uiMotion animation="slideLeft" [delay]="0.2">
            <ui-card>
              <ui-card-header>
                <h2 class="text-2xl font-bold">Envie sua Mensagem</h2>
                <p class="text-muted-foreground">Preencha o formulário abaixo e entraremos em contato em breve</p>
              </ui-card-header>
              <ui-card-content>
                <form (ngSubmit)="submitForm()" class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <label for="name" class="text-sm font-medium text-foreground">Nome Completo *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        [(ngModel)]="formData.name"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Digite seu nome completo"
                        required
                      />
                    </div>
                    
                    <div class="space-y-2">
                      <label for="email" class="text-sm font-medium text-foreground">E-mail *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        [(ngModel)]="formData.email"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Digite seu e-mail"
                        required
                      />
                    </div>
                  </div>
                  
                  <div class="space-y-2">
                    <label for="phone" class="text-sm font-medium text-foreground">Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      [(ngModel)]="formData.phone"
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <div class="space-y-2">
                    <label for="subject" class="text-sm font-medium text-foreground">Assunto *</label>
                    <select 
                      id="subject" 
                      name="subject"
                      [(ngModel)]="formData.subject"
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="" disabled>Selecione um assunto</option>
                      <option value="Informações sobre Matrículas">Informações sobre Matrículas</option>
                      <option value="Dúvidas sobre Cursos">Dúvidas sobre Cursos</option>
                      <option value="Agendamento de Visita">Agendamento de Visita</option>
                      <option value="Trabalhe Conosco">Trabalhe Conosco</option>
                      <option value="Outros Assuntos">Outros Assuntos</option>
                    </select>
                  </div>
                  
                  <div class="space-y-2">
                    <label for="message" class="text-sm font-medium text-foreground">Mensagem *</label>
                    <textarea 
                      id="message" 
                      name="message"
                      [(ngModel)]="formData.message"
                      rows="6" 
                      class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Digite sua mensagem"
                      required
                    ></textarea>
                  </div>
                  
                  <div class="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="privacy"
                      class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      required
                    />
                    <label for="privacy" class="text-sm text-muted-foreground">
                      Concordo com a <a href="#" class="text-primary hover:underline">Política de Privacidade</a> e autorizo o uso dos meus dados para contato.
                    </label>
                  </div>
                  
                  <ui-button type="submit" [disabled]="sending">
                    <span *ngIf="!sending">Enviar Mensagem</span>
                    <span *ngIf="sending" class="flex items-center">
                      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  </ui-button>
                </form>
                
                <div *ngIf="submitted" class="mt-6 p-4 bg-green-100 text-green-800 rounded-md flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-800 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <div>
                    <h4 class="font-semibold">Mensagem enviada com sucesso!</h4>
                    <p class="text-sm">Obrigado por entrar em contato. Responderemos em breve!</p>
                  </div>
                </div>
              </ui-card-content>
            </ui-card>
          </div>
        </div>
        
        <div class="mt-16" uiMotion animation="fadeIn">
          <h2 class="heading-primary text-center mb-8">Perguntas Frequentes</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ui-card uiMotion animation="slideUp" [delay]="0.1">
              <ui-card-content>
                <h3 class="text-lg font-semibold mb-2">Como faço para matricular meu filho?</h3>
                <p class="text-muted-foreground">
                  Para realizar a matrícula, entre em contato conosco pelos telefones disponíveis ou preencha o formulário de contato. 
                  Nossa equipe irá agendar uma visita para conhecer nossas instalações e fornecer todas as informações necessárias.
                </p>
              </ui-card-content>
            </ui-card>
            
            <ui-card uiMotion animation="slideUp" [delay]="0.2">
              <ui-card-content>
                <h3 class="text-lg font-semibold mb-2">Quais documentos são necessários para a matrícula?</h3>
                <p class="text-muted-foreground">
                  Para a matrícula, é necessário apresentar RG e CPF do responsável, RG ou certidão de nascimento do aluno, 
                  comprovante de residência, declaração de transferência da escola anterior e histórico escolar.
                </p>
              </ui-card-content>
            </ui-card>
            
            <ui-card uiMotion animation="slideUp" [delay]="0.3">
              <ui-card-content>
                <h3 class="text-lg font-semibold mb-2">Vocês oferecem bolsas de estudo?</h3>
                <p class="text-muted-foreground">
                  Sim, oferecemos bolsas de estudo por mérito acadêmico e também por necessidade socioeconômica. 
                  Entre em contato com nosso departamento financeiro para obter mais informações sobre os critérios e processo seletivo.
                </p>
              </ui-card-content>
            </ui-card>
            
            <ui-card uiMotion animation="slideUp" [delay]="0.4">
              <ui-card-content>
                <h3 class="text-lg font-semibold mb-2">Como funciona o transporte escolar?</h3>
                <p class="text-muted-foreground">
                  Temos parceria com empresas de transporte escolar credenciadas que atendem diversas regiões da cidade. 
                  Na secretaria da escola, fornecemos os contatos dos transportadores para que você possa contratar o serviço diretamente.
                </p>
              </ui-card-content>
            </ui-card>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };
  
  sending: boolean = false;
  submitted: boolean = false;
  
  submitForm() {
    this.sending = true;
    
    // Simulando uma requisição
    setTimeout(() => {
      this.sending = false;
      this.submitted = true;
      this.resetForm();
    }, 2000);
  }
  
  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}