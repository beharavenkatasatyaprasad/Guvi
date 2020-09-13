//API : https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY

var request = new XMLHttpRequest()
var url_string = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=';
var apikey = '63904f261c9606f3523afee19bc1553d';
request.open('GET',url_string+apikey, true) 
request.send();

request.onload = function() {
  
var data = JSON.parse(this.response)
console.log(data);
}
