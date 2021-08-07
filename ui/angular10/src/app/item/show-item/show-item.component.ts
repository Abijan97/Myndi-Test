import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css']
})
export class ShowItemComponent implements OnInit {

  constructor(private service:SharedService) { }

  ItemList:any=[];

  ModalTitle:string;
  ActivateAddEditIteComp:boolean=false;
  ite:any;




  ngOnInit(): void {

    this.refreshIteList();
  }

  
  addClick(){
    this.ite={
      ItemNo:0,
      UnitPrice:0,
      Quantity:0,
      total:0
    }
    this.ModalTitle="Add Item";
    this.ActivateAddEditIteComp=true;

  }

  editClick(item){
    this.ite=item;
    this.ModalTitle="Edit Department";
    this.ActivateAddEditIteComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteItem(item.ItemNo).subscribe(data=>{
        alert(data.toString());
        this.refreshIteList();
      })
    }
  }
  

  closeClick(){
    this.ActivateAddEditIteComp=false;
    this.refreshIteList();
  }


  refreshIteList(){
    this.service.getIteList().subscribe(data=>{
      this.ItemList=data;
     
    });
  }

}
