import { Component, HostBinding, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Formulario } from 'src/app/models/formulario';
import { FormularioService } from '../../src/app/services/formulario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';

  show: boolean=false;

  signupForm:FormGroup

  @HostBinding('class') classes = 'row';

  formulario: Formulario = {
    id: 0,
    name: '',
    company: '',
    email: '',
    phone: '',
    category: '',
    mensaje: ''
  };

  constructor(
    private _builder: FormBuilder,
    private formularioService:FormularioService
  ) {
    this.signupForm = this._builder.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      phone: ['', Validators.required],
      category: ['', Validators.required],
      mensaje: ['', Validators.required]
    })

  }

  ngOnInit() {

  }

  enviar() {
    console.log(this.formulario,46);
    delete this.formulario.id;
      this.formularioService.addRegistro(this.formulario)
        .subscribe(
          res => {
            console.log(res);
          },
          err => console.error(err)
        )
    this.show=true;
  }

}
