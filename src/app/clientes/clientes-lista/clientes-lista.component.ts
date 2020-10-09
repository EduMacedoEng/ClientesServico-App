import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[];
  //nomeCliente: string;
  
  constructor(private service: ClientesService, private router: Router) {
  }

  ngOnInit(): void {
    this.service
      .getClientes()
      .subscribe(resposta => {
        this.clientes = resposta;
        //this.nomeCliente = resposta[Math.floor((Math.random() * this.clientes.length))].nome;
        //console.log(this.nomeCliente)
      });
    ;
  }

  novoCadastro(){
    this.router.navigate(['/clientes-form'])
  }

}
