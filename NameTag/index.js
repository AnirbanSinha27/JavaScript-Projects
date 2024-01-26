const name=document.getElementById("name");
const div=document.querySelector(".tags");

const addText=()=>{
    if(name.value===""){
        return null;
    }

    const tag=document.createElement("div");
    tag.setAttribute("class","tag");
    tag.innerText=`Hi, I am ${name.value}!`;
    div.append(tag);
}