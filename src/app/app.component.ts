import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ControlsComponent } from './components/controls/controls.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokePaginatorComponent } from './components/poke-paginator/poke-paginator.component';
import { TestComponent } from "./components/test/test.component";
import { DirectiveComponent } from "./components/directive/directive.component";
import { LifeCycleComponent } from "./components/lifecycle/lifecycle.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CounterComponent,
    ControlsComponent,
    PokeListComponent,
    PokePaginatorComponent,
    TestComponent, DirectiveComponent, LifeCycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'intro-angular';

  background = 'salmon'

  changeAttributes() {
    this.background = 'violet';
  }

}
