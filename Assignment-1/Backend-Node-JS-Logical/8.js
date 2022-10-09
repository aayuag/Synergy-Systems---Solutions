function CountingMinutes1(str) {
    var time = str.match(/(\d+)\:(\d+)(\w+)-(\d+)\:(\d+)(\w+)/);
    // console.log(time)
    var timeOneHrs = time[1] * 60;
    var timeOneMin = time[2];
    var timeTwoHrs = time[4] * 60;
    var timeTwoMin = time[5];
    if (time[6] === "pm") timeTwoHrs += 720;
    if (time[3] === "pm") {
        timeOneHrs += 720;
        timeTwoHrs += 1440;
    }

    return (timeTwoHrs-timeOneHrs) + (timeTwoMin-timeOneMin);
}

var str = "1:00pm-11:00am";
console.log(CountingMinutes1(str));