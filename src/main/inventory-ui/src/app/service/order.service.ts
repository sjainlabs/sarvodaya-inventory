import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _selectedData: any;

  constructor() { }


  getSelectedData(): any {
    return this._selectedData;
  }

  setSelectedData(value: any) {
    this._selectedData = value;
  }
}
