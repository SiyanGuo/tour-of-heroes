import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {Observable, of } from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageSerivce: MessageService) { }

  getHeroes() : Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageSerivce.add('HeroSerivce: fetched heroes');
    return heroes;
  }
 }
