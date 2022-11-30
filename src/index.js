let now = new Date();
let date = now.getDate();
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
function ordinalDate() {
  let date = now.getDate();
  if (date === 1 || date % 10 === 1) {
    return now.getDate() + `st`;
  } else if (date === 2 || date % 10 === 2) {
    return now.getDate() + `nd`;
  } else if (date === 3 || date % 10 === 3) {
    return now.getDate() + `rd`;
  } else {
    return now.getDate() + `th`;
  }
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

ordinalDate();
displayTime();
