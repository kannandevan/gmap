import { Component, Pipe } from '@angular/core';


import data from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'gmap';
  statesArray:any = data;
  selectedState:any;
  states:any;
  districts:any;
   constructor() {
    
   }
  public stateChanged(state){
  this.selectedState = state.target.value;
  this.states = this.statesArray.states;
  console.log(this.states);
  console.log(this.selectedState);
  }
  
}
