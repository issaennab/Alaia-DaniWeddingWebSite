import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutes } from './app-routing.modules';
import { MainComponent } from './main.component'
import { GuestInfoComponent } from './guest-info.component'
import { GalleryComponent } from './gallery.component'

import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from './translate';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GuestInfoComponent,
    GalleryComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TRANSLATION_PROVIDERS, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
