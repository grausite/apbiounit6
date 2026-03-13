const url = "biounit6quiz.pdf"

let pages = []

pdfjsLib.getDocument(url).promise.then(async function(pdf){

for(let i = 1; i <= pdf.numPages; i++){

let page = await pdf.getPage(i)
let content = await page.getTextContent()

let text = content.items.map(item => item.str).join(" ")

pages.push({
page: i,
text: text.toLowerCase(),
raw: text
})

}

})

document.getElementById("search").addEventListener("input", function(){

let keyword = this.value.toLowerCase()
let results = document.getElementById("results")

results.innerHTML = ""

if(keyword.length < 3) return

pages.forEach(p => {

if(p.text.includes(keyword)){

let div = document.createElement("div")

div.className = "result"

div.innerHTML = `
<div class="page">Page ${p.page}</div>
<div>${p.raw.substring(0,400)}...</div>
`

results.appendChild(div)

}

})

})
