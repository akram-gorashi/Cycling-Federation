import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-rider',
  templateUrl: './register-rider.component.html',
  styleUrls: ['./register-rider.component.scss'],
})
export class RegisterRiderComponent implements OnInit {
  registerNewRiderFormGroup: FormGroup | undefined;
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

  get formControl() {
    return this.registerNewRiderFormGroup?.controls;
  }
}
