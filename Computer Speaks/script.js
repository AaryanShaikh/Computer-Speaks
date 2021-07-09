const playbtn = document.getElementById('playbtn')
const pausebtn = document.getElementById('pausebtn')
const stopbtn = document.getElementById('stopbtn')
const text = document.getElementById('text')
const speed = document.getElementById('speed')

playbtn.addEventListener('click', () => {/*whenever we click on the button*/
	playText(text.value)/*play audio of whatever is being typed*/
})

pausebtn.addEventListener('click', () =>{
	pauseText() 
})

stopbtn.addEventListener('click', ()=>{
	stopText()
})

function playText(textt) {
	if (speechSynthesis.paused && speechSynthesis.speaking) {
		return speechSynthesis.resume()
	}
	const utterance = new SpeechSynthesisUtterance(textt)/*to run speechSynthesis what voice,speed,text youre speaking*/
	utterance.rate = speed.value || 1/*specifing the speed or giving 1 if value is null*/
	utterance.addEventListener('end', () =>{
		text.disabled = false
	})
	text.disabled = true
	speechSynthesis.speak(utterance)/*making pc speak*/
}

function pauseText() {
	if (speechSynthesis.speaking) speechSynthesis.pause()
}

function stopText() {
	speechSynthesis.resume()
	speechSynthesis.cancel()
}