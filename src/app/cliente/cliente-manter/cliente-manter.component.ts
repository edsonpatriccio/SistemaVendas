import { Component, OnInit } from '@angular/core';
import { Cliente } from '../servico/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-cliente-manter',
  templateUrl: './cliente-manter.component.html',
  styleUrls: ['./cliente-manter.component.scss']
})
export class ClienteManterComponent implements OnInit {

  nomeCliente: string = '';
  operacao: string = 'Incluir';

  cliente: Cliente = new Cliente();

  constructor(
    private routeActivated: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.nomeCliente = this.routeActivated.snapshot.params.id;
    if (this.nomeCliente != null) {
      this.operacao = 'Alterar';
      this.clienteService.consultar(this.nomeCliente).subscribe(
        data => {
          this.cliente = (<Cliente[]>data)[0];
        }
      );
    }
  }

  voltar() {
    this.router.navigate(['/cliente']);
  }

  incluir() {
    this.clienteService.incluir(this.cliente).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/cliente']);
      }
    );
  }

  alterar() {
    this.clienteService.alterar(this.cliente).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/cliente']);
      }
    );
  }

}
