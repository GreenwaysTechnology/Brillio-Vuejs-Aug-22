// dom programming using plain js : imperative pattern
function createElement() {
    //dom api
   var Heading= document.createElement('h1')
   Heading.innerHTML = 'Hello DOM!'
   Heading.style.backgroundColor = 'pink'
   var RootElement = document.getElementById('root')
   RootElement.appendChild(Heading)

}
createElement()