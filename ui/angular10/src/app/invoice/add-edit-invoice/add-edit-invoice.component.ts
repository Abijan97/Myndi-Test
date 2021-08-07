import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-invoice',
  templateUrl: './add-edit-invoice.component.html',
  styleUrls: ['./add-edit-invoice.component.css']
})
export class AddEditInvoiceComponent implements OnInit {
  


  constructor(private service:SharedService) { }

  
  @Input() inv:any;
  InvoiceNo:string;
  InvoiceDate:string;
  IssuedPersonName:string;
  TotalAmount:string;


  InvoiceList:any=[];

  ngOnInit(): void {
   
    this.InvoiceNo=this.inv.InvoiceNo;
    this.InvoiceDate=this.inv.InvoiceDate;
    this.IssuedPersonName=this.inv.IssuedPersonName;
    this.TotalAmount=this.inv.TotalAmount;
  }
  
  addInvoice(){
    var val = { 
     
      InvoiceDate:this.InvoiceDate,
      IssuedPersonName:this.IssuedPersonName,
      TotalAmount:this.TotalAmount
    }
    this.service.addInvoice(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateInvoice(){
    var val = { InvoiceNo:this.InvoiceNo,
      InvoiceDate:this.InvoiceDate,
      IssuedPersonName:this.IssuedPersonName,
      TotalAmount:this.TotalAmount};
    this.service.updateInvoice(val).subscribe(res=>{
    alert(res.toString());
    });
  }
 

 

}
