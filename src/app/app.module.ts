import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavComponent } from './component/nav/nav.component';
import { CvComponent } from './component/cv/cv.component';
import { ContactComponent } from './component/contact/contact.component';
// import { PassThrough } from 'stream';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MatDialog, MatDialogConfig, MatFormFieldModule, MatInputModule,MatCardModule, MatButtonModule } from "@angular/material";
import { HireComponent } from './component/hire/hire.component';
import {MatSelectModule} from '@angular/material/select';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
// import 'materialize-css';
//  import { MaterializeModule } from 'angular2-materialize';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CvComponent,
    ContactComponent,
    HireComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //Angullar Material
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    // MaterializeModule
    // MDBBootstrapModule.forRoot()
    // PassThrough: true;
  ],
  exports: [
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    HireComponent
  ]
})
export class AppModule { }
