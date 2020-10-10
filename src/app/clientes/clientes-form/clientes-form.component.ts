import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];

  constructor(private service: ClientesService, private router: Router) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service
      .salvar(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.cliente = response;
      }, errorResponse => {
          this.success = false;
          // errorResponse é minha resposta | error é uma propriedade dentro da response 
			    // | errors é a lista dos erros dentro da propriedade error
          this.errors = errorResponse.error.errors;
          });
  }

  voltarParaLista(){
    this.router.navigate(['/clientes-list']);
  }
}
