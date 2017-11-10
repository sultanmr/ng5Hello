import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  goals = [];

  goalText: string = 'My first life goal';
  itemCount:number;
  btnText: string = 'Add an item';

  constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res=>this.goals=res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem () {
    // goal = goalte
     this.goals.push(this.goalText);
     this.goalText = '';
     this.itemCount = this.goals.length;
     this._data.changeGoal(this.goals);
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }
}
