import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {OrderService} from "../service/order.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
     selectedRows: any ;

  constructor(private router: Router,
              private orderService: OrderService
             ) { }

  ngOnInit(): void {
    this.selectedRows= 'undefined';
  }


  settings = {
    selectMode: 'multi',

    columns: {

      id: {
        title: 'Product ID'
      },
      productName: {
        title: 'Product Name'
      },
      companyName: {
        title: 'Company Name'
      },
      wareHouse:{
        title: 'WareHouse'
      },
      quantityAvailToOrder:{
        title: 'Quantity Avail To Order'
      },
      quantityDispatched:{
        title: 'Quantity Dispatched'
      },
      quantity:{
        title: 'Quantity in Warehouse'
      },
      // email: {
      //   title: 'Email'
      // }
    }
  };

  data = [
    {
      // passed: "",
      id: 1,
      productName: "Leanne Graham",
      companyName: "Bret",
      wareHouse:"In Store",
      quantityAvailToOrder: "400",
      quantityDispatched: "50",
      quantity: "450",
      email: "Sincere@april.biz"
    },
    {
      // passed: 'No',
      id: 2,
      productName: "Ervin Howell",
      companyName: "Antonette",
      wareHouse:"In Store",
      quantity: "70",
      email: "Shanna@melissa.tv"
    },

    {
      id: 3,
      productName: "Leanne Graham",
      companyName: "Bret",
      wareHouse:"Katju Nagar",
      quantity: "500",
      email: "Sincere@april.biz"
    },
    {
      id: 4,
      productName: "Ervin Howell",
      companyName: "Antonette",
      wareHouse:"Manak Chowk",
      email: "Shanna@melissa.tv"
    },

    {
      id: 1,
      productName: "Leanne Graham",
      companyName: "Bret",
      quantity: "100",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      productName: "Ervin Howell",
      companyName: "Antonette",
      email: "Shanna@melissa.tv"
    },
    {
      id: 1,
      productName: "Leanne Graham",
      companyName: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      productName: "Ervin Howell",
      companyName: "Antonette",
      email: "Shanna@melissa.tv"
    },
    {
      id: 1,
      productName: "Leanne Graham",
      companyName: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      productName: "Ervin Howell",
      companyName: "Antonette",
      email: "Shanna@melissa.tv"
    },
    {
      id: 1,
      productName: "Leanne Graham",
      companyName: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      productName: "Ervin Howell",
      companyName: "Antonette",
      email: "Shanna@melissa.tv"
    },
    {
      id: 99,
      productName: "Ervin-1 Howell",
      companyName: "Antonette-1",
      email: "Shanna@melissa.tv"
    },


  ];

  onUserRowSelect(event: any) {
    this.selectedRows = event.selected;
    console.log(this.selectedRows);
  }

  createOrder() {
      this.orderService.setSelectedData(this.selectedRows)
      this.router.navigate(['order']);
  }
}
