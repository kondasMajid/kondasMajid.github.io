import { MatDialogConfig } from '@angular/material';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

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
}
