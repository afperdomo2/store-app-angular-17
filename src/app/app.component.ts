import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  // templateUrl: './app.component.html', # No es necesario, se usa <router-outlet />
  // styleUrl: './app.component.css', # No es necesario
})
export class AppComponent {
  title = 'store-app-angular-17';
}
