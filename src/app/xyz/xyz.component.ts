import { Component, OnInit, Input } from '@angular/core';

declare var require: any;
const jsbarcode = require('jsbarcode');

interface Item {
  ITEMID: string;
  ITEMNAME?: string;
  Notes?: string;
}

interface LineItem {
  BinLocation: string;
  RawItem: Item;
  RequestedQuantity: number;
  PaintedItem: Item;
  PaintedQuantity?: number;
}

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent implements OnInit {
  @Input() BatchNumber = 'BatchNumber';
  @Input() CONFIGID = 'CONFIGID';
  @Input() PowderID = 'PowderID';
  @Input() StepNumber = 1;
  @Input() lineItems: Array<LineItem> = [];

  ngOnInit(): void {
    jsbarcode('#app-xyz-barcode', this.BatchNumber);
  }
}
