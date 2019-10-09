import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindingcomponent',
  templateUrl: './bindingcomponent.component.html',
  styleUrls: ['./bindingcomponent.component.css']
})
export class BindingcomponentComponent implements OnInit {
  nom:string="ines";
  ta:number=this.nom.length;
  monom:string=this.nom.toUpperCase();
  age:number=19;
  message:string="DSI";
  info(){
    return this.nom+ " a pour age "+this.age;
  }
  actif:boolean=true;
  onAfficher(){
    console.log(this.nom);
  }
  contenu:string;
   /* onKeyUp(event:any){
    console.log(event.target + " "+event.target.value);
    this.contenu  = event.target.value;
  } */ 
  onKeyUp(event:KeyboardEvent){
    this.contenu = 'Bonjour ' + (<HTMLInputElement>event.target).value;
    console.log(this.contenu);
  }
  onAfficherContenu(val:string){
    console.log(val);
  }
  constructor() { }
  
  ngOnInit() {
  }

}
