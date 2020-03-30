import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { LayoutComponent } from './layout/layout.component';
import { ProdutoService } from './produto/servico/produto.service';
import { ProdutomanterComponent } from './produto/produto-manter/produto-manter.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteManterComponent } from './cliente/cliente-manter/cliente-manter.component';
import { VendaComponent } from './venda/venda.component';
import { VendaManterComponent } from './venda/venda-manter/venda-manter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutoComponent,
    ClienteComponent,
    LayoutComponent,
    ProdutomanterComponent,
    ClienteManterComponent,
    VendaComponent,
    VendaManterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
