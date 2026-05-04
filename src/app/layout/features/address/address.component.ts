import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../core/services/order/order.service';

@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css',
})
export class AddressComponent {

  private readonly activatedRoute : ActivatedRoute = inject(ActivatedRoute)
  private readonly orderService  : OrderService = inject(OrderService)


  addressForm : FormGroup = new FormGroup({

phone: new FormControl('', [Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),

details : new FormControl('', [Validators.required]) ,

city : new FormControl('', [Validators.required]) ,



  })


  cartId = signal <string>('')


  ngOnInit(): void {
    this.getCartIdFromURL()
  }



  getCartIdFromURL(){
    this.activatedRoute.paramMap.subscribe(res=>{
      this.cartId.set(res.get('id')!)
    })
  }

  addressSubmit(event:any){
    if(event.submitter.value == "cash")
    {

    }
    else if(event.submitter.value == "visa")
    {
      this.orderService.checkout(this.cartId(), this.addressForm.value).subscribe(res=>{
        
        window.open(res.session.url)
      })
    }
  }


}
