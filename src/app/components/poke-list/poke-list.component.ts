import { Component, effect, inject } from '@angular/core';
import { PokeService } from '../../services/poke/poke.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poke-list',
  imports: [CommonModule],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss'
})
export class PokeListComponent {

  pokeServ = inject(PokeService);

  pokemons: any[] = []

  constructor(){
    effect(() => {
      this.pokemons = this.pokeServ.pokeArray()
    })
  }

}
