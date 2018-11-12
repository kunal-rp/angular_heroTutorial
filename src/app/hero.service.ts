import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';

import {Hero} from './hero';
import {HEROES} from './mock-heros';
import { MessagesService } from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessagesService) { }

  getHeroes():Observable<Hero[]>{
    //TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
