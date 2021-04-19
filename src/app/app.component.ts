import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FireBaseProject';

  itemName = '';
  itemAddress ='';
  itemEmail ='';
  itemLocation ='';
  itemContact ='';
    items: Observable<any[]>;
  

constructor(public db:AngularFireDatabase) {
  this.items = db.list('items').valueChanges();
}
onSubmit() {
this.db.list('items').push({ Name: this.itemName,Address:this.itemAddress,
  Email:this.itemEmail,Location:this.itemLocation,Contact:this.itemContact });
this.itemName = '';
this.itemAddress='';
this.itemEmail='';
this.itemLocation='';
this.itemContact ='';

}
}



