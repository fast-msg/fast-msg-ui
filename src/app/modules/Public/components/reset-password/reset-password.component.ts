import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  loginForm:FormGroup;

  constructor(
    private formBulder:FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBulder.group({
      email:['',[Validators.email,Validators.required]]
    })
  }

  submit(){
    if(this.loginForm.valid){
      this.router.navigate(['']);
    }
  }

    /**
  * Función que hace la validacion de el atributo del formulario según las restricciones
  * retorna true si hay error
  * retorna false si no hay error
  */
     handleError(form: FormGroup, controlName: string, errorName: string) {
      return form.controls[controlName].hasError(errorName);
    }

}
