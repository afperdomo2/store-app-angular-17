import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css',
})
export class WaveAudioComponent {
  @Input({ required: true }) audioUrl!: string;

  @ViewChild('waveform') containerRef!: ElementRef<HTMLDivElement>;

  private waveSurfer!: WaveSurfer;

  isPlaying = signal(false);

  ngAfterViewInit() {
    this.waveSurfer = WaveSurfer.create({
      container: this.containerRef.nativeElement,
      url: this.audioUrl,
      waveColor: 'violet',
      progressColor: 'purple',
    });
    this.waveSurfer.on('play', () => this.isPlaying.set(true));
    this.waveSurfer.on('pause', () => this.isPlaying.set(false));
  }

  playPause() {
    this.waveSurfer.playPause();
  }
}
