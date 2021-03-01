var username = localStorage.getItem("username");
var password = localStorage.getItem("password");
var countDownDate = [];

var i;
for (i = 1; i < 101; i++) {
    countDownDate[i] = 0;
}



window.addEventListener('DOMContentLoaded', function () {

    //  var username = localStorage.getItem("username");
    //  var password = localStorage.getItem("password");


});



// Create a client instance: Broker, Port, Websocket Path, Client ID
client = new Paho.MQTT.Client("rick50.scorchedsilicon.com", Number(9099), "clientId" + Math.random());
// set callback handlers
client.onConnectionLost = function (responseObject) {
    console.log("Connection Lost: " + responseObject.errorMessage);
    client.connect({
        onSuccess: onConnect,
        userName: username,
        password: password,
        mqttVersion: 3
    });
}


// Called when the connection is made
function onConnect() {
    console.log("Connected");

    var i;
    for (i = 1; i < 101; i++) {
        client.subscribe(username + "/" + i);
    }


}


// Connect the client, providing an onConnect callback
client.connect({
    onSuccess: onConnect,
    userName: username,
    password: password,
    mqttVersion: 3
});




client.onMessageArrived = function (message) {
//    console.log("Message" + message.payloadString);
    var topic = message.destinationName;
    topic = topic.slice((username.length + 1), topic.length);
//    console.log("Topic: " + topic);
    countDownDate[topic] = message.payloadString;
}



// Update the count down every 1 second


var x = setInterval(updateclocks, 1000);

function updateclocks() {
    var u;
    var now = new Date().getTime();
    for (u = 1; u < 101; u++) {
        
        // Find the distance between now and the count down date
        var distance = Number(countDownDate[u]) - now;
        
        // Time calculations for days, hours, minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        
        document.getElementsByTagName("span")[u - 1].innerHTML = minutes + "m " + seconds + "s";
        document.getElementsByTagName("span")[u - 1].style.setProperty('background-color', 'inherit');

        // If the count down is over, write some text 
        if (distance < 0) {
            
            document.getElementsByTagName("span")[u - 1].innerHTML = "Finished";
            document.getElementsByTagName("span")[u - 1].style.setProperty('background-color', 'lightgreen');
        }
    }




}
