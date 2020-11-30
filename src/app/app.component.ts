
import { HttpClient } from '@angular/common/http';
import { Component  } from '@angular/core';
import {} from 'googlemaps';


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
  selectedDistrict:any;
  state:any;
  districts:any;
  number:any;
  index:any;
  lat: number = 9.5917539596557617;
  lng: number = 76.531906127929687;
  baseUrl: string = 'http://dev.virtualearth.net/REST/v1/Locations/';
  urlAdd:string = '?o=json&key=';
  key : string ='AohIKn07G_cGHbkr9mqaeVTe47o47k-T6W_VfK_MZcwNZzGKOn8Jcv6IuD-btkZc';
  coordinates :object;


   constructor(private http: HttpClient) {
    
   }
   

  public stateChanged(state){
  this.selectedState = state.target.value;
  this.number = state.currentTarget.options.selectedIndex;
  this.index = this.number-1
  this.state = this.statesArray.states[this.index];
  this.districts=this.statesArray.states[this.index].districts;
  }



  public districtSelected(district){
    console.log(district.target.value);
    this.getLatlngJson(district.target.value);
  }

 getLatlngJson(district : string){
   return this.http.get(this.baseUrl + district + this.urlAdd +this.key ).subscribe(data =>{
    this.coordinates =data;
    
    console.log(this.coordinates);
     this.lat = JSON.parse(JSON.stringify(this.coordinates))['resourceSets'][0]['resources'][0]['point']['coordinates'][0];
     this.lng = JSON.parse(JSON.stringify(this.coordinates))['resourceSets'][0]['resources'][0]['point']['coordinates'][1];
   });
  
}

  
  
  
}
