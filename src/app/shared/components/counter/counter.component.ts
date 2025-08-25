import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';

  counter = signal(0);

  counterInterval: number | undefined;

  // NO PUEDE SER ASÍNCRONO
  // Antes de renderizar
  constructor() {
    console.log('-'.repeat(20));
    console.log('1. Constructor');
  }

  // Antes y durante la renderización
  // Puede contener tareas asíncronas
  ngOnChanges(changes: SimpleChanges) {
    console.log('-'.repeat(20));
    console.log('2. ngOnChanges');
    console.log('Changes:', changes);
    const duration = changes['duration'];
    if (duration && !duration.firstChange) {
      this.doSomething();
    }
  }

  // Después de renderizar
  // Se usa para inicializar la lógica del componente y realizar tareas de configuración
  // Se ejecuta una sola vez, después del primer ngOnChanges
  // Se pueden ejecutar tareas asíncronas
  ngOnInit() {
    console.log('-'.repeat(20));
    console.log('3. ngOnInit');
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);

    // Simular un contador que se incrementa cada segundo
    this.counterInterval = window.setInterval(() => {
      this.counter.update((count) => count + 1);
      console.log('---> Counter:', this.counter());
    }, 1000);
  }

  // Después de renderizar la vista y sus vistas hijas
  // Se usa para interactuar con la vista y sus elementos
  ngAfterViewInit() {
    console.log('-'.repeat(20));
    console.log('4. ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('-'.repeat(20));
    console.log('5. ngOnDestroy');

    window.clearInterval(this.counterInterval);
    console.log('Intervalo limpiado');
  }

  async doSomething() {
    console.log('🧨🧨🧨 Doing something... 🧨🧨🧨');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('💥💥💥 Done! 💥💥💥');
  }
}
