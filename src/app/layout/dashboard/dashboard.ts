import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink,FormsModule,Navbar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  customer_name!: string;
  status!:string;
  isDisabled:boolean=true;
  total : number = 150 ;
  pending : number =30;
  delivered : number =100;
  cancel : number=20;

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
    this.total++
    if(this.status == 'pending')
     this.pending++;
    else if(this.status == 'delivered')
      this.delivered++;
    else
      this.cancel++
  }
}
