import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { LayoutComponent } from './app/layout/layout/layout.component';

const bootstrap = () => bootstrapApplication(LayoutComponent, config);

export default bootstrap;
