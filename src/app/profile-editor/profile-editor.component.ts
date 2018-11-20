import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators,} from '@angular/forms';
import { FormArray } from '@angular/forms';
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
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });
  constructor(private fb :FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    console.warn(this.profileForm.value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'thairform2',
      address: {
        street: '150 kalyannagar'
      }
    });
  }
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
   addalias() {
      this.aliases.push(this.fb.control(''));
   }
}
