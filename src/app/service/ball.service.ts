import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Ball } from '../model/ball';

@Injectable()
export class BallService {
    ballList: Ball[] = [];
    nextId: number = 1;
    
    // initialize method is a placeholder
    initializeList(): string {
        let b1: Ball = new Ball("red", "large");
        let b2: Ball = new Ball("blue", "medium");
        let b3: Ball = new Ball("green", "small");
        console.log('adding b1:  '+this.add(b1));
        console.log('adding b1:  '+this.add(b2));
        console.log('adding b1:  '+this.add(b3));
        return('ballList initialized!');
    }
    
    add(ball: Ball): string {
        ball.id = this.nextId++;
        this.ballList.push(ball);
        return "success";
    }
    
    list(): Ball[] {
        return this.ballList;
    }
    
    remove(id: number): string {
        let index: number = -1;
		for(let idx: number = 0; idx < this.ballList.length; idx++) {
            if(id == this.ballList[idx].id) {
                index = idx;
                break;
            }
		}
		this.ballList.splice(index, 1);
		return "Removed.";
    }
    
    constructor(private http: HttpClient) { }
}