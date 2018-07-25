import { Component, OnInit } from '@angular/core';
import { CodemirrorService } from '@nomadreservations/ngx-codemirror';
import { ActivatedRoute } from '@angular/router';

import { list as recordList, PeriodicElement } from 'language/list';
import * as data from 'language';
@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  public config = {
    lineNumbers: true,
    lineWrapping: true,
    tabSize: 2,
    theme: 'monokai',
    styleActiveLine: true,
    matchBrackets: true
  };
  public value: any;
  public language = 'gfm';
  public codemirror;
  private _id: string;
  public record: PeriodicElement;
  constructor(
    private route: ActivatedRoute,
    private _codeMirror: CodemirrorService
  ) { }

  ngOnInit() {
    this._id = this.route.snapshot.params.id;
    this.setEditorValue();
    this._codeMirror.instance$.subscribe((editor) => {
      // console.log(editor.state);
    });
  }

  setEditorValue() {
    for (let index = 0; index < recordList.length; index++) {
      if (recordList[index].id === this._id) {
        this.record = recordList[index];
        break;
      }
    }
    this.value = data[this.record.link];
  }
}
