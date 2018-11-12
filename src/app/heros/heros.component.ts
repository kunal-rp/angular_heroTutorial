import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'

import {HeroService} from '../hero.service'
import { MessagesService } from '../messages.service';

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

  selectedHero: Hero;
  heroes:Hero[];

  constructor(private heroService: HeroService,public messageService: MessagesService) { }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes=heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero):void{
    this.messageService.add('Hero Selected: '+hero.name);
    this.selectedHero = hero;
  }

}
