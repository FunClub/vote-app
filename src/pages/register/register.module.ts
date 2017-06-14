import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    FormsModule
  ],
  exports: [
    RegisterPage
  ]
})
export class RegisterPageModule {}
