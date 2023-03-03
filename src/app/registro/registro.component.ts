import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
    this.form;
  }

  form: FormGroup = this.fb.group({
    nombre: [
      '',
      Validators.compose([
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern(/^[a-z\s\u00E0-\u00FC\u00f1]*$/i),
      ]),
    ],
    apellido: [
      '',
      Validators.compose([
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern(/^[a-z\s\u00E0-\u00FC\u00f1]*$/i),
      ]),
    ],
    email: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
    ],
    selectPais: ['', Validators.compose([Validators.required])],
  });

  onSubmit() {
    this.openSend()
    this.onReset()
    this.router.navigateByUrl('home')
  }

  onReset() {
    this.form.reset();
  }

  openSend() {
    this._snackBar.open('Formulario enviado correctamente', 'Ocultar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 6000,
    });
  }
}
