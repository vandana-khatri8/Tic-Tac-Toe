let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".reset")
let newBtn = document.querySelector(".new-btn")
let msg = document.querySelector("#msg")
let msgcontainer = document.querySelector(".msg-container")

// 2 players playerX for x and player O for O
let turnO = true;// 
let count =0;
const winPattern= [
    [0,1,2],[3,4,5],[6,7,8],[2,5,8],
    [1,4,7],[0,3,6],[2,4,6],[0,4,8],
                   ];

                   const resetGame = ()=>{
                    turnO = true;
                    count = 0;
                    enableBoxes();
                    msgcontainer.classList.add("hide")
                   };

                   boxes.forEach((box) => {
                    box.addEventListener("click", () => {
                        

                        if(turnO){//palyer O

                            box.innerText ="O"
                            turnO = false;
                        }
                       else{// player X
                        box.innerText ="X";
                        turnO = true;
                       }
                       box.disabled = true;
                       count++ ;
                       let isWinner = checkWinner();

                       if(count === 9 && !isWinner){
                         gameDraw();
                       }


                        
                    })
                   });

                   const gameDraw = () => {
                    msg.innerText = "Game Was Draw";
                    msgcontainer.classList.remove("hide");
                    disableBoxes();

                   };
                    const disableBoxes =() => {
                     for (let box of boxes) {
                          box.disabled = true
                                         }
                                               }

                    const enableBoxes = ()=>{
                        for(let  box of boxes)
                        {
                            box.disabled = false;
                            box.innerText = "";
                        }
                    }
                   const showWinner = (Winner) => {
                    // console.log(Winner,"hey")
                    msg.style.color ="#366878"
                    msg.innerText =`congratulations, winner is ${ Winner}`;
                     msgcontainer.classList.remove("hide");
                     disableBoxes();
                }
                   const checkWinner = () => {
                    for (let pattern  of winPattern) {
                      
                        
                         let pos1Val =   boxes[pattern[0]].innerText;
                         let pos2Val =  boxes[pattern[1]].innerText;
                         let pos3Val =  boxes[pattern[2]].innerText;

                         if(pos1Val != "" &&  pos2Val != "" && pos3Val !="")
             
                           {
                            if( pos1Val === pos2Val && pos2Val=== pos3Val)
                            {
                                console.log("winner",pos1Val);

                                showWinner(pos1Val);
                                
                            }
                         
                                
                            }
                          }
                            }                        
            
                

                  newBtn.addEventListener("click",resetGame);
                  reset.addEventListener("click", resetGame);
                  
