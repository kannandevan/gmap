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
  state:any;
  districts:any;
  index:any;
   constructor() {
    
   }
  public stateChanged(state){
  this.selectedState = state.target.value;
  this.index = state.currentTarget.options.selectedIndex;
  this.state = this.statesArray.states[this.index];
  this.districts=this.statesArray.states[this.index].districts;
  console.log(this.districts);

  }
  
}
