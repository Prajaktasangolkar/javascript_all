// generate a random color
let intervalId;
const randomColor=function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for (let i=0;i<6;i++){
        // console.log(Math.floor(Math.random()*16));
        color+=hex[Math.floor(Math.random()*16)]
        // console.log('hex',hex[Math.floor(Math.random()*16)]);
        console.log('color',color);
    }
    return color
}
const startchangingColor=function(){
   if (!intervalId){ //means stop give null value then it again generate the radom number
    intervalId=setInterval(changeBgColor,1000)
   }
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor()
    }
}

const stopchangingColor=function(){
     clearInterval(intervalId)
     intervalId=null;
}

document.querySelector('#start').addEventListener('click',startchangingColor)
document.querySelector('#stop').addEventListener('click',stopchangingColor)