import { Component } from '@angular/core';
import {CarService} from '../car.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
  
})
export class CompAComponent {
     constructor(private carService:CarService){

     }
     MecsList:any;
     getMecsList(){
      this.MecsList = this.carService.getMecList();
     }
     
     //component to component
     evtSendMoney(){
      let paymentAmount = "2000 Rs";
      this.carService.paymentDetails(paymentAmount);
     }
     
     carListInfo:any;
     //service to service
     getInfoOfBangalore(){
       this.carListInfo = this.carService.getAllInfo("Bangalore");  //Cars List:20000
     }
}
