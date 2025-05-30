let myCards = [
  { cimg: "/valhalla_project/assets/images/1747122474_main.png" },
  { cimg: "/valhalla_project/assets/images/1747122449_main.png" },
  { cimg: "/valhalla_project/assets/images/1747122433_main.png" },
];

function cardsFunction() {
  const cardsbody = document.getElementById("getCards");
  let cardInner = "";

  for (let i = 0; i < myCards.length; i++) {
    cardInner += `
      <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
        <div class="card rounded-3 mt-1">
          <div class="card-img px-3 py-4">
            <img src="${myCards[i].cimg}" class="img-fluid" alt="Card image">
            <div class="position-absolute">
              <button class="d-flex align-items-center btn btn-secondary bgchangebutton px-3 rounded-5">
                <h5 class="d-inline mt-2 onclick = openul()">+ Gift</h5>
                <svg  width="22" height="22" viewBox="0 0 22 22" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6186 10.4137L17.8784 8.82378C20.5186 6.57389 17.8684 2.3741 14.6982 3.80403L13.8281 4.17401L13.7181 3.21406C13.6181 2.13411 13.0581 1.36415 12.318 0.914168C10.6779 -0.038786 8.17771 0.614182 7.77769 2.99407L5.02749 1.41414C4.06743 0.854171 2.84734 1.18415 2.2973 2.14411L1.29723 3.87402C1.01722 4.354 1.18723 4.96397 1.66726 5.24396L9.4578 9.74374L10.9579 7.14386L12.688 8.14382L11.1879 10.7437L18.9785 15.2435C19.4585 15.4935 20.0785 15.3535 20.3486 14.8735L21.3486 13.1436C21.8987 12.1836 21.5786 10.9637 20.6186 10.4137ZM10.9879 4.49399C10.1178 4.74398 9.4178 3.81403 9.85783 3.04406C10.1178 2.56409 10.7479 2.40409 11.2279 2.67408C11.998 3.12406 11.848 4.284 10.9879 4.49399ZM16.1783 7.49385C15.3182 7.74383 14.6182 6.81388 15.0582 6.04392C15.3282 5.56394 15.9483 5.40395 16.4183 5.67393C17.1883 6.12391 17.0383 7.28386 16.1783 7.49385ZM19.4885 16.3734C19.8985 16.3734 20.2886 16.2334 20.6186 15.9934V19.4933C20.6186 20.6032 19.7285 21.4932 18.6184 21.4932H2.61733C2.08686 21.4932 1.57811 21.2825 1.20301 20.9074C0.827916 20.5324 0.617188 20.0237 0.617188 19.4933V10.4937H8.76776L9.61781 10.9937V19.4933H11.618V12.1436L18.4884 16.1034C18.7885 16.2834 19.1185 16.3734 19.4885 16.3734Z" fill="#FFFFFF"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  cardsbody.innerHTML = cardInner;
  function openul() {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerText = "CONSUMABLE";
    ul.appendChild(li);
    // console.log(ul);
  }

  const cards = document.querySelectorAll(".card");

  if (cards.length > 0) {
    cards[0].classList.add("active");
    const firstButton = cards[0].querySelector(".bgchangebutton");
    if (firstButton) firstButton.classList.add("active");
  }

  cards.forEach((card) => {
    const button = card.querySelector(".bgchangebutton");

    card.addEventListener("click", function (event) {
      event.stopPropagation();
      cards.forEach((c) => c.classList.remove("active"));
      this.classList.add("active");
    });

    if (button) {
      button.addEventListener("click", function (event) {
        event.stopPropagation();
        cards.forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", cardsFunction);
// suggestion work here

const players = ["Suleman", "Zain", "Bilal", "Asrar", "Abdul Rehaman", "Ayaz"];
const refresh = document.querySelector(".refreshbutton");
refresh.style.display = "none";

function suggestedPlayers() {
  if (refresh.style.display === "none") {
    refresh.style.display = "block";
  }
  let shuffled = players.slice();
  const playersDiv = document.querySelector(
    "#player-suggestions .players-list"
  );
  playersDiv.innerHTML = "";
  // Fisher-Yates shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  let text =
    "<div class='dropdown dynamic-dropdown'> <ul class='dropdown-menu dynamic-dropdown-menu show'>";
  shuffled.forEach(function (item) {
    text +=
      "<li><a class='dropdown-item dynamic-dropdown-item'>" +
      item +
      "</a></li>";
  });
  text += "</ul></div>";

  playersDiv.innerHTML = text;
}

document.getElementById("suggestBtn").disabled = false;

const timerContainer = document.getElementById("timerContainer");
const timeset = document.getElementById("timeset");
const totalhours = 24;
const totalhoursintoMS = totalhours * 60 * 60 * 1000;
function timerfn() {
  const lastSendTime = localStorage.getItem("cardLastSendTime");
  if (lastSendTime) {
    const now = new Date().getTime();
    const remainingTime = parseInt(lastSendTime) + totalhoursintoMS - now;

    if (remainingTime > 0) {
      sendBtn.disabled = true;
      timerContainer.style.display = "block";
      startTimer();
    } else {
      localStorage.removeItem("cardLastSendTime");
    }
  }
}

// window.addEventListener("load", timerfn());
