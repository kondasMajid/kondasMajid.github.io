import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name;
  email;
  msg;
  send;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onModal(){
    const dialogConfig =  new  MatDialogConfig();
    // dialog.open(UserProfileComponent, {
    //   height: '400px',
    //   width: '600px',
    // });
    // this.dialog.open(ContactComponent)
  }

  register(){
    let user = {
      name: '',
      email: ''
    }

  //   // this.http.sendEmail('http://localhost:3000/sendmail', user).subscribe(
  //     data => {
  //       let res: any = data;
  //       console.log(`${user.name} is succesffuly registerd`);
  //     )
  //    }, err=> {
    
  // }

  }
}
