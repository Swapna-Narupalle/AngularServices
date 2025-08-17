//1)Create the services
//services hold the centralized logic of the project
import { EventEmitter, Injectable } from "@angular/core";
import { HydCarService } from "./HydCar.service";

//can use this service by using constructor
@Injectable()
export class CarService{
    // To get service from another service, wes should add the other service's name[HydCarService] in the constructor
    // then using the local variable in the constructor, we'll call the methods in the other service's [HydCarService].
 
    constructor(private HydService:HydCarService){
        
    }

    getMecList(){
        return ["Swapna", "Sindhu"];
    }

    getAvailableSlots(){
        let morningTime = "9:00 Am";
        let afternoonTime = "1:00 Pm";
        let eveningTime = "6:00 pm";
        
        return [morningTime, afternoonTime, eveningTime];
    }
    
    moneyEventEmitter = new EventEmitter<any>();
    paymentDetails(moneyNotify:any){
       this.moneyEventEmitter.emit(moneyNotify);
    }

    getAllInfo(Location:string){
        if(Location=="Bangalore")
        {
           return "Cars List: 200000";
        }
        else if(Location=="Hyderabad"){
            let Info = this.HydService.getCarsListOfHyd();
            return Info;
        }
        else
        {
           return "No service";
        }
        return null;
    }


}



//2)Register the services in app component:
//We can register the services in two ways: 
// 1-Component level Registration
// //2-Parent level component
//if we register in app.component.ts it can be applicable for only child classes.
//if we register in app.Module.ts it should be applicable for entire project.
//ig we register in compA it can be applicable for compA only.