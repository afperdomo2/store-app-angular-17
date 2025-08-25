import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../../shared/components/counter/counter.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  duration = signal(3);
  message = signal('Counter for About Component');

  changeDuration(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.duration.set(Number(value));
  }

  changeMessage(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.message.set(value);
  }
}
