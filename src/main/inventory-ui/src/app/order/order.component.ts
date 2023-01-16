import { Component, OnInit } from '@angular/core';
import {OrderService} from "../service/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  selectedRows: any ;
  orderedProducts: any;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
   this.selectedRows = this.getSelectedOrder();
   this.orderedProducts = this.selectedRows
  }

  getSelectedOrder(){
    return this.orderService.getSelectedData();
  }

  createOrder() {
    console.log(this.orderedProducts);
  }

  setSaleQunatity(saleQuantity: any,index: number) {
    this.orderedProducts[index].saleQuanitity = saleQuantity;
  }


  setBuyerName(saleQuantity: any,index: number) {
    this.orderedProducts[index].buyerName = saleQuantity;
  }


  setBuyerCompany(saleQuantity: any, index: number) {
    this.orderedProducts[index].buyerCompany = saleQuantity;
  }
}
