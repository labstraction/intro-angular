import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterService } from './services/counter/counter.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'intro-angular';

  counterServ = inject(CounterService);
  
}
