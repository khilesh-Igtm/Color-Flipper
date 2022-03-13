const hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click",function(){
    let hexcolor = "#";
    for(let i=0;i<6;i++){
        hexcolor += hex[getrandomnumber()];

    }
   
    color.textContent = hexcolor;
    //here the color code is changed
    document.body.style.backgroundColor = hexcolor;
});
function getrandomnumber(){
    //random function will generate all random number in decimal form 
    //and that decimal number is being multiplied by hex values , and after
    // that they get floor (low ) values and we get our random color code .
    return Math.floor(Math.random()*hex.length);
}