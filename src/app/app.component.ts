import { Component } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  $listSubject = new Subject();
  dataList = {
    list: []
  }
  constructor() {
    fromEvent(window, "scroll")
      .pipe(debounceTime(500))
      .subscribe(() => {
        const hh = document.documentElement.offsetHeight;
        const dt = document.documentElement.scrollTop;
        const hw = window.innerHeight;
        const offset = 50;
        if ((hw + dt) >= (hh - offset)) {
          this.addElement();
        }
      })
  }
  addElement() {
    this.dataList.list.push({ name: "miguel", id: this.dataList.list.length })
    this.$listSubject.next(this.dataList);
  }
  itemTrackBy(_: number, item) {
    return item.id;
  }
}
