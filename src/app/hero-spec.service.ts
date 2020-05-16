import { Injectable } from '@angular/core';
import { iDetail } from './marvel-speciality';
import { MARVEL } from './marvel-heroes';
import { Observable, of } from 'rxjs';
import { MessageSpecService } from './message-spec.service';

@Injectable({
  providedIn: 'root'
})
export class HeroSpecService {

  // getHeroSpec(): iDetail[] {
  //   return MARVEL;
  // }

  getHeroSpec(): Observable<iDetail[]> {
    this.messagespesService.addspec('HeroSpecService: fached marvel');
    return of(MARVEL);
  }

  getHerosSpec(id: number): Observable<iDetail> {
    this.messagespesService.addspec(`Marvel Service: fetched hero id=${id}`);
    return of(MARVEL.find(hero => hero.id === id));

  }

  constructor(private messagespesService: MessageSpecService) { }

}
