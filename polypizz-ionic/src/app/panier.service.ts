import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private data = [
      {
    category : 'Pizza viande',
    expanded : true,
    products : [
      {id : 0, name : 'Pizza Poulet', price : '5'}
    ]
  },
    {
      category : 'Pizza vegetarienne',
      expanded : true,
      products : [
        {id : 1, name : 'Pizza Poivron', price : '6'}
      ]
    },
    {
      category : 'Pizza vegan',
      expanded : true,
      products : [
        {id : 2, name : 'Pizza tofu', price : '6'}
      ]
    }
];

  private panier = [];

  constructor() { }
  getProducts() {
    return this.data;
  }
  getPanier() {
    return this.panier;
  }
  addProduct(product) {
    this.panier.push(product);
  }
}
