import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { IonicModule } from '@ionic/angular';
import { FooterRoutingModule } from './footer-routing.module';
import { FirebaseService } from 'src/app/servico/firebase.service';



@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [
    CommonModule,
    IonicModule,
    FooterRoutingModule
  ]
})
export class FooterModule { 

   //Nosso serviço de banco de dados (json-server)
     //private DataBase: DatabaseService,

     //Serviço de banco de dados Firebase
     private firebase: FirebaseService,

     //alertController - Ferramente que cria um alert
     private alertCtrl: AlertController,
      //Serviço de utilidades 
    private utilidades: UtilityService   
 
}
