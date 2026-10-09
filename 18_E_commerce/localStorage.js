const data={
    id:"xyz",
    password:"124"
}

// setItem

localStorage.setItem("data",JSON.stringify(data))

//getitem

const userData = JSON.parse(localStorage.getItem("data"))

console.log(userData)

document.getElementById("localStorage").innerHTML=userData.password;