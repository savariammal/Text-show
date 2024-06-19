const t=document.getElementById("txt");
const b=document.getElementById("btn");
const h=document.getElementById("show");
const showtext=()=>{
    if(t.value.length==0)
    {
        alert("Enter text");
        return;
    }
    h.innerText=t.value;
    t.value=" ";
};
b.addEventListener("click",showtext);

