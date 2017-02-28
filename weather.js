
var j={"Thunderstorm":"Thunderstorm predicted!!!Carry an umbrella","Drizzle":"Drizzle!!Enjoy your day","Clear":"Clear Sky!!Have a Great Day","Clouds":"Clouds!! Advisable to Carry an Umbrella","Extreme":"Extreme weather conditions expected!! Advisable to Carry an Umbrella and a Coat","Rain":"Rain!!!!Carry an Umbrella","Snow":"Snow!!! Advisable to wear a Coat","Atmosphere":"Fog/dusty weather conditions expected!!Carry good pair of glasses visibility might be impaired"}

var api_key = "d3278c933255b361557b54d4791b6667";

function sendRequest () {
    var xhr = new XMLHttpRequest();
   // var method = "artist.getinfo";
    var city = encodeURI(document.getElementById("form-input").value);
    xhr.open("GET", "proxy.php?q="+city+"&appid="+api_key+"&format=json"+"&units=metric", true);
    xhr.setRequestHeader("Accept","application/json");
	//console.log(xhr);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var json = JSON.parse(this.responseText);
			var sunrise=(json.sys['sunrise'])*1000;
			var d=new Date(sunrise);
			var sunri=d.toTimeString();
			var sunset=(json.sys['sunset'])*1000;
			var d1=new Date(sunset);
			var sunse=d1.toTimeString();
			var str = JSON.stringify(json,undefined,2);
			var date=d1.toDateString();
			var digit=(json.weather[0]['id']).toString()[0];
			var digit1=(json.weather[0]['id']).toString()[1];
			var digit2=(json.weather[0]['id']).toString()[2];
			if(digit=='7'){
			var output="<br>"+"Suggestion: "+"Better to carry some safety glasses for foggy and dusty weather"+"<br>"+"Weather Description: "+json.weather[0]['description']+"<br>"+"City: "+json.name+"<br>"+"Lat: "+json.coord['lat']+"<br>"+"Lon: "+json.coord['lon']+"<br>"+"Sunrise: "+sunri+"<br>"+"Sunset: "+sunse+"<br>"+"Clouds: "+json.clouds['all']+"<br>"+"Temp: "+json.main['temp']+"<br>"+"MinTemp: "+json.main['temp_min']+"<br>"+"MaxTemp: "+json.main['temp_max']+"<br>"+"Pressure: "+json.main['pressure']+"<br>"+"Humidity: "+json.main['humidity']+"<br>"+"Date: "+date
			}
			else if(digit =='9'){
			     if(digit1!='0'&&digit2>6){
			var output="<br>"+"Suggestion: "+"Extreme Weather Conditions Expected!!!"+"<br>"+"City: "+json.name+"<br>"+"Lat: "+json.coord['lat']+"<br>"+"Lon: "+json.coord['lon']+"<br>"+"Sunrise: "+sunri+"<br>"+"Sunset: "+sunse+"<br>"+"Clouds: "+json.clouds['all']+"<br>"+"Temp: "+json.main['temp']+"<br>"+"MinTemp: "+json.main['temp_min']+"<br>"+"MaxTemp: "+json.main['temp_max']+"<br>"+"Pressure: "+json.main['pressure']+"<br>"+"Humidity: "+json.main['humidity']+"<br>"+"Date: "+date
			}
			else{
			var output="<br>"+"Suggestion: "+"Wonderful Weather with Gentle breeze!!!!"+"<br>"+"City: "+json.name+"<br>"+"Lat: "+json.coord['lat']+"<br>"+"Lon: "+json.coord['lon']+"<br>"+"Sunrise: "+sunri+"<br>"+"Sunset: "+sunse+"<br>"+"Clouds: "+json.clouds['all']+"<br>"+"Temp: "+json.main['temp']+"<br>"+"MinTemp: "+json.main['temp_min']+"<br>"+"MaxTemp: "+json.main['temp_max']+"<br>"+"Pressure: "+json.main['pressure']+"<br>"+"Humidity: "+json.main['humidity']+"<br>"+"Date: "+date
			}
			}
			else{
			var output="<br>"+"Suggestion: "+j[json.weather[0]['main']]+"<br>"+"Weather Description: "+json.weather[0]['description']+"<br>"+"City: "+json.name+"<br>"+"Lat: "+json.coord['lat']+"<br>"+"Lon: "+json.coord['lon']+"<br>"+"Sunrise: "+sunri+"<br>"+"Sunset: "+sunse+"<br>"+"Clouds: "+json.clouds['all']+"<br>"+"Temp: "+json.main['temp']+"<br>"+"MinTemp: "+json.main['temp_min']+"<br>"+"MaxTemp: "+json.main['temp_max']+"<br>"+"Pressure: "+json.main['pressure']+"<br>"+"Humidity: "+json.main['humidity']+"<br>"+"Date: "+date
            }
			document.getElementById("output").innerHTML = output;
			console.log(str);
        }
    };
    xhr.send(null);
}
