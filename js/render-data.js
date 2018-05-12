// Get JSON with data
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID[divisional] + "/od6/public/values?alt=json";
var xhReq = new XMLHttpRequest();
xhReq.open("GET", url, false);
xhReq.send(null);
var jsonObject = JSON.parse(xhReq.responseText);