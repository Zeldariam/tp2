import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  n1:number;
  n2:number;
  produit:number;
  constructor() { }

  ngOnInit() {
  }

}
