import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { setupWorker } from "msw/browser";
import { handlers } from "./mocks/handlers";

const worker = setupWorker(...handlers);
await worker.start();


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
