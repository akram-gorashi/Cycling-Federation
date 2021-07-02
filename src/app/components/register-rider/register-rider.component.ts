import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-rider',
  templateUrl: './register-rider.component.html',
  styleUrls: ['./register-rider.component.scss'],
})
export class RegisterRiderComponent implements OnInit {
  registerNewRiderFormGroup: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.registerNewRiderFormGroup = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      tshirt_color: [null, Validators.required],
      image: [null, Validators.required],
      riders_ids: [null, Validators.required],
    });
  }

  get formControls() {
    return this.registerNewRiderFormGroup.controls;
  }

  submitRider() {
    if (this.registerNewRiderFormGroup.invalid) {
      this.registerNewRiderFormGroup.markAllAsTouched();
      const firstElementWithError = document.querySelector(
        '.ng-invalid[formControlName]'
      );
      window.scroll({
        top: firstElementWithError?.scrollTop,
        behavior: 'smooth',
      });
      return;
    }
  }
}
