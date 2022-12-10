const curDate = document.getElementById("date");
let whethercon = document.getElementById("whethercon");

const tempStatus = "clouds";

const getCurrentDay = () => {

    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tues";
    weekday[3] = "Wednes";
    weekday[4] = "Thurs";
    weekday[5] = "Fri";
    weekday[6] = "Satur";

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
};
const getCurrentTime = () => {

    var months = [

        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];

    var now = new Date();
    var month = months[now.getMonth()];
    var day = now.getDate();

    let hours = now.getHours();
    let min = now.getMinutes();

    let period = "AM"
    if (hours > 11) {

        period = "PM"
        if (hours > 12) hours -= 12;

    }
    if (min < 10) {
        mins = "0" + min;
    }

    return `${month} ${day} | ${hours}:${min}${period}`

    // console.log(month + "/" + day);

};
curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();