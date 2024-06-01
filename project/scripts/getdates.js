var lastUpdateTimestamp = 1645378927000;

function formatDate(timestamp) {
  var date = new Date(timestamp);
  return date.toLocaleString();
}

document.getElementById('updateTime').innerText = formatDate(lastUpdateTimestamp);