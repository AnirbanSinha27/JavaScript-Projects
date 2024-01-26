const zodiac=document.getElementById("zodiac");
const body=document.body;

const getColour=()=>{
    switch (zodiac.value) {
        case "sagitarius":
            body.style.backgroundColor="#ffa31a";
            break;
        
        case "virgo":
            body.style.backgroundColor="#800080";
            break;
            
        case "pieces":
            body.style.backgroundColor="#0066cc";
            break;

        case "scorpio":
            body.style.backgroundColor="#e60000";
            break;

        case "cancer":
            body.style.backgroundColor="#ffff00";
            break;

        case "taurus":
            body.style.backgroundColor="#00ff00";
            break;

        case "gemini":
            body.style.backgroundColor="#804000";
            break;

        case "leo":
            body.style.backgroundColor="#40bf80";
            break;

        case "capricorn":
            body.style.backgroundColor="#ffffcc";
            break;

        case "aquarius":
            body.style.backgroundColor="#cc66ff";
            break;

        case "libra":
            body.style.backgroundColor="#adad85";
            break;

        case "aries":
            body.style.backgroundColor="#ff1a75";
            break;
    
        default:
            body.style.backgroundColor="#ffffff";
            break;
    }
}