import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})

export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any=[];

  ModalTitle:string | undefined;
  ActivateAddEditDepComp:boolean=false;
  dep:any;



  ngOnInit(): void {
    this.refreshDipList();
  }

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="AddDepartment";
    this.ActivateAddEditDepComp=true;


  }
  
  deleteClick(item)
  
  {
    
    if(confirm('Are you sure??')){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
        alert(data.toString());
        this.refreshDipList();
      })
    }
  }

// editClick(item){
//   this.dep=item;
//   this.ModalTitle="Edit Department";
//   this.ActivateAddEditDepComp=true


// }


  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDipList();
  }

  refreshDipList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data;
    });
  }

}
