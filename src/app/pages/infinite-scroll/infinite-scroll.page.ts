import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  data: any[] = Array(20);

  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(){
    setTimeout(() => {
      console.log('Done');
      this.infiniteScroll.complete();

      const newData = Array(20);
      this.data.push(...newData);

      if (this.data.length == 60) {
        this.infiniteScroll.disabled = true;
      }
    }, 1500);
  }
}
