import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig,MatFormFieldModule } from '@angular/material';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  onHire(){
    const dialogConfig =  new  MatDialogConfig();
    // dialog.open(UserProfileComponent, {
    //   height: '400px',
    //   width: '600px',
    // });
    this.dialog.open(HireComponent)
  }
}
