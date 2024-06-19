const { response } = require("express");
const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req , res){
    const url= "Api Key"
    https.get(url , function(response){
        console.log(response.statusCode);

        response.on("data" , function(data){
            const weatherData = JSON .parse(data)
            const temp = weatherData.main.temp
            const desc = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
            console.log(temp,desc)
            res.write("<p>Weather is "+ desc+"</p>");
            res.write("<body bgcolor='gray'>  <h1 style='color:white' color='white'>The Temprature "+temp+"</h1></body>");
            res.write("<img src="+ imageURL+">")
            res.send();
        })
    });
})



app.listen(1111,function(){
    console.log("Server");
})
