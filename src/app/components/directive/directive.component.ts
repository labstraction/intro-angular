import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss'
})
export class DirectiveComponent {


  currentClasses = {
    triste: true,
    felice: false,
    monospace: true,
  };


  elements = [
    "pippo",
    "pluto",
    "paperino"
  ]


  sonoFelice = true;

  currentStyles = {
    'font-size': this.sonoFelice ? '50px' : '20px',
    'color': this.sonoFelice ? 'magenta' : 'blue'
  }


  changeMood() {
    this.sonoFelice = !this.sonoFelice;
    this.currentStyles = {
      'font-size': this.sonoFelice ? '50px' : '20px',
      'color': this.sonoFelice ? 'magenta' : 'blue'
    }
    this.currentClasses.triste = !this.currentClasses.triste;
    this.currentClasses.felice = !this.currentClasses.felice;
  }

  isImageDisplayed = false;

  hideShowImage() {
    this.isImageDisplayed = !this.isImageDisplayed;
  }

  imtrue = true;

  changeIfElse() {
    this.imtrue = !this.imtrue
  }
    

  tripleChoice = 0

}
