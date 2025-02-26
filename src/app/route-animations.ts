import { animate, query, style, transition, trigger } from '@angular/animations';

export const fadeAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
        opacity: 0
      })
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0 }),
      animate('0.5s ease-in-out', style({ opacity: 1 }))
    ], { optional: true })
  ])
]);
