// Importa o módulo HttpClient e HttpHeaders para realizar requisições HTTP.
// Também importa o Injectable para tornar a classe um serviço Angular e o Observable para lidar com respostas assíncronas.
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './Pessoa'; // Importa o modelo 'Pessoa'.

// Define opções de cabeçalho HTTP, especificando que o conteúdo é JSON.
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

// Marca a classe como um serviço injetável no Angular, configurado para ser fornecido na raiz da aplicação.
@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  // Define a URL base para a API. Essa URL aponta para o endpoint onde os recursos de "Pessoa" estão disponíveis.
  url = 'https://localhost:7042/swagger/index.html';

  // O construtor injeta o serviço HttpClient, que será usado para realizar requisições HTTP.
  constructor(private http: HttpClient) { }

  // Método para buscar todas as pessoas. Retorna um Observable contendo uma lista de objetos 'Pessoa'.
  PegarTodos(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.url); // Realiza uma requisição HTTP GET para a URL definida.
  }

  // Método para buscar uma pessoa pelo ID. O ID é passado como parâmetro.
  PegarPeloId(pessoaId: number): Observable<Pessoa> {
    // Cria a URL completa para buscar uma pessoa específica.
    const apiUrl = `${this.url}/${pessoaId}`;
    return this.http.get<Pessoa>(apiUrl); // Realiza uma requisição HTTP GET para a URL com o ID.
  }

  // Método para salvar uma nova pessoa. Aceita um objeto 'Pessoa' como argumento.
  SalvarPessoa(pessoa: Pessoa): Observable<any> {
    // Realiza uma requisição HTTP POST enviando os dados da pessoa no corpo da requisição.
    return this.http.post<Pessoa>(this.url, pessoa, httpOptions);
  }

  // Método para atualizar os dados de uma pessoa. Aceita um objeto 'Pessoa' como argumento.
  AtualizarPessoa(pessoa: Pessoa): Observable<any> {
    // Realiza uma requisição HTTP PUT enviando os dados da pessoa no corpo da requisição.
    return this.http.put<Pessoa>(this.url, pessoa, httpOptions);
  }

  // Método para excluir uma pessoa pelo ID. Aceita um número representando o ID.
  ExcluirPessoa(pessoaId: number): Observable<any> {
    // Cria a URL completa para excluir uma pessoa específica.
    const apiUrl = `${this.url}/${pessoaId}`;
    return this.http.delete<number>(apiUrl, httpOptions); // Realiza uma requisição HTTP DELETE.
  }
}
