let questions = []

fetch("questions.json")
.then(res => res.json())
.then(data => {
questions = data
})

document.getElementById("search").addEventListener("input", function(){

let keyword = this.value.toLowerCase()
let results = document.getElementById("results")

results.innerHTML = ""

if(keyword.length < 3) return

questions.forEach(q => {

let text = q.question.toLowerCase()

if(text.includes(keyword)){

let div = document.createElement("div")
div.className = "result"

div.innerHTML = `
<div class="qnum">Question #${q.number}</div>
<div>${q.question}</div>
<br>
<div class="answer">Answer: ${q.answer}</div>
<div class="page">Page #: ${q.page}</div>
`

results.appendChild(div)

}

})

})
