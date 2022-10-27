import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class ContactUsModule { }
