import { Component, OnInit } from '@angular/core';
import { Cliente } from './servico/cliente';
import { Router } from '@angular/router';
import { ClienteService } from './servico/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  selecionado: Cliente;

  listaCliente: Cliente[] = [];

  constructor(
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {


    this.clienteService.consultar(this.cliente.nome).subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;

      }
    );
  }

  pesquisar() {
    this.clienteService.consultar(this.cliente.nome).subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;

      }
    );
  }

  incluir() {
    this.router.navigate(['/cliente/incluir']);
  }

  alterar() {
    this.router.navigate(['/cliente/alterar/' + this.selecionado.nome]);
  }

  remover() {

    this.clienteService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }

  selecionar(valor) {
    this.selecionado = valor;
  }

}
