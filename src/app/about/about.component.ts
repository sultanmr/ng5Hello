import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

  goals = [];

  constructor(private route: ActivatedRoute, private _data:DataService) {
    this.route.params.subscribe(res=>console.log(res.id));
   }

  ngOnInit() {
    this._data.goal.subscribe((res)=>this.goals=res);
  }

}
