import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription,interval } from 'rxjs';
import { userService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  textShow = false;
  private firstSubscription: Subscription;
  constructor(private userService:userService) {}

  ngOnInit() {
   this.firstSubscription =  this.userService.activateEmitter.subscribe(data => {
      console.log(data)
      this.textShow = data;
      // console.log(this.textShow = !this.textShow)
    })
    // this.firstSubscription= interval(1000).subscribe(count => {
    //   console.log(count);
    // })
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe()
  }
  
}
