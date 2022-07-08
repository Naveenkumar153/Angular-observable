import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription,Observable, } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  private firstSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    let ownObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        if(count > 3){
          observer.error(new Error('printing value above 3'));
        }
        if(count == 2){
          observer.complete()
        }
        observer.next(count);
        ++count;
      },1000);
    }) 
   
    // ownObservable.pipe(map((data:number) => {
    //   console.log('map data',data);
    //   return 'Round' + (data + 5)
    // }));
    this.firstSubscription = ownObservable.pipe(map((data:number) => {
      return 'Round ' + (data + 0);
    })).subscribe(data => {
      console.log(data);
    },error => {
      console.error(error.message);
    },() => {
      console.log('completed');
    });

    // this.firstSubscription = interval(1000).subscribe(count => console.log(count));
  }
  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }

}
