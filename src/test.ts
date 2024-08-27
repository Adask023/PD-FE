import 'zone.js/testing';  // Poprawiony import dla zone-testing
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Konfiguracja testów Angular
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Importowanie wszystkich plików testowych
import './app/app.component.spec';
