import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '../../core/services/promocao/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private servicoPromocao: PromocaoService) {}
  ngOnInit(): void {
    this.servicoPromocao.listar().subscribe((response) => {
      console.log(response);
    });
  }
}
