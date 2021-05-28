import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async onClick() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: "Neri",
        pais: "Argentina"
      }
    });

    await modal.present();
    
    const { data } = await modal.onDidDismiss();
    console.log(data);
  }
}
