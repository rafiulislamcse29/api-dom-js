const text = document.querySelector(".text")
const btn = document.querySelector(".btn")
const container = document.querySelector(".container")
btn.addEventListener("click", function (e) {

  const p = document.createElement("p")
  p.classList.add("child")

  container.appendChild(p)
  p.textContent = text.value
  text.value = ""

  const allComments = document.querySelectorAll(".child")
  for (const element of allComments) {
    element.addEventListener("click", function (e) {
      // e.target.remove()
      e.target.parentElement.removeChild(element)
    })
  }

})


async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()
  

  users.forEach((user)=>{
    // way 1
    const div = document.createElement("div")
    // div.classList.add("user")
  //   div.innerHTML=`
  //   <h4>${user.name} we2e</h1>
  //   <p>${user.email}</p>
  //   <p>${user.phone}</p>
  //   `
  // container.appendChild(div)  

  // way 2
  html=`
  <div class="user">
  <h4>${user.name} we2e</h1>
  <p>${user.email}</p>
  <p>${user.phone}</p>
  </div>
    `
   container.insertAdjacentHTML("afterbegin",html) 
  })


}


getUsers()