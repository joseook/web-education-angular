import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import '@angular/compiler'; // Added to support JIT compilation

export type ButtonVariant = 'default' | 'outline' | 'secondary' | 'destructive' | 'ghost' | 'link';
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('ripple', [
      state('active', style({ transform: 'scale(2)', opacity: 0 })),
      transition('void => active', [
        style({ transform: 'scale(0)', opacity: 0.8 }),
        animate('400ms ease-out')
      ]),
    ]),
  ],
  templateUrl: './button.component.html',
  styles: []
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'default';
  @Input() size: ButtonSize = 'default';
  @Input() disabled: boolean = false;

  rippleState: 'active' | 'inactive' = 'inactive';
  rippleSize = 0;
  rippleX = 0;
  rippleY = 0;

  onButtonClick(event: MouseEvent) {
    if (this.disabled) return;

    const button = event.currentTarget as HTMLButtonElement;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;

    this.rippleSize = size;
    this.rippleX = event.clientX - rect.left - size / 2;
    this.rippleY = event.clientY - rect.top - size / 2;
    this.rippleState = 'active';

    setTimeout(() => {
      this.rippleState = 'inactive';
    }, 400);
  }
}