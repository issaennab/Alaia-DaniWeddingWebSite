import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Resolve } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';

export interface IMessage {

  name?: string,
  message?: string,
  fullName?: string,
  email?: string,
  isAttending?: string,
  mealChoice?: string,
  allergies?: string,

  isGuestComing?: string,
  guestFullName?: string,
  mealChoicePlusOne?: string,
  allergiesPlusOne?: string,
  
  guestFullNamePlusTwo?: string,
  mealChoicePlusTwo?: string,
  allergiesPlusTwo?: string,
  
  optionalNotes?: string,
  
  childName?: string,
  childAge?: string,
  allergiesForChild?: string,


}

@Injectable()
export class RSVPService {

  private emailUrl = '/assets/php/email.php';

  constructor(private http: Http) {
  }

  sendEmail(message: IMessage): Observable<IMessage> | any {
    
    console.log('Sending email was successfull', message);
    return this.http.post(this.emailUrl, message)
      .subscribe(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      // .catch(error => {
      //   console.log('Sending email got error', error);
      //   return Observable.throw(error)
      // })
  }
}