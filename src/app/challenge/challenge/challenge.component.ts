import { Component, OnInit } from '@angular/core';
import { CodemirrorService } from '@nomadreservations/ngx-codemirror';
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
  public value: any = `
  let arr = [1, 1, 1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5];
  function solution(arr) {
      let length = arr.length;
      let currentValue = arr[0];
      let counter = 0;
      let maxCounter = 0;
      let maxCounterValue = 0;
      arr.forEach(element => {
          if (currentValue !== element) {
              if (counter > maxCounter) {
                  maxCounter = counter;
                  maxCounterValue = currentValue;
              }
              counter = 0;
              currentValue = element;
          }
          counter++;
      });
      let obj = {};
      obj[maxCounterValue] = maxCounter
      return obj;
  }
  console.log(solution(arr));
  `;
  public language = 'gfm';
  public codemirror;
  constructor(private _codeMirror: CodemirrorService) { }

  ngOnInit() {
    this._codeMirror.instance$.subscribe((editor) => {
      console.log(editor.state);
    });
  }

}
