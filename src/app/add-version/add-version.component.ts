import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-add-version',
  templateUrl: './add-version.component.html',
  styleUrls: ['./add-version.component.css']
})
export class AddVersionComponent implements OnInit {

  constructor(private http:Http) { }

  //the variables of the componenet
  public dependencies=[{name:""}];
  public version = {
    version_number:"",
    dependencies_attributes:this.dependencies
  }
  public gemName:any;
    private baseUrl = "https://whispering-journey-17183.herokuapp.com/";
  //end of the variables

  ngOnInit() {
  }



  public addDependency()
  {
    this.dependencies.push({name:""});
    console.log("adding");
  }

  public addVersion()
  {
    console.log(this.version);
    this.http.post(this.baseUrl+"add_verison",{name:this.gemName,version:this.version}).subscribe((data)=>{
      console.log(data.json());
    });

  }


}
