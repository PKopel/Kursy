import {Injectable} from '@angular/core';
import {CourseFormElements} from './course-form-elements';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CourseFormService {

  constructor() {
  }

  getElements() {
    return CourseFormElements.elements;
  }

  getValidationMessage(element: string, key: string): string {
    return CourseFormElements.validationMessages[element][key];
  }

  getErrorMessage(element: string): string {
    return CourseFormElements.errors[element];
  }

  setErrorMessage(element: string, message: string): void {
    CourseFormElements.errors[element] = message;
  }

  addErrorMessage(element: string, message: string): void {
    CourseFormElements.errors[element] += message;
  }

  onControlValueChanged(form: FormGroup): void {
    for (const field of this.getElements().map(e => e.name)) {
      this.setErrorMessage(field, '');
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        for (const key in control.errors) {
          if (control.errors.hasOwnProperty(key)) {
            this.addErrorMessage(
              field, this.getValidationMessage(field, key));
          }
        }
      }
    }
  }

  checkboxValidation(): (formGroup: FormGroup) => (null | { requireCheckboxes: boolean }) {
    return function validate(formGroup: FormGroup) {
      let checked = false;

      Object.keys(formGroup.controls).forEach(key => {
        const control = formGroup.get(key);
        checked = checked || control.value;
      });

      if (checked) {
        return null;
      } else {
        return {
          requireCheckboxes: true,
        };
      }
    };
  }
}
