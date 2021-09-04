let Homeslide = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRItbCRfL0ptsRAn3R23QoSyrQFQJfGkyEKEA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0k_cQD4r1p_7z1lZd_kbO0g6kJj5n_bOcmQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBCCdpD-uWT67wzcyCZqvWqfxBxp5dGFEgT4oAo3s3MTdSNF09WOiVjDueEia0nyXcsQ&usqp=CAU"];
let index = 0;
function filled1(){
    index = 0;
}
function filled2(){
    index = 1;
}
function filled3(){
    index = 2;
}

setInterval(function(){
    function filled1(){
        index = 0;
    }
    function filled2(){
        index = 1;
    }
    function filled3(){
        index = 2;
    }
    
    document.getElementById("navimg").style.backgroundImage = `url(${Homeslide[index++]})`;
    if(index > 2)
    {
        index=0;
    }
},3000);