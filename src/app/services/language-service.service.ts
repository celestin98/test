import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {Level} from "../models/level";
import {Language} from "../models/language";

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {


  constructor(private bd: AngularFirestore) {
  }

  getAllLanguage(): Observable<any[]> {
    return this.bd.collection<Language>('language').snapshotChanges();
  }

  addLanguageByUser(level: Level) {
    console.log(level);
    return this.bd.collection('user').doc('D1jBh2GzbYedyoK80LAm').collection('language').doc(level.id).set(level);
  }

  getAllLanguageByuser() {
    return this.bd.collection('user').doc('D1jBh2GzbYedyoK80LAm').collection<Level>('language').snapshotChanges();
  }

  deleteLanguageUser(level: Level) {
    return this.bd.collection('user').doc('D1jBh2GzbYedyoK80LAm').collection('language').doc(level.id).delete();
  }
}
