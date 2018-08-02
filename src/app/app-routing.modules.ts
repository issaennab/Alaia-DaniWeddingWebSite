import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { MainComponent } from './main.component'
import { GuestInfoComponent } from './guest-info.component'
import { GalleryComponent } from './gallery.component'

export const appRoutes: Routes = [

    { path: 'main', component: MainComponent, redirectTo: '',},
    { path: 'guest-info', component: GuestInfoComponent },
    { path: 'gallery', component: GalleryComponent },
    {
        path: '',
        //   redirectTo: '/main',
        component: MainComponent,
        pathMatch: 'full'
    }
    // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )

    ],
})

export class AppModule { }