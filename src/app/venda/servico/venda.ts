import { Cliente } from 'src/app/cliente/servico/cliente';
import { VendaProduto } from './vendaproduto';

export class Venda {
    codigo: string;
    cliente: Cliente;
    dataVendaProduto: Date;
    listaVendaProduto: VendaProduto[] = [];
}

/** 
export class Venda {
    codigo: string;
    dataVendaProduto: Date;
    cliente: Cliente;
    listaVendaItem: VendaProduto[] = [];
}
*/