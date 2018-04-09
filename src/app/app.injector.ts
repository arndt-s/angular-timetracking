import { Injector } from '@angular/core';

let appInjector: Injector;

export function setAppInjector(injector: Injector): void {
  appInjector = injector;
}

export function getAppInjector(): Injector {
  return appInjector;
}
