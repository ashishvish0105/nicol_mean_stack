import { Subject } from "rxjs";
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class goblelVariable {
    subject = new Subject<string>();
    constructor() { }
}