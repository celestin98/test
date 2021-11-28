import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {


  constructor(private bd: AngularFirestore) {
  }

  getAllLanguage(){
  return this.bd.collection('language').valueChanges();
}
}
