
    let daysDiv = document.querySelector(".days .dayss")
    let hoursDiv = document.querySelector(".hours .hourss")
    let minutesDiv = document.querySelector(".minutes .minutess")
    let secondsDiv = document.querySelector(".seconds .secondss")
    
    let fDate = new Date("07/20/2024");
    let sDate = new Date();
    let dInTime = fDate.getTime() - sDate.getTime();


    setInterval(function(){
        dInTime -= 1000;
    },1000)
    let inter = setInterval(()=> {
        daysDiv.innerHTML = ` ${Math.round(dInTime / (1000 * 3600 * 24))}`
        hoursDiv.innerHTML = ` ${Math.round(dInTime / (1000 * 3600))}`
        minutesDiv.innerHTML = ` ${Math.round(dInTime / (1000 * 60))}`
        secondsDiv.innerHTML = ` ${Math.round(dInTime / 1000  )}`
      },1000);
      
      // create setInterval function ?