import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-add-gem',
  templateUrl: './add-gem.component.html',
  styleUrls: ['./add-gem.component.css']
})
export class AddGemComponent implements OnInit {

  public operatingSystems:any;
  public dependencies=[{name:""}];
  private baseUrl = "https://whispering-journey-17183.herokuapp.com";
  public gem =
  {
			"name": "",
			"operating_system_id": "",
			"versions_attributes":[{
				"version_number": "",
				"dependencies_attributes":this.dependencies
				}]
		};
  constructor(private http:Http) { }

  ngOnInit() {
    this.getOperatingSystems();
  }


  private getOperatingSystems()
  {
    this.http.get(this.baseUrl+"/operating_systems").subscribe((data)=>{
      this.operatingSystems = data.json();
      console.log( this.operatingSystems);
    })
  }

  

  public addDependency()
  {
    this.dependencies.push({name:""});
    console.log("adding");
  }

  public addGem()
  {
    this.http.post(this.baseUrl+"/gems",{"gem":this.gem}).subscribe((data)=>{
      console.log(data.json());
    })
    console.log(this.gem);
  }






}
