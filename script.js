var username;
var password;
// Create a client instance: Broker, Port, Websocket Path, Client ID
client = new Paho.MQTT.Client("rick50.scorchedsilicon.com", Number(9099), "clientId" + Math.random());


window.addEventListener('DOMContentLoaded', function () {

    document.getElementById("save").addEventListener("click", function () {
        localStorage.setItem("username", document.getElementById("user").value);
        localStorage.setItem("password", document.getElementById("pass").value);
        document.getElementById("save").innerHTML = "Saved";
        username = localStorage.getItem("username");
        password = localStorage.getItem("password");
        document.getElementById("out").innerHTML = "Invalid user/pass";
        conn();
    });



});

function conn() {
    client.connect({
        onSuccess: onConnect,
        useSSL: true,
        userName: username,
        password: password,
        mqttVersion: 3
    });
}



// set callback handlers
client.onConnectionLost = function (responseObject) {
    console.log("Connection Lost: " + responseObject.errorMessage);
}

client.onMessageArrived = function (message) {
    //    console.log("Message Arrived: " + message.payloadString);
    
    //    console.log("Topic: " + topic);
 
}

// Called when the connection is made
function onConnect() {
    console.log("Connected");
    document.getElementById("out").innerHTML = "Logged in successfully!";
}

// Connect the client, providing an onConnect callback

