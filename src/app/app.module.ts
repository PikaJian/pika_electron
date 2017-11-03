import {NgModule} from "@angular/core";
import {AngularTwitterAppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AngularTwitterAppComponent
  ],
  providers: [],
  bootstrap: [AngularTwitterAppComponent]
})
export class AppModule {

}