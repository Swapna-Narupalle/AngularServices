//1)Create the services
//services hold the centralized logic of the project
import { Injectable } from "@angular/core";

@Injectable()
export class CarService{
    getMecList(){
        return ["Swapna", "Sindhu"];
    }

    getAvailableSlots(){
        let morningTime = "9:00 Am";
        let afternoonTime = "1:00 Pm";
        let eveningTime = "6:00 pm";
        
        return [morningTime, afternoonTime, eveningTime];
    }
}



//2)Register the services in app component:
//We can register the services in two ways: 
// 1-Component level Registration
// //2-Parent level component
//if we register in app.component.ts it can be applicable for only child classes.
//if we register in app.Module.ts it should be applicable for entire project.
//ig we register in compA it can be applicable for compA only.