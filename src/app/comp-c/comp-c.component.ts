import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent {
     
     paymentC:any;
     constructor(private carServise:CarService){
      this.carServise.moneyEventEmitter.subscribe((result)=>{
        console.log("compC: "+result)
        this.paymentC=result;
      })
     }
}
