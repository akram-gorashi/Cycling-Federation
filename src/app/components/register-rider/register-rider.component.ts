import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { RidersService } from 'src/app/services/riders.service';

@Component({
  selector: 'app-register-rider',
  templateUrl: './register-rider.component.html',
  styleUrls: ['./register-rider.component.scss'],
})
export class RegisterRiderComponent implements OnInit {
  registerNewRiderFormGroup: FormGroup = this.fb.group({});
  supportedFile: boolean = true;
  submitted: boolean = false;
  isUploading: boolean = false;
  successAlert: boolean = false;
  errorAlert: boolean = false;


  constructor(private fb: FormBuilder, private ridersService: RidersService) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.registerNewRiderFormGroup = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      tshirt_color: [null, Validators.required],
      phone: [null, Validators.required],
      image: [],
      riders_ids: [[{ riders: '5', phone: '4343' }, { riders: '2', phone: '7422' }], Validators.required],
    });
  }

  get formControls() {
    return this.registerNewRiderFormGroup.controls;
  }

  submitRider() {
    this.submitted = true;
   this.isUploading = true;
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
    } else {
   
      // Send the request to create the rider
      this.ridersService.registerNewRider(this.registerNewRiderFormGroup.value).subscribe(
        (res: any) => {
          if (res.isSuccess) {
            this.successAlert = true;
            setTimeout(() => {
              this.successAlert = false;
            }, 2000);
            this.isUploading = false;
          }
        },
        (err) => {
          this.isUploading = false;
          this.errorAlert = true;
          setTimeout(() => {
            this.errorAlert = false;
          }, 2000);
          console.log(err);
        }
      );
    }
  }

  /* file uploader */
  handleInputChange(e: any) {
     console.log(e)
   var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
   var pattern = /image-*/;
   var reader = new FileReader();
   if (!file.type.match(pattern)) {
    this.supportedFile = false;
     return;
   }
   reader.onload = this._handleReaderLoaded.bind(this);
   reader.readAsDataURL(file);
 }
 _handleReaderLoaded(e: any) {
   let reader = e.target;
   this.formControls.image.setValue(reader.result.replace('data:image/png;base64,', ''));
 }
}
