import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user/User';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  recoverEmailPassword(email: string): Observable<void> {
    return new Observable<void>(observer => {
      this.auth.sendPasswordResetEmail(email).then(() => {
        observer.next();
        observer.complete();
      }).catch((error: any) => {
        observer.error(error);
        observer.complete();
      })
    })
  }

  login(email: string, password: string): Observable<User> {
    return new Observable<User>(observer => {
      this.auth.setPersistence('local').then(() => {
        return this.auth.signInWithEmailAndPassword(email, password);
      }).then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          observer.next({ email, id: user.uid });
          observer.complete();
        } else {
          observer.error('User is null');
          observer.complete();
        }
      }).catch(error => {
        observer.error(error);
        observer.complete();
      });
    });
  }
}
