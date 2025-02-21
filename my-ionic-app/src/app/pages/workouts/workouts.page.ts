import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout/workout.model';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
  standalone: false,
})
export class WorkoutsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
