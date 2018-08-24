import { Component, OnInit } from '@angular/core';
import { RSVPService, IMessage } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  title = 'Angular PHP Email Example!';
  message: IMessage = {};
  messageResponse = null;

  constructor(private rsvpService: RSVPService) {
  }

  sendEmail(message: IMessage) {
    
    this.rsvpService.sendEmail(message).subscribe(res => {
      console.log('RSVP at main.omponent Success', res);
      if (res.status === 200) {
        this.messageResponse = "You have successfully submitted your RSVP";
      }
    }, error => {
      console.log('RSVP at main.omponent Error', error);
    })
  }

}
