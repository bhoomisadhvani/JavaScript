document.getElementById("btn").addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");

    const data = await res.json();

    console.log(data);

    document.getElementById("img").src = data.message;
  } catch (error) {
    console.log(error);
  }
});

// using Promise

// document.getElementById("btn").addEventListener("click", () => {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("Failed to fetch dog image");
//       }

//       return res.json();
//     })

//     .then((data) => {
//       console.log(data);

//       document.getElementById("img").src = data.message;
//     })

//     .catch((error) => {
//       console.log(error);
//      });
// });
