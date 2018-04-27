import { Component, OnInit } from '@angular/core';
import { BallService } from '../service/ball.service';
import { Ball } from '../model/ball';

@Component({
  selector: 'app-ball-list',
  templateUrl: './ball-list.component.html',
  styleUrls: ['./ball-list.component.css']
})
export class BallListComponent implements OnInit {
    title: string = 'Ball List';
    balls: Ball[] = [];

  constructor(private ballSvc: BallService) { }

  ngOnInit() {
      // logic to initiallize list
      // until we write the code we'll default the list
      let n = this.ballSvc.ballList.length;
      console.log('size of list: '+n);
      if (n==0) {
          let initStatus = this.ballSvc.initializeList();
          console.log('ngOnInit() list initialize status:  '+initStatus);
      }
      this.balls = this.ballSvc.list();
      console.log(this.balls);
  	}
  }
