import { Component, OnInit , ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ContactComponent } from '../contact/contact.component';
import { HireComponent } from '../hire/hire.component';

import * as $ from 'jquery';
import 'materialize-css';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Id = 'D E S I G N E R '
  Tag = 'Junior Software developer';
  sub_heading = '  ';
  
  
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onModal(){
    const dialogConfig =  new  MatDialogConfig();
    // dialog.open(UserProfileComponent, {
      dialogConfig.width = '250px',
      dialogConfig.height = '600px',
    // });
    this.dialog.open(ContactComponent, {
      width : '600px',
      height : '600px',
    })
  }

  onHire(){
    const dialogHire =  new  MatDialogConfig();
    this.dialog.open(HireComponent, {
      width : '600px',
      height : '600px',
    })
    console.log('hello world')
  }
}
