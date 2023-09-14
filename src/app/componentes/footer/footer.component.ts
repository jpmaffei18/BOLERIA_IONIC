import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(

    
     //Nosso serviço de banco de dados (json-server)
     //private DataBase: DatabaseService,

     //Serviço de banco de dados Firebase


    /*  private firebase: FirebaseService, */

    
     //alertController - Ferramente que cria um alert
     private alertCtrl: AlertController,
      //Serviço de utilidades 

    /* private utilidades: UtilityService  */ 
 
  ) { }

  ngOnInit() {}



}
