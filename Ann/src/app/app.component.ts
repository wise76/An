import { Component } from '@angular/core';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ann';
  score:number = 49;
  name: string = "นายอภิสิทธิ์ หามนตรี";
  studentlist = [{
    studentId: "5921602825",
    name: "Apisit",   
    weight : 56,
    height : 171,
  }, {
    studentId: "5921602825",
    name: "B",   
    weight : 45,
    height : 171,
  }, {
    studentId: "5921602825",
    name: "C",   
    weight : 100,
    height : 171,
  }];
  constructor(){
    this.studentlist.map((object,index)=>{
      let obj:any = object;
      obj.bmi = (object.weight/((object.height/100)*(object.height/100))).toFixed(2);
      return obj;
      console.log
  })
}
}