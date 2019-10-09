import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
  nombre1:number;
  nombre2:number;
  somme:number;
     onKeyUp(event:any){
      console.log(event.target + " "+event.target.value);
      this.nombre1  = event.target.value;
    } 
    calcul(){
      return this.nombre1*this.nombre1;

    }
    onKeyUp2(event:any){
      console.log(event.target + " "+event.target.value);
      this.nombre2 = event.target.value;
    } 
    
    actif(n1:string,n2:string){
      if(n1=='' || n2==''){
        return true;
      }
      return false;
    }

    calculSomme(val:number){
      this.nombre2=val;
      console.log(val); 
      console.log(Number(this.nombre1)+Number(this.nombre2));
      this.somme= (Number(this.nombre1)+Number(this.nombre2));
    }
   
  /*onKeyUp(event:KeyboardEvent){
    this.contenu = 'Bonjour ' + (<HTMLInputElement>event.target).value;
    console.log(this.contenu);
  }*/
  constructor() { }

  ngOnInit() {
  }

}
