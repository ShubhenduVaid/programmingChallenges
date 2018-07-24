import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  challengeName: string;
  link: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { challengeName: 'Find The Leader', link: 'xyz' },
  { challengeName: 'no 2', link: '2' },
];

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {
  displayedColumns: string[] = ['challengeName', 'link'];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onChallengeOpen() {
    this.router.navigate(['/challenge']);
  }
}
