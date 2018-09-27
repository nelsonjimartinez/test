import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 
  private loginform : FormGroup;
  constructor(private formBuilder: FormBuilder,
    private storage: Storage,
    private nav: Nav) 
    {
    this.loginform = this.formBuilder.group({
      user: ['', Validators.required],
      pass: ['',Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  logForm(){

   if (this.loginform.valid)
   {

    this.storage.set('user', this.loginform.value.user);
      this.nav.setRoot(HelloIonicPage)
   }


 
  }
}
