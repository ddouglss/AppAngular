import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';  // Usar o AppModule para bootstrap

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
