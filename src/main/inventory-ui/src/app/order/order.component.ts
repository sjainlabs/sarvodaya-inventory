import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {OrderService} from "../service/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  selectedRows: any ;
  orderedProducts: any;
  orderCompleted : any

  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit(): void {
   this.selectedRows = this.getSelectedOrder();
   this.orderedProducts = this.selectedRows
  }

  getSelectedOrder(){
    return this.orderService.getSelectedData();
  }

  submitOrder() {
    console.log("ordering Products");

    console.log(this.orderedProducts);
    this.orderCompleted = "order-created"
    // this.router.navigate(['invoice']);
    // console.log("this.orderedProducts");

  }

  setSaleQunatity(saleQuantity: any,index: number) {
    this.orderedProducts[index].saleQuanitity = saleQuantity.data;
  }


  setBuyerName(buyerName: any,index: number) {
    this.orderedProducts[index].buyerName = buyerName.data;
  }


  setBuyerCompany(buyerQuantity: any, index: number) {
    this.orderedProducts[index].buyerCompany = buyerQuantity.data;
  }

  generateInvoice(){
    this.router.navigate(['invoice']);
  }
}
