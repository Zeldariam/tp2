import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  titre:string="Operations sur les tableaux";
   list: number[] = [41, 18, 23,58];
  minimum(){
    var len:number = this.list.length;
    var min:number = this.list[0];
    while (len--) {
      if (this.list[len] < min) {
        min = this.list[len];
      }
    }
    return min;
  }
  moyenne(){
    var len:number = this.list.length;
    var moy:number= 0;
    for ( let i=0; i<len; i++){
      moy+=this.list[i];
    }
    moy= moy/len;
    return moy;
  }
  constructor() { }

  ngOnInit() {
  }

}
