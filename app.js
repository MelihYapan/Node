const { response } = require("express");
const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req , res){
    const url= "https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=71adb8c77866a0f873b0d5440ca3f692&units=metric0"
    https.get(url , function(response){
        console.log(response.statusCode);

        response.on("data" , function(data){
            const weatherData = JSON .parse(data)
            const temp = weatherData.main.temp
            const desc = weatherData.weather[0].description
            console.log(temp,desc)
        })
    });
    res.send("Server Hazır")
})



app.listen(1111,function(){
    console.log("Server");
})