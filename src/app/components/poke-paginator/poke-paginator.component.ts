import { Component, inject } from '@angular/core';
import { PokeService } from '../../services/poke/poke.service';

@Component({
  selector: 'app-poke-paginator',
  imports: [],
  templateUrl: './poke-paginator.component.html',
  styleUrl: './poke-paginator.component.scss'
})
export class PokePaginatorComponent {


  pokeServ = inject(PokeService);

  nextPage(){
    this.pokeServ.next()
  }

  previousPage() {
    this.pokeServ.prev()
  }
}
