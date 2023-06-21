import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'John', description: 'Admin',},
      { id: 13, name: 'Michael', description: 'Developer', },
      { id: 14, name: 'Patrick', description: 'Consultant',},
      { id: 15, name: 'Raul', description: 'Developer',},
      { id: 16, name: 'Ranko', description: 'Apprentice',},
      { id: 17, name: 'Stephan', description: "CDO"},
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}