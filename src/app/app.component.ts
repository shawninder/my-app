import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  data = {
    BatchNumber: '34',
    CONFIGID: 'BK',
    PowderID: 'PROTEC',
    StepNumber: 1,
    lineItems: [{
      BinLocation: 'BIN#1',
      RawItem: {
        ITEMID: '103342',
        ITEMNAME: 'CA CADRE FRAME LBM'
      },
      RequestedQuantity: 16,
      PaintedItem: {
        ITEMID: '103342-P',
      },
    }, {
      BinLocation: 'BIN#2',
      RawItem: {
        ITEMID: '103351',
        ITEMNAME: 'CA CAP LBM CCH DECO YOKE'
      },
      RequestedQuantity: 16,
      PaintedItem: {
        ITEMID: '103351-P',
      },
    }, {
      BinLocation: 'BIN#3',
      RawItem: {
        ITEMID: '114375',
        ITEMNAME: 'CA CAP LBM NEW'
      },
      RequestedQuantity: 16,
      PaintedItem: {
        ITEMID: '114375-P',
      },
    }, {
      BinLocation: 'BIN#4',
      RawItem: {
        ITEMID: '117853',
        ITEMNAME: 'CA HOUSING LED LBM'
      },
      RequestedQuantity: 16,
      PaintedItem: {
        ITEMID: '117853-P',
      },
    }, {
      BinLocation: 'BIN#5',
      RawItem: {
        ITEMID: '122224',
        ITEMNAME: 'CA HOUSING SUP PS LBM FREE AIMING'
      },
      RequestedQuantity: 16,
      PaintedItem: {
        ITEMID: '122224-P',
      },
    }, {
      BinLocation: 'BIN#6',
      RawItem: {
        ITEMID: '118554',
        ITEMNAME: 'TL YOKE LBM SY WITH TWO HOLES ON THE SIDES FOR 3GV'
      },
      RequestedQuantity: 8,
      PaintedItem: {
        ITEMID: '118554-P',
      },
    }, {
      BinLocation: 'BIN#7',
      RawItem: {
        ITEMID: '118555',
        ITEMNAME: 'TL YOKE LBM WITH TWO HOLES ON THE SIDES FOR 3GV'
      },
      RequestedQuantity: 16,
      PaintedItem: {
        ITEMID: '118555-P',
      },
    }]
  };
  print(): void {
    window.print();
  }
}
