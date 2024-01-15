import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1> {{title}} </h1>
  <hr>
  <h3> Counter: {{ counter }}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
  public title:string = 'Mi Primera App';
  public counter: number = 10;

  increaseBy(valor:number):void{
    this.counter += valor;
  }



  resetCounter():void{
    this.counter = 10;
  }

}
