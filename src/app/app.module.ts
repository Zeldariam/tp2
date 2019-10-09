import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingcomponentComponent } from './bindingcomponent/bindingcomponent.component';
import { TableauComponent } from './tableau/tableau.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { CalculComponent } from './calcul/calcul.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingcomponentComponent,
    TableauComponent,
    PropertybindingComponent,
    CalculComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
