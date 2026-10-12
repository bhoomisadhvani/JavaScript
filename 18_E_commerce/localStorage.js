const data = {
  id: "xyz",
  password: "01234",
};

// setItem

localStorage.setItem("data", JSON.stringify(data));

// getItem

const userData = JSON.parse(localStorage.getItem("data"));

console.log(userData);

document.getElementById("localStorage").innerHTML = userData.password;
