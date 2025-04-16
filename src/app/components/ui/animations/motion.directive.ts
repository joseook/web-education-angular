import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { AnimationBuilder, AnimationFactory, AnimationPlayer, style, animate } from '@angular/animations';

@Directive({
  selector: '[uiMotion]',
  standalone: true
})
export class MotionDirective implements OnInit {
  @Input() animation: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'zoom' = 'fadeIn';
  @Input() delay: number = 0;
  @Input() duration: number = 0.5;
  @Input() hoverEffect: boolean = false;

  private player: AnimationPlayer | null = null;

  constructor(
    private el: ElementRef,
    private animationBuilder: AnimationBuilder,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    // Apply initial styles immediately
    const initialStyles: { [key: string]: any } = { opacity: 0 };

    if (this.animation === 'slideUp') {
      initialStyles['transform'] = 'translateY(50px)';
    } else if (this.animation === 'slideLeft') {
      initialStyles['transform'] = 'translateX(-50px)';
    } else if (this.animation === 'slideRight') {
      initialStyles['transform'] = 'translateX(50px)';
    } else if (this.animation === 'zoom') {
      initialStyles['transform'] = 'scale(0.9)';
    }

    // Apply initial styles
    Object.keys(initialStyles).forEach(key => {
      this.renderer.setStyle(this.el.nativeElement, key, initialStyles[key]);
    });

    // Use setTimeout to allow browser rendering before animation
    setTimeout(() => {
      this.playAnimation();
    }, 10);
  }

  private playAnimation() {
    // Final styles for the animation
    const finalStyles: { [key: string]: any } = { opacity: 1 };

    if (this.animation === 'slideUp' || this.animation === 'slideLeft' || this.animation === 'slideRight') {
      finalStyles['transform'] = 'translate(0)';
    } else if (this.animation === 'zoom') {
      finalStyles['transform'] = 'scale(1)';
    }

    // Build the animation using vanilla DOM instead of Animation Builder
    const transitionProperty = 'opacity, transform';
    const transitionDuration = `${this.duration}s`;
    const transitionDelay = `${this.delay}s`;
    const transitionTiming = 'ease-out';

    this.renderer.setStyle(this.el.nativeElement, 'transition-property', transitionProperty);
    this.renderer.setStyle(this.el.nativeElement, 'transition-duration', transitionDuration);
    this.renderer.setStyle(this.el.nativeElement, 'transition-delay', transitionDelay);
    this.renderer.setStyle(this.el.nativeElement, 'transition-timing-function', transitionTiming);

    // Apply final styles
    Object.keys(finalStyles).forEach(key => {
      this.renderer.setStyle(this.el.nativeElement, key, finalStyles[key]);
    });
  }
}
