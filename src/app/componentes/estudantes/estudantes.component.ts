import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {
  estudantes =[
    {
      id: '1',
      nome: 'Vanessa',
      idade: '28',
      estado: 'solteira'
    },
    {
      id: '5',
      nome: 'Juan Pablo',
      idade: '47',
      estado: 'casado'
    },
    {
      id: '2',
      nome: 'Milena',
      idade: '24',
      estado: 'casada'
    },
    {
      id: '3',
      nome: 'igor',
      idade: '32',
      estado: 'solteiro'
    },
    {
      id: '4',
      nome: 'Matheus',
      idade: '22',
      estado: 'solteiro'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
