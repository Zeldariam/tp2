import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {
  nom:string="Popeye";
  age:number=16;
  image:string="././assets/popeye.jpg";

  mineur(){ 
    if(this.age<18){
      return true;
    }
    return false;
  }
  constructor() { }

  ngOnInit() {
  }

}
