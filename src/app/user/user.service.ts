import { EventEmitter, Injectable, } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class userService{
    activateEmitter = new Subject<boolean>();
    // activateEmitter = new EventEmitter<boolean>();
}