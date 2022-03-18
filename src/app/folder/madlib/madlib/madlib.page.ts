import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-madlib',
  templateUrl: './madlib.page.html',
  styleUrls: ['./madlib.page.scss'],
})
export class MadlibPage implements OnInit {

  story;

  constructor() { }

  ngOnInit() {

    
   let container = prompt('Enter a container')
   let adjective1 = prompt('Enter an adjective')
   let adjective2 = prompt('Enter an adjective')
   let noun = prompt('Enter a noun')
   let animal = prompt('Enter an animal')
   let vegetable1 = prompt('Enter a vegetable')
   let vegetable2 = prompt('Enter a vegetable')
    let color = prompt('Enter a color')
    let adjective3 = prompt('Enter an adjective')


   this.story = `Make sure your lunch ${container} is filled with nutritious ${adjective1} food. Do not go to the ${adjective2} food stand across the street from the school. The hamburgers they serve are fried in ${noun} and are made of ${animal} meat. So take a sandwich made of ${vegetable1} or ${vegetable2} it's much healthier! Drink ${color} milk instead of ${adjective3} colas.`
  }

}
