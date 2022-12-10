const curDate = document.getElementById("date");
let whethercon = document.getElementById("whethercon");

const tempStatus = "clouds";

const getCurrentDay = () => {
    
    var weekend = new Array(7);
    weekday[0] ="sunday";
    weekday[1] ="monday";
    weekday[2] ="tuesday";
    weekday[3] ="wednesday";
    weekday[4] ="thursday";
    weekday[5] ="friday";
    weekday[6] ="saturday";

     let currentTime = new Date();
     console.log(weekday[currentTime.getDay()]);
};