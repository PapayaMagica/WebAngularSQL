import { Component, OnInit } from '@angular/core';
import {FormsModule,FormBuilder,FormGroup,Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';

import {ServiciocrearnotasService} from './serviciocrearnotas.service';

@Component({
  selector: 'app-formulariocrearnotas',
  templateUrl: './formulariocrearnotas.component.html',
  styleUrls: ['./formulariocrearnotas.component.scss']
})
export class FormulariocrearnotasComponent implements OnInit 
{
  formulario:FormGroup;
  formularioAUX:any;
  formularioAUXMOD = {
    id: null,
    titulo: null,
    estado: null,
    descripcion: null
  }
  submitted = false;


  constructor(private servicioCrearNotas: ServiciocrearnotasService, private formBuilder: FormBuilder,
    private http:HttpClient) 
  { 
      this.formulario = this.formBuilder.group({
      titulo:['',Validators.required],
      estado:['',Validators.required],
      descripcion:['',Validators.required]
    }); 
  }

  ngOnInit() 
  {
    this.listarNotas();
  }

  get f() { return this.formulario.controls; }
  
    onSubmit() 
    { 
      this.submitted = true;
      if (this.formulario.invalid) {
          return;
      }
      this.insercionDatos();
    }

    actualizar() 
    { 
      this.submitted = true;
      if (this.formulario.invalid) {
          return;
      }
      this.insercionDatos();
    }

  modificar() 
  {
    this.submitted = true;
    if (this.formulario.invalid) {
      return;
    }
    this.modificarNotas();
  }

    insercionDatos() 
    {
      this.servicioCrearNotas.insercionDatos(this.formulario.value).subscribe(
        datos => {
          if(datos['resultado'] == 'OK') {
            //alert(datos['mensaje']);
            //window.location.href = ("http://localhost:4200/")
            window.location.href = ("http://localhost:4200/visualizar-notas");
          }
        }
      );
    }

    modificarNotas() 
    {
      this.servicioCrearNotas.modificarNotas(this.formularioAUXMOD).subscribe(
        datos => {
          if(datos['resultado'] == 'OK') {
            
            this.listarNotas()
          }
        }
        
      );
    }

    seleccionarNotas(id) 
    {
      this.servicioCrearNotas.seleccionarNotas(id).subscribe(
        datos => this.formularioAUXMOD = datos[0]
        
      );
    }

    listarNotas() 
    {
      this.servicioCrearNotas.listarNotas().subscribe(
        datos => this.formularioAUX = datos
      );
    }

    eliminarNotas(id) 
    {
      this.servicioCrearNotas.eliminarNotas(id).subscribe(
        datos => {
          if(datos['resultado'] == 'OK') {
            //alert(datos['mensaje']);
            this.listarNotas();
          }
        }
      );
    }

    hayRegistros() 
    {
    if(this.formularioAUX == null) {
      return false;
    } else {
      return true;
    }
  }
}
