import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$'), Validators.maxLength(20)]],
      age: [18, [Validators.required]],
      interests: this.fb.array([]),
      addressType: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      photo: ['']
    });
  }

  get interests(): FormArray {
    return this.registrationForm.get('interests') as FormArray;
  }

  addInterest(interest: string) {
    if (interest) {
      this.interests.push(this.fb.control(interest));
    }
  }

  removeInterest(index: number) {
    this.interests.removeAt(index);
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const userData = this.registrationForm.value;
      console.log('User data on submit', userData);

      this.userService.setUserProfile(userData);

      this.router.navigate(['/profile']);
    } else {
      console.log('Form is not valid');
    }
  }

   onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); 
      reader.onload = () => {
        this.registrationForm.patchValue({
          photo: reader.result 
        });
      };
    }
  }
}
