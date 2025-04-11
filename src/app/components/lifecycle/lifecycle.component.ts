import { CommonModule } from '@angular/common';
import { Component, computed, Input, input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [CommonModule],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss'
})
export class LifeCycleComponent {

  // textColor = input('black', {alias: 'text-color'})
  // backgroundColor = input('tomato', {alias:'background-color'})
  // // style = {
  // //   color: this.textColor(),
  // //   background: this.backgroundColor()
  // // }

  // style = computed(()=>{
  //   return {
  //     background: this.backgroundColor(),
  //     color: this.textColor()
  //   }
  // })

  _textColor = 'black';
  _backgroundColor = 'crimson';

  style?:any;

  @Input({alias: 'text-color'}) set textColor(value:string){
    this._textColor = value;
    this.style = {
      color: this._textColor,
      background: this._backgroundColor
    }
  }
  @Input({alias:'background-color'}) set backgroundColor(value:string){
    this._backgroundColor =  value;
    this.style = {
      color: this._textColor,
      background: this._backgroundColor
    }
  }


  constructor(){
    console.log('constructor')


  }

  ngOnInit(){
    console.log('on init')


    
    // const scroller = document.getElementById("list-container") as HTMLElement | null;

    // if (scroller) {
    //   console.log('scroller', scroller)
    //   scroller.addEventListener("wheel", (event: WheelEvent) => {
    //     event.preventDefault();
  
    //     const delta = event.deltaY; // Usa lo scroll verticale per muovere orizzontalmente
    //     let newScrollLeft = scroller.scrollLeft + delta;
  
    //     newScrollLeft = Math.max(0, Math.min(newScrollLeft, scroller.scrollWidth - scroller.clientWidth));
  
    //     scroller.scrollLeft = newScrollLeft;
    //   }, { passive: false });
    // }
  }
  
  ngAfterViewInit(){
    console.log('after view init')

  }

  ngOnChanges(changes: SimpleChanges) {
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }

    // this.style = {
    //   color: this.textColor(),
    //   background: this.backgroundColor()
    // }

  }

  ngOnDestroy(){

  }

}
