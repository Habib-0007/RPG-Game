let container = document.querySelector("main");
let computer = document.querySelector("#computerSection");
let player = document.querySelector("#playerSection");
let computerContent = document.querySelector("#computerSection div");
let playerContent = document.querySelector("#playerSection div");
let rock = document.querySelector(".rock div");
let paper = document.querySelector(".paper div");
let scissors = document.querySelector(".scissors div");
let allevents = document.querySelectorAll(".select section div");
let result = document.querySelector(".result");
let displayResult = document.querySelector(".displayResult");
let scores = document.querySelector(".scores");
let nextBtn = document.querySelector(".displayResult button");
let computerWins = document.querySelector(".computerWins");
let draw = document.querySelector(".draw");
let playerWins = document.querySelector(".playerWins");

				let comCount = 0;
				let drawCount = 0;
			 	let playCount = 0;		

function getRandomIcons () {
	let icons = Math.floor(Math.random() * allevents.length);
	console.log(icons);
	 let randomIcons = allevents[icons];
	 let randomIconsText = randomIcons.innerText
	return randomIconsText;
}

allevents.forEach( each => {	each.addEventListener("click", () => {
								if (each.innerText == "🪨") {
											computerContent.innerText = getRandomIcons();
											container.style.display = "none";
											displayResult.style.display = "flex";
															scores.style.display = "flex";
												playerContent.innerText = "🪨";
												
								}
							
								else if (each.innerText == "🧻") {
					computerContent.innerText = getRandomIcons();
						playerContent.innerText = "🧻";						
								} 
								
								else  {
					computerContent.innerText = getRandomIcons();
						playerContent.innerText = "✂️";						
								}
								
								
								if (computerContent.innerText == "🪨" && playerContent.innerText == "🪨")  {
												result.innerText = "Draw";
												container.style.display = "none";
											displayResult.style.display = "flex";
															scores.style.display = "flex";
								}
						   else if (computerContent.innerText == "🪨" && playerContent.innerText == "🧻")  {
												result.innerText = "You win";
												container.style.display = "none";
											displayResult.style.display = "flex";
															scores.style.display = "flex";
											}	
								else if (computerContent.innerText == "🪨" && playerContent.innerText == "✂️")  {
												result.innerText = "Computer wins";
												container.style.display = "none";
											displayResult.style.display = "flex";
															scores.style.display = "flex";
								}
								
								else if (computerContent.innerText == "🧻" && playerContent.innerText == "🪨")  {
												result.innerText = "Computer wins";
												container.style.display = "none";
											displayResult.style.display = "flex";
															scores.style.display = "flex";
								}
								
							 else if (computerContent.innerText == "🧻" && playerContent.innerText == "🧻")  {
												result.innerText = "Draw";
												container.style.display = "none";
											displayResult.style.display = "flex";
															scores.style.display = "flex";										
												
								}
								
								else if (computerContent.innerText == "🧻" && playerContent.innerText == "✂️")  {
												result.innerText = "You win";			
								container.style.display = "none";
											displayResult.style.display = "flex";
															scores.style.display = "flex";				
								}
								
								else if (computerContent.innerText == "✂️" && playerContent.innerText == "🪨")  {
												result.innerText = "You win";				
												container.style.display = "none";
											displayResult.style.display = "flex";
															scores.style.display = "flex";
								}

				else if (computerContent.innerText == "✂️" && playerContent.innerText == "🧻")  {
												result.innerText = "Computer wins";
												container.style.display = "none";
											displayResult.style.display = "flex";
															scores.style.display = "flex";
								}
								
								else if (computerContent.innerText == "✂️" && playerContent.innerText == "✂️")  {
												result.innerText = "Draw";
												container.style.display = "none";
											displayResult.style.display = "flex";
															scores.style.display = "flex";
								}
									
			 	
			 	if (result.innerText == "Computer wins") {
			 					comCount += 1;
			 					computerWins.innerText = `Computer: ${comCount}`;
			 	}
			
			 	else if (result.innerText == "Draw"){
			 					drawCount += 1;
			 					draw.innerText = `Draw: ${drawCount}`;
			 	} 
			 	
			 	else {
			 					playCount += 1;
			 					playerWins.innerText = `Player: ${playCount}`;
			 	}
			 	
			 	
								
				});
});

function showScore() {
				container.style.display = "block";
											displayResult.style.display = "none";
															scores.style.display = "none";
}

nextBtn.addEventListener("click", showScore);
