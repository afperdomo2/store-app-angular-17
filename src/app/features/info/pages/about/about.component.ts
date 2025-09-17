import { Component, signal } from '@angular/core';

import { WaveAudioComponent } from '@features/info/components/wave-audio/wave-audio.component';
import { CounterComponent } from '@shared/components/counter/counter.component';
import { HighlightDirective } from '@shared/directives/highlight.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, WaveAudioComponent, HighlightDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export default class AboutComponent {
  duration = signal(0);
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
