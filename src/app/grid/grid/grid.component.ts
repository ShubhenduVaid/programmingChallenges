import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material';

import { PeriodicElement, list } from 'language/list';

const ELEMENT_DATA: PeriodicElement[] = list;

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {
  displayedColumns: string[] = ['challengeName', 'difficulty', 'language', 'link'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onChallengeOpen(id: number) {
    this.router.navigate(['/challenge', id]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
