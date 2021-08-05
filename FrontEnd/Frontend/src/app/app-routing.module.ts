import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importing  components
import {DepartmentComponent} from './department/department.component';
import {AddEditDepComponent} from './department/add-edit-dep/add-edit-dep.component'
//add routes
const routes: Routes = [
  { path: 'department',component:DepartmentComponent },
  {path:'add',component:AddEditDepComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
