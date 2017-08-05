import { Component, OnInit } from '@angular/core';
import {AddGemComponent} from'../add-gem/add-gem.component'
import {MdDialog} from '@angular/material';
import { Headers, Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private baseUrl = "https://whispering-journey-17183.herokuapp.com";
  public recentGems:any;
  public gemName;

  constructor( public dialog: MdDialog,private http:Http,private router:Router) { }

  ngOnInit() {
    this.getRecentGems();
  }

  public searchGem()
  {
    this.router.navigate(['/gem/'+this.gemName]);
  }

  public addGem()
  {
        let dialogRef = this.dialog.open(AddGemComponent, {
            height: '600px',
            width: '600px',
        });
  }


  private getRecentGems()
  {
    this.http.get(this.baseUrl+"/recent_gems").subscribe((data)=>{
      console.log(this.recentGems =data.json());

    })   
  }

}
