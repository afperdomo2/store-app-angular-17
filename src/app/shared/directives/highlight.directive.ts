import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  // Inyecta ElementRef para acceder al elemento DOM
  private readonly element = inject(ElementRef);

  // El constructor se usa solo para la inyección de dependencias.
  constructor() {
    // Aquí no se manipula el DOM.
  }

  // Se implementa la interfaz OnInit para usar el hook.
  ngOnInit() {
    // La manipulación del DOM se hace de forma segura aquí.
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }
}
