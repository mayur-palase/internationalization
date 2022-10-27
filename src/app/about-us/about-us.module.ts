import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class AboutUsModule { }
