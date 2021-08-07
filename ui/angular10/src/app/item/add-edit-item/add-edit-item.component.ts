import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.component.html',
  styleUrls: ['./add-edit-item.component.css']
})
export class AddEditItemComponent implements OnInit {

  constructor(private service:SharedService) { }

  
  @Input() ite:any;
  ItemNo:string;
  UnitPrice:string;
  Quantity:string;
  Total:string;

  ngOnInit(): void {

    this.ItemNo=this.ite.ItemNo;
    this.UnitPrice=this.ite.UnitPrice;
    this.Quantity=this.ite.Quantity;
    this.Total=this.ite.Total;
  }

  addItem(){
    var val = {ItemNo:this.ItemNo,
              UnitPrice:this.UnitPrice,
              Quantity:this.Quantity,
              Total:this.Total};
    this.service.addItem(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateItem(){
    var val = {ItemNo:this.ItemNo,
      UnitPrice:this.UnitPrice,
      Quantity:this.Quantity,
      Total:this.Total};
    this.service.updateItem(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
