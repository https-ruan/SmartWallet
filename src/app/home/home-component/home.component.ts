import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  public anoAtual = moment().year().toString();
  public mesAnoAtual = moment().format('MM[/]YYYY').toString();
  public ano: string;
  public mesAno: string;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    nav: false,
    margin: 10,

    responsive: {
      0: {
        items: 1,
      },
    },
  };

  // Graphs configs
  colorScheme = {
    domain: ['#0c8228', '#e52222', '#ffc300'],
  };
  colorSchemeMensal = {
    domain: ['#0c8228', '#e52222', '#ffc300'],
  };

  public resultadoAnual = [
    {
      name: 'Janeiro',
      series: [
        {
          name: 'Receitas',
          value: 3500,
        },
        {
          name: 'Despesas',
          value: 3800,
        },
        {
          name: 'Investimentos',
          value: 2000,
        },
      ],
    },
    {
      name: 'Fevereiro',
      series: [
        {
          name: 'Receitas',
          value: 3500,
        },
        {
          name: 'Despesas',
          value: 3800,
        },
        {
          name: 'Investimentos',
          value: 2000,
        },
      ],
    },
    {
      name: 'Março',
      series: [
        {
          name: 'Receitas',
          value: 3500,
        },
        {
          name: 'Despesas',
          value: 3800,
        },
        {
          name: 'Investimentos',
          value: 2000,
        },
      ],
    },
    {
      name: 'Abril',
      series: [
        {
          name: 'Receitas',
          value: 3500,
        },
        {
          name: 'Despesas',
          value: 3800,
        },
        {
          name: 'Investimentos',
          value: 2000,
        },
      ],
    },
    {
      name: 'Maio',
      series: [
        {
          name: 'Receitas',
          value: 3500,
        },
        {
          name: 'Despesas',
          value: 3800,
        },
        {
          name: 'Investimentos',
          value: 2000,
        },
      ],
    },
    {
      name: 'Junho',
      series: [
        {
          name: 'Receitas',
          value: 3500,
        },
        {
          name: 'Despesas',
          value: 3800,
        },
        {
          name: 'Investimentos',
          value: 2000,
        },
      ],
    },
    {
      name: 'Julho',
      series: [
        {
          name: 'Receitas',
          value: 3500,
        },
        {
          name: 'Despesas',
          value: 3800,
        },
        {
          name: 'Investimentos',
          value: 2000,
        },
      ],
    },
    {
      name: 'Agosto',
      series: [
        {
          name: 'Receitas',
          value: 3500,
        },
        {
          name: 'Despesas',
          value: 3800,
        },
        {
          name: 'Investimentos',
          value: 2000,
        },
      ],
    },
    {
      name: 'Setembro',
      series: [
        {
          name: 'Receitas',
          value: 3500,
        },
        {
          name: 'Despesas',
          value: 3800,
        },
        {
          name: 'Investimentos',
          value: 2000,
        },
      ],
    },
    {
      name: 'Outubro',
      series: [
        {
          name: 'Receitas',
          value: 3500,
        },
        {
          name: 'Despesas',
          value: 3800,
        },
        {
          name: 'Investimentos',
          value: 2000,
        },
      ],
    },
    {
      name: 'Novembro',
      series: [
        {
          name: 'Receitas',
          value: 3500,
        },
        {
          name: 'Despesas',
          value: 3800,
        },
        {
          name: 'Investimentos',
          value: 2000,
        },
      ],
    },
    {
      name: 'Dezembro',
      series: [
        {
          name: 'Receitas',
          value: 3500,
        },
        {
          name: 'Despesas',
          value: 3800,
        },
        {
          name: 'Investimentos',
          value: 2000,
        },
      ],
    },
  ];

  public resultadoMensal = [
    {
      name: 'Receitas',
      type: 'Receita',
      value: 3500,
    },
    {
      name: 'Gastos Fixos',
      type: 'Despesa',
      value: 2500,
    },
    {
      name: 'Gastos Variáveis',
      type: 'Despesa',
      value: 1250,
    },
    {
      name: 'Investimentos',
      type: 'Investimento',
      value: 500,
    },
  ];

  public resultadoSemanal = [
    {
      name: 'Receitas',
      type: 'Receita',
      value: 3500,
    },
    {
      name: 'Gastos Fixos',
      type: 'Despesa',
      value: 2500,
    },
    {
      name: 'Gastos Variáveis',
      type: 'Despesa',
      value: 1250,
    },
    {
      name: 'Investimentos',
      type: 'Investimento',
      value: 500,
    },
  ];

  public resultadoDiario = [
    {
      name: 'Receitas',
      type: 'Receita',
      value: 3500,
    },
    {
      name: 'Gastos Fixos',
      type: 'Despesa',
      value: 2500,
    },
    {
      name: 'Gastos Variáveis',
      type: 'Despesa',
      value: 1250,
    },
    {
      name: 'Investimentos',
      type: 'Investimento',
      value: 500,
    },
  ];

  customColors: any = this.setCustomColors();
  constructor() {}

  ngOnInit() {}

  enviarAno(ano: string) {
    if (this.form.valid) {
      this.ano = ano;
    } else {
      this.ano = this.anoAtual;
    }
  }

  setCustomColors() {
    let result: any[] = [];
    for (let i = 0; i < this.resultadoMensal.length; i++) {
      if (this.resultadoMensal[i].type == 'Receita') {
        result.push({ name: this.resultadoMensal[i].name, type: this.resultadoMensal[i].type, value: '#0c8228' });
      } else if (this.resultadoMensal[i].type == 'Despesa') {
        result.push({ name: this.resultadoMensal[i].name, type: this.resultadoMensal[i].type, value: '#e52222' });
      } else if (this.resultadoMensal[i].type == 'Investimento') {
        result.push({ name: this.resultadoMensal[i].name, type: this.resultadoMensal[i].type, value: '#ffc300' });
      }
    }
    return result;
  }
}
