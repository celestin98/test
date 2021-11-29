import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {Level} from "../models/level";

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {


  constructor(private bd: AngularFirestore) {
  }

  getAllLanguage(){
  return this.bd.collection('language').valueChanges( {idField:'id'});
}

  addLanguageByUser(level: Level){
    return this.bd.collection('user').doc('IQ3QHdfUypfLfnYxy2Dq ').collection('language').doc(level.id).set(level);
  }
  getAllLanguageByuser(){
    return this.bd.collection('user').doc('IQ3QHdfUypfLfnYxy2Dq ').collection('language').valueChanges( {idField:'id'});
  }
  deleteLanguageUser(level: Level){
    return this.bd.collection('user').doc('IQ3QHdfUypfLfnYxy2Dq ').collection('language').doc(level.id).delete();
  }
}
