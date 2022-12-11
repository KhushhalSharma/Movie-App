function image() {
  let url = [
    "https://mypenmyfriend.com/wp-content/uploads/2021/10/best-movies-1614634680.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/summer-movies-1587392939.jpg",
    "https://fasnetcinema.com/wp-content/uploads/2022/07/fall-movies-index-1628968089.jpg",
  ];
  let container = document.querySelector("#rolling");
  let img = document.createElement("img");
  i = 0;
  img.src = url[0];
  container.append(img);
  i++;
  setInterval(function () {
    if (i === 3) {
      i = 0;
    }
    img.src = url[i];
    container.append(img);
    i++;
  }, 3000);
}
image();

// let btn = document.querySelector("#btn");

// btn.addEventListener("click", Mycal);

function Mycal() {
  let search = document.getElementById("search").value;
  console.log(search);

  async function getData() {
    try {
      let res = await fetch(
        `http://www.omdbapi.com/?apikey=c4af05b3&s=${search}`
      );

      let data = await res.json();

      let actualData = data.Search;
      display(actualData);
      if (actualData === undefined) {
        return false;
      }
      // console.log(actualData)
    } catch (err) {
      console.err;
    }
  }
  getData();
}

function display(data) {
  let big = document.getElementById("movies");
  big.innerHTML = null;

  data.forEach(function (el) {
    let box = document.createElement("div");

    let name = document.createElement("h1");
    name.innerText = el.Title;

    let Year = document.createElement("p");
    Year.innerText = el.Year;

    let Poster = document.createElement("img");
    Poster.src = el.Poster;

    box.append(Poster, name, Year);

    big.append(box);
  });
}

// func=Mycal

let id;

function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(function () {
    func();
  }, delay);
  console.log(id);
}
