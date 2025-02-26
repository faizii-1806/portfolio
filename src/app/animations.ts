import { trigger, transition, style, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ opacity: 0 }),
      animate('0.5s', style({ opacity: 1 }))
    ])
  ]);