let now = new Date();
let year = now.getFullYear();
let months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let date = now.getDate();
if (date === 1 || date === 21 || date === 31) {
  date = date + `st`;
} else if (date === 2 || date === 22) {
  date = date + `nd`;
} else if (date === 3 || date === 23) {
  date = date + `rd`;
} else {
  date = date + `th`;
}

function displayTime() {
  let currentTime = document.querySelector("#egs");
  currentTime.innerHTML = `<li>
    <div class="row">
    <div class="col-5">
              <h3>
                Los Angeles <span class="country">US</span>
              </h3>
            </div>
            <h2 class="col-5" id="time">now</h2>
          </div>
        </li>
        <li> ${month} ${date} ${year} </li>
        <hr />
        <li>
          <div class="row">
            <div class="col-5">
              <h3>
                Paris <span class="country">FR</span>
              </h3>
            </div>
            <h2 class="col-5" id="time">now</h2>
          </div>
        </li>
        <li>${month} ${date} ${year}</li>
        <hr />
        <li>
          <div class="row">
            <div class="col-5">
              <h3>
                Tokyo <span class="country">JP</span>
              </h3>
            </div>
            <h2 class="col-5" id="time">now</h2>
          </div>
        </li>
        <li>${month} ${date} ${year}</li>
        <hr />
        <li>
          <div class="row">
            <div class="col-5">
              <h3>
                Sydney <span class="country">AU</span>
              </h3>
            </div>
            <h2 class="col-5" id="time">now</h2>
          </div>
        </li>
        <li>${month} ${date} ${year}</li>
        `;
}

function search(city) {
  let apiKey = "ec683a89-7ab8-43f3-af0e-1d01ff62c161";
  let apiUrl = `https://api.geekflare.com/loadtime`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTime);
}

displayTime();
