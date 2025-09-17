import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding() // Habilita el enlace de entradas en componentes de rutas (Input binding)
    ),
    provideHttpClient(), // Permite hacer peticiones HTTP
  ],
};
