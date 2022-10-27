import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AboutUsModule } from './about-us/about-us.module';
import { ContactUsModule } from './contact-us/contact-us.module';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AboutUsModule,
    ContactUsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
  })
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
