let score={};
                score=JSON.parse(localStorage.getItem('score'));

                if(score===null){
                    score={
                    Wins: 0,
                    Losses: 0,
                    Ties:0
                };
                }

                updateScoreElement();
                                

                function playGame(playerMove){
                    computerMove= pickComputerMove();
               
                result='';
                if(playerMove==='scissors'){
                    if(computerMove==='rock'){
                        result='you lose';
                    }else if(computerMove==='paper'){
                        result='you win';
                    }else if(computerMove==='scissors'){
                        result='tie';}

                     }else if(playerMove==='paper'){
                        
                        if(computerMove==='rock'){
                            result='you win';
                        }else if(computerMove==='paper'){
                            result='tie';
                        }else if(computerMove==='scissors'){
                            result='you lose';}

                     }else if(playerMove==='rock'){
    
                        if(computerMove==='rock'){
                        result='tie';
                        }else if(computerMove==='paper'){
                        result='you lose';
                        }else if(computerMove==='scissors'){
                        result='you win';
                        }
                    }
                    if(result==='you win'){
                        score.Wins+=1;
                    }else if(result='you lose'){
                        score.Losses+=1;
                    }else if(result='tie'){
                        score.Ties+=1;
                    }

                    localStorage.setItem('score',JSON.stringify(score));  
                    // localStorage stores the data in local storage so we dont lose the progress and JSON.stringify converts the score(which is an object) into a string since localStorage only supports string.

                 updateScoreElement();
                
                 document.querySelector('.js-result')
                    .innerHTML=`${result}`;
                document.querySelector('.js-moves')
                    .innerHTML=`You <img src="thumbnail/${playerMove}-emoji.png "  class="image2"> <img src="thumbnail/${computerMove}-emoji.png" class="image2"> Computer`

                    /*alert(`You picked ${playerMove}.Computer picked ${computerMove}.${result}
Wins:${score.Wins},
Losses:${score.Losses},
Ties:${score.Ties}`);*/

                }
               
                function updateScoreElement(){
                    document.querySelector('.js-score')
                    .innerHTML=`Wins:${score.Wins}\n,
                                Losses:${score.Losses}\n,
                                Ties:${score.Ties}\n`;
                        }
                function pickComputerMove(){
                    let computerMove='';
                    const randomNum= Math.random();
               if(randomNum>=0 && randomNum<=1/3){
                computerMove='rock';
               }else if(randomNum>=1/3 && randomNum<=2/3){
                computerMove='paper';
               }else if(randomNum>=2/3 && randomNum<=1){
                computerMove='scissors';
               }

               return computerMove;
                }