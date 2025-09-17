import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withPreloading(PreloadAllModules), // Precarga todos los módulos para mejorar el rendimiento de la navegación
      withComponentInputBinding() // Habilita el enlace de entradas en componentes de rutas (Input binding)
    ),
    provideHttpClient(), // Proveedor para HttpClient
  ],
};
