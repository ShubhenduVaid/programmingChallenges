import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-executer',
  templateUrl: './executer.component.html',
  styleUrls: ['./executer.component.css']
})
export class ExecuterComponent {
  @Input() code;
  private _output = '';

  get output(): string {
    return this._output;
  }
  set output(value: string) {
    value = '> ' + value;
    this._output = this._output + '\n' + value;
  }

  execute() {
    try {
      this._output = '';
      this.bindConsole();
      new Function(this.code)();
    } catch (err) {
      this.output = 'Error: ' + err.message;
    }
  }

  bindConsole() {
    const self = this;
    console.log = function () {
      const outputList = [];
      for (let r = 0, i = arguments.length; r < i; r++) {
        outputList.push(self.formatOutput(arguments[r]));
      }
      self.output = outputList.join(' ');
    };
  }

  formatOutput(element) {
    if (element === 0 || element === null || typeof element === 'boolean') {
      return String(element);
    } else if (typeof element === 'number') {
      if (Object.is(element, -0)) {
        return '-0';
      } else {
        return String(element);
      }
    } else if (typeof element === 'bigint') {
      return String(element) + 'n';
    } else if (typeof element === 'string') {
      return '"' + element + '"';
    } else if (Array.isArray(element)) {
      return 'Array [' + this.formatArray(element) + ']';
    } else {
      return this.formatObject(element);
    }
  }

  formatArray(element) {
    let e = '';
    for (let n = 0, r = element.length; n < r; n++) {
      if (typeof element[n] === 'string') {
        e += '"' + element[n] + '"';
      } else if (Array.isArray(element[n])) {
        e += 'Array [', e += this.formatArray(element[n]), e += ']';
      } else {
        e += this.formatOutput(element[n]);
        if (n < element.length - 1) {
          e += ', ';
        }
      }
    }
    return e;
  }

  formatObject(element) {
    const e = element.constructor.name;
    if ('String' === e) {
      return `String { "${element.valueOf()}" }`;
    }
    if (e.match(/^(ArrayBuffer|SharedArrayBuffer|DataView)$/)) {
      return e + ' {}';
    }
    // tslint:disable-next-line:max-line-length
    if (e.match(/^(Int8Array|Int16Array|Int32Array|Uint8Array|Uint16Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array|BigInt64Array|BigUint64Array)$/)) {
      return element.length > 0 ? e + ' [' + this.formatArray(element) + ']' : e + ' []';
    }
    if ('Symbol' === e && void 0 !== element) {
      return element.toString();
    }
    if ('Object' === e) {
      let n = '', r = !0, i;
      for (i in element) {
        if (element.hasOwnProperty(i) &&
          (r ? r = !1 : n += ', ', n = n + i + ': ' + this.formatOutput(element[i]))) { }
      }
      return e + ' { ' + n + ' }';
    }
    return element;
  }
}
