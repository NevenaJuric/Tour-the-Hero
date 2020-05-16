import { Component, OnInit, Input } from '@angular/core';
import { iDetail } from '../marvel-speciality';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroSpecService } from '../hero-spec.service';

@Component({
  selector: 'app-hero-speciality',
  templateUrl: './hero-speciality.component.html',
  styleUrls: ['./hero-speciality.component.css']
})
export class HeroSpecialityComponent implements OnInit {

  @Input() herospec: iDetail;

  constructor(
    private heroSpecService: HeroSpecService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHerosSpec();
  }

  getHerosSpec(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroSpecService.getHerosSpec(id)
    .subscribe(hero => this.herospec = hero);
  }
}
