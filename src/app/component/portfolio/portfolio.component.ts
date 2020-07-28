import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { HireComponent } from '../hire/hire.component';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  show: boolean = false;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  Project1(){
    const dialogHire =  new  MatDialogConfig();
    this.dialog.open(HireComponent, {
      width : '600px',
      height : '600px',
    })
    console.log('hello world')
  }
}
