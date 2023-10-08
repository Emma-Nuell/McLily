
const boo = document.querySelector(".boo")
const accDropdown = document.querySelector(".acc-dropdown")
const name1 = boo.querySelector("p")
const signIn = accDropdown.querySelector("button")
const loginDropdown = document.querySelector(".login-dropdown")
const arrowUp = document.querySelector(".fa-angle-up")
const arrowDown = document.querySelector(".fa-angle-down")
const loggedIcon = document.querySelector(".ri-user-follow-line")
const guestIcon = document.querySelector(".guest")
const signOut= document.getElementById("signoutbtn")
let dropdownState = false;

const token = window.localStorage.getItem("token")
const userName = window.localStorage.getItem("name")

const user = userName ? userName : "User"


if (token) {
    name1.innerText = `Hi, ${user}`
    loggedIcon.style.display = "inline"
    guestIcon.style.display = "none"
    boo.addEventListener("click", () => {
        if (!dropdownState) {
            loginDropdown.style.display = "flex"
            arrowDown.style.display = "none"
            arrowUp.style.display = "inline"
            dropdownState = true
    }
        else {
            loginDropdown.style.display = "none"
            arrowDown.style.display = "inline"
            arrowUp.style.display = "none"
            dropdownState = false
        }
    })
}
else {
    name1.innerText = `Account`
    loggedIcon.style.display = "none"
    guestIcon.style.display = "inline"
    boo.addEventListener("click", () => {
        if (!dropdownState) {
            accDropdown.style.display = "flex"
            arrowDown.style.display = "none"
            arrowUp.style.display = "block"
            dropdownState = true
    }
        else {
            accDropdown.style.display = "none"
            arrowDown.style.display = "inline"
            arrowUp.style.display = "none"
            dropdownState = false
        }
    })
}
signIn.addEventListener("click", () => {
    window.location.href = "login.html"
})
signOut.addEventListener("click", () => {
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("name")
    window.location.href  = "index.html"
})


