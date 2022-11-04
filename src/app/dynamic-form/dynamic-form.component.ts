import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  dynamicForm: FormGroup;
  formArray: FormArray;
  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({
      form: this.fb.array([
        this.createControls()
      ])
    });
    this.formArray = this.dynamicForm.get('form') as FormArray;
    console.log('array = ', (this.dynamicForm.get('form') as FormArray).controls);
  }

  createControls(): FormGroup {
    return this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  addControls() {
    (this.dynamicForm.get('form') as FormArray).push(this.createControls());
    console.log('array = ', (this.dynamicForm.get('form') as FormArray).controls);
  }

  ngOnInit(): void { }

  

}
