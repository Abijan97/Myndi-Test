import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor() { }

  DepartmentId:string;
  DepartmentName:string;



  ngOnInit(): void {
  

}

addDepartment(){
  var val= {DepartmentId:this.DepartmentId};
  this.service.addDepartment(val).subscribe(res=>
    alert(res.toString()));
}

}
