import { Component, OnInit } from '@angular/core';
import { Produto } from '../servico/produto';
import { ProdutoService } from '../servico/produto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtomanter',
  templateUrl: './produto-manter.component.html',
  styleUrls: ['./produto-manter.component.scss']
})
export class ProdutomanterComponent implements OnInit {

  nomeProduto: string = '';
  produto: Produto = new Produto();
  operacao: string = 'Incluir';

  constructor(
    private routeActivated: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.nomeProduto = this.routeActivated.snapshot.params.id;
    if (this.nomeProduto != null) {
      this.operacao = 'Alterar';
      this.produtoService.pesquisar(this.nomeProduto).subscribe(
        data => {
          this.produto = (<Produto[]>data)[0];
        }
      );
    }
  }

  incluir() {
    this.produtoService.incluir(this.produto).subscribe(
      retorno => {
        alert(retorno['mensagem']);
        this.voltar();
      }
    );


  }

  voltar() {
    this.router.navigate(['/produto']);
  }

  alterar() {
    this.produtoService.alterar(this.produto).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/produto']);
      }
    );
  }

}
