var answer = "NO"
var weekday = nowArray[0]
var month = nowArray[1]
var dayNumber = nowArray[2]
var year = nowArray[3]
var time = nowArray[4]

var timeArray = time.split(":")
var hours = timeArray[0]
var minutes = timeArray[1]
var seconds = timeArray[2]

function weekend(IsItTheWeekend){
    if (weekday === "sun" || weekday === "sat"){
    return "It's the weekend!"
}
else{
    return "It's not the weekend"
}
}



function setup(){
    createCanvas(windowWidth,windowHeight)
}
function draw(){
    background('pink')
    textSize(32)
    fill('dodgerblue')
    text("Is it the weekend? " + answer, 40, 40 )
    
    var rightNow = new Date( ).toString( )

var nowArray = rightNow.split(" ")





}


