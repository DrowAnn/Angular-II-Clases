import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import ROUTES from './signal/signal-routing';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(ROUTES), provideClientHydration(), provideAnimationsAsync()],
};
