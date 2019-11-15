import { Component, OnInit } from '@angular/core';
import {PanierService} from '../panier.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.page.html',
  styleUrls: ['./carte.page.scss'],
})
export class CartePage implements OnInit {

  panier = [];
  items = [];
  sliderConfig = {
  }
  constructor(private panierService: PanierService, private router: Router){}
  ngOnInit(): void {
    this.panier = this.panierService.getPanier();
    this.items = this.panierService.getProducts();
  }
  addToPanier(product) {
    this.panierService.addProduct(product);
  }
  openPanier() {
    this.router.navigate(['panier']);
  }

}
