import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';  
import { PessoasService } from '../../pessoas.service';

@Component({
  selector: 'app-pessoas',  
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = "";

  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
    this.tituloFormulario = "Nova Pessoa";
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      sobrenome: new FormControl(null),
      idade: new FormControl(null),
      profissao: new FormControl(null)
    });
  }

  EnviarFormulario(): void {
    const pessoa = this.formulario.value;

    this.pessoasService.SalvarPessoa(pessoa).subscribe(resultado => {
      alert('Pessoa inserida com sucesso');
    });
  }
  
}
