import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;
  @ViewChild(IonList) ionList: IonList;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios();    
  }

  favorite(item: any){
    console.log(item);
    this.ionList.closeSlidingItems();
  }

  share(item: any){
    console.log(item);
  }

  unread(item: any){
    console.log(item);
  }

}
