import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppEffects } from './store/app.effects';
import { AppReducer } from './store/app.reducer';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { environment } from './environments/environment';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    StoreModule.forRoot({ ['AppState']: AppReducer }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      logOnly: environment.production, // Restrict extension to log-only mode
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [],
})
export class AppModule {}
