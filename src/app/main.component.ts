import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{


  endDate = new Date("October 06, 2018, 18:00:00");
  currentDate  = new Date();
  day = 21;
  hours = 12;
  minutes = 0;
  seconds = 0;

  ngOnInit() {

    console.log("End Date : " + this.endDate);
    console.log("Current Date : " + this.currentDate);
    console.log(this.endDate.getTime() - this.currentDate.getTime())

    this.countIt()
  }

  countIt() {

      setTimeout(() => {

        var dateDiff: number = this.endDate.getTime() - this.currentDate.getTime();
        var daysLeft = dateDiff/86400000;
        var hoursLeft = dateDiff/3600000;
        var minutsLeft: number = dateDiff/60000;
        var secondsLeft = dateDiff/1000;

        // console.log("Date Diff : " + dateDiff)
        // console.log("Days Left : " + daysLeft)
        // console.log("Hours Left : " + hoursLeft)
        // console.log("Mins Left : " + minutsLeft)
        console.log("sec Left : " + secondsLeft)
        
        this.seconds = minutsLeft*60;
        this.seconds = secondsLeft - this.seconds;
        console.log("seconds : " + this.seconds)

        var minutes = hoursLeft*60;
        minutes = minutsLeft-minutes;
        // console.log("minutes : " + minutes)

        var hours = daysLeft*24;
        hours = (hoursLeft-hours) < 0 ? 0 : hoursLeft-hours;
        // console.log("hours : " + hours)

        var days = daysLeft;

        // if(days<=0) {days=0;}
        // if(hours<=0) {hours=0;}
        // if(minutes<=0) {minutes=0;}
        // if(seconds<=0) {seconds=0;}

        // this.startCount(days, hours, minutes, this.seconds)

    }, 1000)
  }

  startCount(days, hours, minutes, seconds){
    /*document.getElementById("counter").innerHTML="DAYS "+days+", HOURS "+hours+", MINUTES "+minutes+", SECONDS: "+seconds;*/
    // if(document.getElementById("counter")) {
    //     document.getElementById("counter").innerHTML="<div class='txt_cntr'><div class='dis-inblock'><div class='counter_section'><div class='plane'>"+days+"</div><p>days</p></div><div class='counter_separate'></div><div class='counter_section'><div class='plane'>"+hours+"</div><p>hours</p></div><div class='counter_separate'></div><div class='counter_section'><div class='plane'>"+minutes+"</div><p>minutes</p></div><div class='counter_separate'></div><div class='counter_section'><div class='plane'>"+seconds+"</div><p>seconds</p></div></div></div>";
        this.countIt();
    // }
  }

}
