import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { iDetail } from '../marvel-speciality';
import { HeroSpecService } from '../hero-spec.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];
  heroSpec: iDetail[];

  constructor(private heroService: HeroService, private herospecService: HeroSpecService) { }

  ngOnInit() {

    this.getHeroes();
    this.getHeroesSpec();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  getHeroesSpec(): void{
    this.herospecService.getHeroSpec()
    .subscribe(herospec => this.heroSpec = herospec.slice(1, 5));
  }

}
