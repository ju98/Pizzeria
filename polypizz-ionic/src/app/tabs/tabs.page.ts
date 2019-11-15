import { Component, OnInit } from '@angular/core';
import {PanierPage} from '../panier/panier.page';
import {CartePage} from '../carte/carte.page';
import {HomePage} from '../home/home.page';
import {ComptePage} from '../compte/compte.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage  {
  panierPage = PanierPage;
  cartePage = CartePage;
  homePage = HomePage;
  comptePage = ComptePage;

}
