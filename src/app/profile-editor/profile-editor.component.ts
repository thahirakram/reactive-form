import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      State: [''],
      zip: [''],
    })
  });
  constructor(private fb :FormBuilder) { }

  ngOnInit() {
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'thairform2',
      address: {
        street: '150 kalyannagar'
      }
    });
  }
}
