import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeService {



  offset = 0;
  pokeArray: WritableSignal<any[]> = signal([])

  constructor() {
    this.getPokemon()
  }


  getPokemon(){
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=' + this.offset;

    fetch(url)
    .then(res => res.json())
    .then(data => {
      const pokemons = data.results;
      console.log(pokemons);
      this.pokeArray.set(pokemons);
    })

  }

  next() {
    this.offset++;
    this.getPokemon()
  }

  prev() {
    this.offset--;
    this.getPokemon()
  }

}
