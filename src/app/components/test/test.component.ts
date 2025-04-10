import { Component, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  _input2 = 'Viva angular!!!!';

  @Input() input1: string = ''

  @Input() set input2(value: string){
      if (value.length >= 5) {
        this._input2 = value;
      }
      
  }

  @Input({transform: (value: string) => value + ' La pagherete cara!!!'}) input4 = ''

  input3 = input('', {transform: this.replaceIwhithAT});

  upperInput3 = computed(() => this.input3().toUpperCase())


  replaceIwhithAT(value: string){
    const replaced = value.replaceAll('i', '@');
    return replaced;
  }

  nomeSensato = input('', {alias: 'nome-sensato'})



}
