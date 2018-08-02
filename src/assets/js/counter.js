countIt();

function countIt(){
    year = 2013;
    month = 10; // starts from 0
    day = 21;
    hours = 12;
    minutes = 00;
    seconds = 00;

    /*code for demonstration*/
        _date=new Date()
        year=(_date.getFullYear()+1);
    /*end code for demonstration*/
    
    setTimeout(function(){
    // endDate = new Date(year, month, day, hours, minutes, seconds, 00);
    endDate = new Date("October 06, 2018, 18:00:00");
    thisDate  = new Date();
    // thisDate  = new Date(thisDate.getFullYear(), thisDate.getMonth() + 1, thisDate.getDay(), thisDate.getHours(), thisDate.getMinutes(), thisDate.getSeconds(), 00, 00);


    // console.log("endDate = " + endDate);
    // console.log("thisDate = " + thisDate);
    
    var daysLeft = parseInt((endDate-thisDate)/86400000);
    var hoursLeft = parseInt((endDate-thisDate)/3600000); 
    var minutsLeft = parseInt((endDate-thisDate)/60000);
    var secondsLeft = parseInt((endDate-thisDate)/1000);
    
    seconds = minutsLeft*60;
    seconds = secondsLeft-seconds;
    
    minutes = hoursLeft*60;
    minutes = minutsLeft-minutes;
    
    hours = daysLeft*24;
    hours = (hoursLeft-hours) < 0 ? 0 : hoursLeft-hours;
    
    days = daysLeft;

    if(days<=0) {days=0;}
    if(hours<=0) {hours=0;}
    if(minutes<=0) {minutes=0;}
    if(seconds<=0) {seconds=0;}
        
    startCount(days, hours, minutes,seconds);
    }, 1000);
}

function startCount(days, hours, minutes, seconds){
    /*document.getElementById("counter").innerHTML="DAYS "+days+", HOURS "+hours+", MINUTES "+minutes+", SECONDS: "+seconds;*/
    if(document.getElementById("counter")) {
        document.getElementById("counter").innerHTML="<div class='txt_cntr'><div class='dis-inblock'><div class='counter_section'><div class='plane'>"+days+"</div><p>days</p></div><div class='counter_separate'></div><div class='counter_section'><div class='plane'>"+hours+"</div><p>hours</p></div><div class='counter_separate'></div><div class='counter_section'><div class='plane'>"+minutes+"</div><p>minutes</p></div><div class='counter_separate'></div><div class='counter_section'><div class='plane'>"+seconds+"</div><p>seconds</p></div></div></div>";
        countIt();
    }
}

