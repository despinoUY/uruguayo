// Get JSON with data
var xhReq = new XMLHttpRequest();
xhReq.open("GET", url, false);
xhReq.send(null);
var jsonObject = JSON.parse(xhReq.responseText);