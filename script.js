const maindate = document.querySelector(".date h2");
const date = new Date();

const monthNames = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const formattedDate = `${monthNames[date.getMonth()]}'${date.getDate()}`;

maindate.innerText = formattedDate;

const htmltime = document.querySelector(".time p");

setInterval(() => {
  time = Date();
  day = time[0] + time[1] + time[2];
  time =
    time[16] +
    time[17] +
    time[18] +
    time[19] +
    time[20] +
    time[21] +
    time[22] +
    time[23] +
    time[24];

  htmltime.innerHTML = `<span>${time}</span> ${day} `;
}, 1000);


