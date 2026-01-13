let hscore = Number(localStorage.getItem("hscore"))
document.getElementById("hscore").textContent = `High Score: ${hscore}`
let random_choice = Math.floor(Math.random() * 3) + 1
console.log(random_choice)
let player_choice
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let para = document.getElementById("speak")
let score = 0

function update_game() {
	document.getElementById("score").textContent = `Score: ${score}`
	random_choice = Math.floor(Math.random() * 3) + 1
}

function lose() {
	score = 0
	document.getElementById("score").textContent = `Score: ${score}`
}

function high_score() {
	if (score > Number(hscore)) {
		hscore = score
		localStorage.setItem("hscore", hscore)
		document.getElementById("hscore").textContent = `High Score: ${localStorage.getItem("hscore")}`
	}
}

rock.addEventListener("click", function () {
	if (random_choice === 1) {
		para.textContent = "It's a draw!"
		update_game()
	} else if (random_choice === 2) {
		para.textContent = "You lose..."
		lose()
		update_game()
	} else {
		para.textContent = "You win!"
		score += 1
		update_game()
		high_score()
	}
})

paper.addEventListener("click", function () {
	if (random_choice === 1) {
		para.textContent = "You win!"
		score += 1
		update_game()
		high_score()
	} else if (random_choice === 2) {
		para.textContent = "It's a draw!"
		random_choice = Math.floor(Math.random() * 3) + 1
		update_game()
	} else {
		para.textContent = "You lose..."
		lose()
		update_game()
	}
})

scissors.addEventListener("click", function () {
	if (random_choice === 1) {
		para.textContent = "You lose..."
		lose()
		update_game()
	} else if (random_choice === 2) {
		para.textContent = "You win!"
		score += 1
		update_game()
		high_score()
	} else {
		para.textContent = "It's a draw!"
		random_choice = Math.floor(Math.random() * 3) + 1
		update_game()
	}
	console.log("scissors")
})

