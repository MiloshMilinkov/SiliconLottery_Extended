import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  constructor( private fb: FormBuilder, private accountService: AccountService){}

  ngOnInit(): void {
    this.getAddressFormValues();
  }
  
  checkoutForm = this.fb.group({
    addressForm: this.fb.group({
      streetName: ['', Validators.required],
      streetNumber: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required]
    }),
    deliveryForm: this.fb.group({
      delivery: ['', Validators.required]
    }),
    paymentForm: this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiryMonth: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])$/)]],
      expiryYear: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
    })
  })

  getAddressFormValues(){
    this.accountService.getUserAddress().subscribe({
      next: address => {
        address && this.checkoutForm.get('addressForm')?.patchValue(address)
      }
    })
  }
}
