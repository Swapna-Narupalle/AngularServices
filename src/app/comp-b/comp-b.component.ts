import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent {
    Timings:any;
    paymentB:any;
    getCarsList:any;

    constructor(private carService:CarService){
       this.Timings=this.carService.getAvailableSlots();

       this.carService.moneyEventEmitter.subscribe((result)=>{
        console.log("compB: "+result);
        this.paymentB=result;
      })

      
    }

    evtGetHydInfo(){
        this.getCarsList = this.carService.getAllInfo("Hyderabad");
      }

    

}
