function updateClock() {
  var now = new Date();
  var options = {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Asia/Jakarta",
  };
  var date = now.toLocaleString("id-ID", options);

  var clockTspan = document.getElementById("clock-tspan");
  clockTspan.innerHTML = date.replace(/\./g, ":").replace("pukul", ",");
}

setInterval(updateClock, 1000);
