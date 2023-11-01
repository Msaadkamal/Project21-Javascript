const hourEI=document.getElementById("hour");
const menuteEI=document.getElementById("minute");
const secondEI=document.getElementById('second');
const ampmEl=document.getElementById('ampm');
const updateclock =()=>{
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm= 'AM';
    if(h>12){
        h= h-12;
        ampm='PM'
    }
    h= h <10 ? '0'+h: h;
    m= m <10? '0'+m: m;
    s= s <10? '0' + s: s;

    
    hourEI.innerText=h;
    menuteEI.innerText= m;
    secondEI.innerText=s;
    ampmEl.innerText=ampm;
    setTimeout(() => {
        updateclock()   
    },1000);
    


}



updateclock();