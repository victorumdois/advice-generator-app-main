const adviceId = document.getElementById('advice-id')
const adviceText = document.getElementById('advice-text')

getRandom()

function getRandom(){
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        adviceId.innerHTML = `ADVICE #${data.slip.id}`
        adviceText.innerHTML = `"${data.slip.advice}"`
    })
}