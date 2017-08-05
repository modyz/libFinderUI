import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Headers, Http,URLSearchParams } from '@angular/http';
import {MdDialog} from '@angular/material';
import {AddVersionComponent} from '../add-version/add-version.component'
import {LoadingComponent} from '../loading/loading.component'
@Component({
  selector: 'app-gem-details',
  templateUrl: './gem-details.component.html',
  styleUrls: ['./gem-details.component.css']
})
export class GemDetailsComponent implements OnInit {

  //the variables that i am going to use in this missrable componenet
  private gemName:string;
  private baseUrl = "https://whispering-journey-17183.herokuapp.com/";
  public gem:any;
  public selectedVersion:any;
  private loading:any;
  //end of the missrable variables

  constructor(private route:ActivatedRoute,private http:Http,private dialog:MdDialog,private router:Router) { }


  ngOnInit() {
        
        
        this.loading  = this.dialog.open(LoadingComponent, {
            height: '150px',
            width: '150px',
        });
     this.gemName = this.route.snapshot.paramMap.get('name');
     this.getGem();
     
  }

   ngAfterViewInit() {
  }


  private getGem()
  {

    let params = new URLSearchParams();
    params.set('name', this.gemName);
    this.http.get(this.baseUrl+"gem",{params}).subscribe((data)=>{
      this.gem=data.json().gem;
       console.log(this.gem);
       this.selectedVersion = this.gem.versions[0];
       this.loading.close();
    });
  }


  public selectVersion(version)
  {
      this.selectedVersion = version;
  }


  public addVersion()
  {
        let dialogRef = this.dialog.open(AddVersionComponent, {
            height: '600px',
            width: '600px',
        });
        dialogRef.componentInstance.gemName=this.gemName;
        dialogRef.afterClosed().subscribe(()=>{
           this.loading  = this.dialog.open(LoadingComponent, {
            height: '150px',
            width: '150px',
        });
          this.getGem();
        })
  }

  public goHome()
  {
    this.router.navigate(['home']);
  }





}
