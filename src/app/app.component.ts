import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ControlsComponent } from './components/controls/controls.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokePaginatorComponent } from './components/poke-paginator/poke-paginator.component';
import { TestComponent } from "./components/test/test.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            CounterComponent, 
            ControlsComponent, 
            PokeListComponent, 
            PokePaginatorComponent, 
            TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'intro-angular';

}
