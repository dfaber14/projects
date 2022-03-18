import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1-prob10',
  templateUrl: './hw1-prob10.page.html',
  styleUrls: ['./hw1-prob10.page.scss'],
})
export class Hw1Prob10Page implements OnInit {

  average;
  constructor() { }

  ngOnInit() {

    let Test1 = Number(prompt('Enter first test grade'))
    let Test2 = Number(prompt('Enter second test grade'))
    let Test3 = Number(prompt('Enter third test grade'))
    

    this.average = (Test1 + Test2 + Test3) / 3
  }

}
