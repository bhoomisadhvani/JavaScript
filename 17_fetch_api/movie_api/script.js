document.getElementById("form").addEventListener("submit", async (a) => {
  a.preventDefault();

  const movieName = document.getElementById("movie").value;

  const container = document.getElementById("container");

  container.innerHTML = "";

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=thewdb&s=${movieName}`,
    );

    const data = await res.json();

    console.log(data);

    if (data.Response !== "True") {
      throw new Error("Failed to fetch movie data");
    } else {
      data.Search.forEach((movie) => {
        const img = document.createElement("img");

        img.src = movie.Poster;
        img.alt = movie.Title;
        img.style.width = "180px";
        img.style.margin = "8px";

        container.appendChild(img);
      });
    }
  } catch (error) {
    console.log(error);
  }
});
