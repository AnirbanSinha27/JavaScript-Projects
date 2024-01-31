const dayElement=document.querySelector(".days");
const hourElement=document.querySelector(".hours")
const minuteElement=document.querySelector(".minutes")
const secondElement=document.querySelector(".seconds")
const heading=document.querySelector("h1");
const counterTimer=document.querySelector(".counterTimer");


const second=1000,
minute=60*second,
hour=60*minute
day=24*hour;

timeFunction=()=>{

    let now=new Date(),
    dd=String(now.getDate()).padStart(2,"0"),
    mm=String(now.getMonth()+1).padStart(2,"0"),
    yyyy=now.getFullYear();

    now=`${mm}/${dd}/${yyyy}`;

    const enteredDay=prompt("Enter Day").padStart(2,"0");
    const enteredMonth=prompt("Enter Month").padStart(2,"0");
    if((enteredDay>=1 && enteredDay<=31) && (enteredMonth>=1 && enteredMonth<=12))
        var targetDate=`${enteredMonth}/${enteredDay}/${yyyy}`;
    else{
        return alert("Invalid Date");
    }

    if(now>targetDate)
        targetDate=`${enteredMonth}/${enteredDay}/${yyyy+1}`;

    const intervalId=setInterval(()=>{
        const timer=new Date(targetDate).getTime();
        const today=new Date().getTime();

        const difference=timer-today;

        const dayLeft=Math.floor((difference/day));
        const hourLeft=Math.floor((difference%day)/hour);
        const minuteLeft=Math.floor((difference%hour)/minute);
        const secondLeft=Math.floor((difference%minute)/second);

        dayElement.innerText=dayLeft;
        hourElement.innerText=hourLeft;
        minuteElement.innerText=minuteLeft;
        secondElement.innerText=secondLeft;

        if(difference<0){
            counterTimer.style.display="none";
            heading.innerText="TIMES UP!";
            clearInterval(intervalId);
        }

    },0)
}

timeFunction();