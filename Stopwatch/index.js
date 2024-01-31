const clock=document.querySelector(".clock");
let sec=0,min=0,hr=0,intervalId;

const startStopwatch=()=>{
    intervalId=setInterval(() => {
        if(sec<59){
            sec++;
        }
        else if(min>59){
            min=0;
            hr++;
        }
        else{
            sec=0;
            min++;
        }

        const second=String(sec).padStart(2,"0");
        const minute=String(min).padStart(2,"0");
        const hour=String(hr).padStart(2,"0");

        clock.innerText=`${hour}:${minute}:${second}`;


    }, 1000);
}

const stopStopwatch=()=>{
    clearInterval(intervalId);
    sec=0;
    min=0;
    hr=0;
}