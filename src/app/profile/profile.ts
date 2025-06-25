import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormsModule,],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
 fname = "";
 lname = "";
 age = "";
 dob = "";
 email = "";
 phone = "";
}
