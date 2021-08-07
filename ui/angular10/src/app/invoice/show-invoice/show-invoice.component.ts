import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-invoice',
  templateUrl: './show-invoice.component.html',
  styleUrls: ['./show-invoice.component.css']
})
export class ShowInvoiceComponent implements OnInit {

  constructor(private service:SharedService) { }

  InvoiceList:any=[];

  
  ModalTitle:string;
  ActivateAddEditInvComp:boolean=false;
  inv:any;

  ngOnInit(): void {
    this.refreshInvList();
  }

  addClick(){
    this.inv={
      InvoiceNo:0,
      UnitPrice:0,
      Quantity:0,
      total:0
    }
    this.ModalTitle="Add Invoice";
    this.ActivateAddEditInvComp=true;

  }

  editClick(invoice){
    this.inv=invoice;
    this.ModalTitle="Edit Invoice";
    this.ActivateAddEditInvComp=true;
  }

  deleteClick(invoice){
    if(confirm('Are you sure??')){
      this.service.deleteInvoice(invoice.InvoiceNo).subscribe(data=>{
        alert(data.toString());
        this.refreshInvList();
      })
    }
  }
  

  closeClick(){
    this.ActivateAddEditInvComp=false;
    this.refreshInvList();
  }


  refreshInvList(){
    this.service.getInvoice().subscribe(data=>{
      this.InvoiceList=data;
     
    });
  }


}
