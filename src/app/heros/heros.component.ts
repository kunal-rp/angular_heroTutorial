import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'

import {HEROES} from '../mock-heros'

/*
This component will list out all heros and their Details
Heros data propgated form 'mock-heros' file
*/

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heros = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
