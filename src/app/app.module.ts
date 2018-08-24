import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutes } from './app-routing.modules';
import { MainComponent } from './main.component'
import { GuestInfoComponent } from './guest-info.component'
import { GalleryComponent } from './gallery.component'
import { RSVPService } from './main.service'
import { HttpModule } from '@angular/http';

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
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [TRANSLATION_PROVIDERS, TranslateService, RSVPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
