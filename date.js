var rightNow = new Date( ).toString( )

var nowArray = rightNow.split(" ")



var weekday = nowArray[0]
var month = nowArray[1]
var dayNumber = nowArray[2]
var year = nowArray[3]
var time = nowArray[4]

var timeArray = time.split(":")
var hours = timeArray[0]
var minutes = timeArray[1]
var seconds = timeArray[2]

if (weekday === "sun" || weekday === "sat"){
    return "It's the weekend!"
}
else{
    return "It's not the weekend"
}

console.log(weekday)
