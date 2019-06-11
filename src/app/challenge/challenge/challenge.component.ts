import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { list as recordList, PeriodicElement } from 'language/list';
import * as data from 'language';
@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  public editorOptions = {};
  public code = '';
  public record: PeriodicElement;
  public description = '';
  public name = '';
  private _id: string;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params.id;
    this.setEditorValue();
  }

  setEditorValue() {
    for (let index = 0; index < recordList.length; index++) {
      if (recordList[index].id === this._id) {
        this.record = recordList[index];
        break;
      }
    }
    this.code = data[this.record.link].solution;
    this.description = data[this.record.link].description;
    this.name = data[this.record.link].name;
    this.editorOptions = { theme: 'vs-dark', automaticLayout: true, language: (this.record.language).toLowerCase() };
  }
}
