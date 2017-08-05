import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AddGemComponent } from './add-gem/add-gem.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdDialogModule,MdButtonModule,MdInputDirective,MdInputModule,MdInputContainer,MdSelectModule,MdProgressSpinnerModule} from '@angular/material';
import 'hammerjs';

import { ErrorsHandlerComponent } from './errors-handler/errors-handler.component';
import { GemDetailsComponent } from './gem-details/gem-details.component';
import {MdCardModule} from '@angular/material';
import { AddVersionComponent } from './add-version/add-version.component';
import { LoadingComponent } from './loading/loading.component';
//routes of the application
const appRoutes =[
  {path:"home",component:HomeComponent},
  {path:"",component:HomeComponent},
  {path:"gem/:name",component:GemDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddGemComponent,
    ErrorsHandlerComponent,
    GemDetailsComponent,
    AddVersionComponent,
    LoadingComponent
  ],
  imports: [
     RouterModule.forRoot(
      appRoutes,
    
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MdDialogModule,
    MdInputModule,
    MdSelectModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    HttpModule,
    FormsModule,
    MdCardModule
  ],
  entryComponents: [AddGemComponent,AddVersionComponent,LoadingComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
