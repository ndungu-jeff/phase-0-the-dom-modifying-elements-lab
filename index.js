// Write your code here!

const main = document.querySelector('main#main')
main.remove()

let newHeader = document.createElement("h1")
newHeader.setAttribute("id","victory")
newHeader.innerHTML = `<h1>Jeff is the champion</h1>`