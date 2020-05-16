import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { iDetail } from '../marvel-speciality';
// import { HEROES } from '../mock-heroes';
import { MARVEL } from '../marvel-heroes';
import { HeroService } from '../hero.service';
import { HeroSpecService } from '../hero-spec.service';
import { MessageService } from '../message.service';
import { MessageSpecService } from '../message-spec.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  //   // speciality: 'Wind',

  // }

  // heroes = HEROES;
  selectedHero: Hero;
  selectedHeroDetail: iDetail;
  // marvel = MARVEL;

  heroes: Hero[];
  heroSpec: iDetail[];

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroService: Selected Hero id=${hero.id}`);
  // }

  // onSelectDetail(heroSpec: iDetail): void {
  //   this.selectedHeroDetail = heroSpec;
  //   this.messagespec1service.addspec(`HeroService: Selected Marvel name=${heroSpec.name}`);
  // }

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private heroService: HeroService, private heroSpecService: HeroSpecService, private messageService: MessageService,
              private messagespec1service: MessageSpecService) { }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // getHeroesDetail(): void {
  //   this.heroSpec = this.heroSpecService.getHeroSpec();
  // }

  getHeroesDetail(): void {
    this.heroSpecService.getHeroSpec().subscribe(heroSpeciality => this.heroSpec = heroSpeciality);
  }

  add(name: string): void{
    name = name.trim();
    if (!name){ return; }
    this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void{
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit(): void {

    this.getHeroes();
    this.getHeroesDetail();

  }

}
