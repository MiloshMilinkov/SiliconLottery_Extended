import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { CheckoutSuccessComponent } from '../checkout/checkout-success/checkout-success.component';


const routes: Routes = [
  {path: '', component:ContactComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ContactRoutingModule { }
