import { NgModule } from '@angular/core';
import { NgxD3GraphsComponent } from './ngx-d3-graphs.component';
import {MomentModule} from "angular2-moment";

@NgModule({
  declarations: [NgxD3GraphsComponent],
  imports: [
    MomentModule
  ],
  exports: [NgxD3GraphsComponent]
})
export class NgxD3GraphsModule { }
