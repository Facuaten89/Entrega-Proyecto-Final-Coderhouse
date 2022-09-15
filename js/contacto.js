

class User {
    constructor(username, password, email , ciudad , provincia , cpostal , validationTextarea) {
        this.username = username
        this.password = password
        this.email = email
        this.ciudad = ciudad
        this.provincia = provincia
        this.cpostal = cpostal
        this.validationTextarea = validationTextarea
    }
}

const idForm = document.getElementById("idForm")
const divUsers = document.getElementById("divUsers")


const users = []

idForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const email = document.getElementById("email").value 
    const ciudad = document.getElementById("ciudad").value
    const provincia = document.getElementById("provincia").value
    const cpostal = document.getElementById("cpostal").value
    const validationTextarea = document.getElementById("validationTextarea").value

    const user = new User(username, password, email, ciudad, provincia, cpostal, validationTextarea)

    users.push(user)

    idForm.reset()
    console.log(users)
})


