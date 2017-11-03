import 'core-js/shim.js';
import 'zone.js/dist/zone.js';

import {AppModule} from "./app/app.module";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
platformBrowserDynamic().bootstrapModule(AppModule);