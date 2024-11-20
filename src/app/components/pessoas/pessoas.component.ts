import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { ReactiveFormsModule } from '@angular/forms'; // Importando ReactiveFormsModule para formGroup

@Component({
  selector: 'app-pessoas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.css'
})
export class PessoasComponent {

  formulario: any;
  tituloFormulario: string = "";

  constructor(){}

  ngOnInit(): void {
    this.tituloFormulario = "Nova Pessoa"
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      sobrenome: new FormControl(null),
      idade: new FormControl(null),
      profissao: new FormControl(null)
    });
    
  }

}
