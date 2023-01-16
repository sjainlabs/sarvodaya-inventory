import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  orderedProducts: any;



  constructor() { }

  ngOnInit(): void {

  }

  data = [
    {
      // passed: "",
      date: "12-Nov-2022",
      id: 1,
      productName: "Leanne Graham",
      companyName: "Bret",
      buyerName: "Bret Lee",
      buyerCompany: "ABC LTD",
      wareHouse:"In Store",
      quantityAvailToOrder: "400",
      quantityDispatched: "50",
      quantity: "450",
      email: "Sincere@april.biz"
    },
    {
      // passed: 'No',
      date: "11-Nov-2022",
      id: 2,
      productName: "Ervin Howell",
      companyName: "Antonette",
      buyerCompany: "ACC Pvt LTD",
      buyerName: "Mr Abhi",
      wareHouse:"In Store",
      quantity: "70",
      email: "Shanna@melissa.tv"
    }];

  settings = {
    actions:{
      add : false,
      edit : false,
      delete : false
    },
    columns: {

      date: {
        title: 'Date'
      },
      productName: {
        title: 'Product Name'
      },
      companyName: {
        title: 'Company Name'
      },
      quantity:{
        title: 'Quantity'
      },
      buyerName:{
        title: 'Buyer Name'
      },
      buyerCompany:{
        title: 'Buyer Company'
      }

      // email: {
      //   title: 'Email'
      // }
    }
  };

}
