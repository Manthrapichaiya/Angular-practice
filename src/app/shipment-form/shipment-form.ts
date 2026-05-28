import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shipment-form',
  imports: [FormsModule],
  templateUrl: './shipment-form.html',
  styleUrl: './shipment-form.css',
})
export class ShipmentForm {
   isDisabled:boolean=true;
     customer_name!: string;
  status!:string;
     checkForm(){
    if(this.customer_name != '' && this.status != "")
    {
      this.isDisabled = false
    }
    else{
      this.isDisabled = true
    }
  }
  updateCards(){
    // this.total++
    // if(this.status == 'pending')
    //  this.pending++;
    // else if(this.status == 'delivered')
    //   this.delivered++;
    // else
    //   this.cancel++
  }
}
