import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';



@Component({
  selector: 'addEditDep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  DepartmentId:string | undefined;
  DepartmentName:string | undefined;

  ngOnInit(): void {
  this.DepartmentId=this.DepartmentId;
  this.DepartmentName=this.DepartmentName;

}

addDepartment(){
  var val={DepartmentId:this.DepartmentId,
  DepartmentName:this.DepartmentName};
  this.service.addDepartment(val).subscribe(res=>{alert(res.toString());
  });
}


updateDepartment(){
  var val = {DepartmentId:this.DepartmentId,
    DepartmentName:this.DepartmentName};
  this.service.updateDepartment(val).subscribe(res=>{
  alert(res.toString());
  });
}
}
