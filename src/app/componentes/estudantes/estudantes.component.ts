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
      nota: '8'
    },
    {
      id: '5',
      nome: 'Juan Pablo',
      idade: '47',
      nota: '10'
    },
    {
      id: '2',
      nome: 'Milena',
      idade: '24',
      nota: '5'
    },
    {
      id: '3',
      nome: 'igor',
      idade: '32',
      nota: '10'
    },
    {
      id: '4',
      nome: 'Matheus',
      idade: '22',
      nota: '10'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
