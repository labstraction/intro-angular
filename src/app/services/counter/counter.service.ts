import { computed, effect, Injectable, signal } from '@angular/core';
import { count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  interval: number = -1;

  ciao = signal('hello')

  counter = signal(0);

  doubleCounter = computed(() => this.counter() * 2)


  constructor() {

      effect(() => {
        console.log('E1 il contatore vale: ', this.counter(), ' e il doppio è: ', this.doubleCounter())
        
      })

      // effect(()=>{
      //   console.log('E2 il contatore vale: ', this.counter(), ' e il doppio è: ', this.doubleCounter())
      //   console.log(this.ciao())
      // })


      // this.ciao.update(str => str + ' world!')
      

      // //this.counter.set(8);

      // setTimeout(() => {
      //   this.counter.update(numb => numb + 100);
      // }, 1000);


      // setTimeout(() => {
      //   this.ciao.set('pippo')
      // }, 2000);

      


      // // console.log('il contatore adesso vale: ', this.counter(), ' e il doppio è: ', this.doubleCounter())


      // //this.counter.update(oldValue => oldValue + 1)


      // // console.log('il contatore adesso vale: ', this.counter(), ' e il doppio è: ', this.doubleCounter())
  }
  

  addOne(){
    this.counter.update(oldValue => oldValue + 1);
  }

  removeOne(){
    this.counter.update(oldValue => oldValue - 1);
  }

  stopInterval() {
    console.log('pippo', this.interval)
    if (this.interval) {
      window.clearInterval(this.interval)
      this.interval = -1;
    }

  }

  startInterval() {

    if (this.interval === -1) {
      console.log(this.interval)
      this.interval = window.setInterval(() => {
        this.counter.update(oldValue => oldValue + 1);
      }, 1000);
    }

  }


}
