import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  nombres: string[] = ["Neri", "Maria", "Chuwaka", "Milena"];
  reorderDisabled = false;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any){
    console.log(event);

    const itemAMover = this.nombres.splice(event.detail.from, 1)[0];
    this.nombres.splice(event.detail.to, 0, itemAMover);
    
    event.detail.complete();
    
    console.log(this.nombres);
  }

  toggleReorder(){
    this.reorderDisabled = !this.reorderDisabled;
  }
}
