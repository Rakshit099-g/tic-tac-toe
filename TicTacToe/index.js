let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msg = document.querySelector(".msg");
let showContainer = document.querySelector(".msg-container")
let turn0 = true;
const winPattern = [[0,1,2],
                    [0,3,6],
                    [0,4,8],
                    [1,4,7],
                    [2,5,8],
                    [3,4,5],
                    [6,7,8],
                    [2,4,6]
                ];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
             box.innerText="X";
             turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableBox = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBox = ()=>{
    for(let box of boxes){
        box.disabled=false;
    }

};
const showWinner = (winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    showContainer.classList.remove("hide");
    disableBox();
};
const checkWinner=()=>{
    for(let pattern of winPattern){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if(pos1!="" && pos1!="" && pos1!=""){
        if(pos1===pos2 && pos2===pos3){
            showWinner(pos1);
        }
    }
}
};
reset.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText="";
    }
    showContainer.classList.add("hide");
});
newbtn.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText="";
        enableBox();
    }
    showContainer.classList.add("hide");
});
