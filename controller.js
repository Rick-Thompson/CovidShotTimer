var username = localStorage.getItem("username");
var password = localStorage.getItem("password");

var countDownDate = [];
var i;
for (i = 1; i < 101; i++) {
    countDownDate[i] = 0;
}

window.addEventListener('DOMContentLoaded', function () {
    document.getElementById("r1").addEventListener("click", function () { clicked(1); });
    document.getElementById("r2").addEventListener("click", function () { clicked(2); });
    document.getElementById("r3").addEventListener("click", function () { clicked(3); });
    document.getElementById("r4").addEventListener("click", function () { clicked(4); });
    document.getElementById("r5").addEventListener("click", function () { clicked(5); });
    document.getElementById("r6").addEventListener("click", function () { clicked(6); });
    document.getElementById("r7").addEventListener("click", function () { clicked(7); });
    document.getElementById("r8").addEventListener("click", function () { clicked(8); });
    document.getElementById("r9").addEventListener("click", function () { clicked(9); });
    document.getElementById("r10").addEventListener("click", function () { clicked(10); });
    document.getElementById("r11").addEventListener("click", function () { clicked(11); });
    document.getElementById("r12").addEventListener("click", function () { clicked(12); });
    document.getElementById("r13").addEventListener("click", function () { clicked(13); });
    document.getElementById("r14").addEventListener("click", function () { clicked(14); });
    document.getElementById("r15").addEventListener("click", function () { clicked(15); });
    document.getElementById("r16").addEventListener("click", function () { clicked(16); });
    document.getElementById("r17").addEventListener("click", function () { clicked(17); });
    document.getElementById("r18").addEventListener("click", function () { clicked(18); });
    document.getElementById("r19").addEventListener("click", function () { clicked(19); });
    document.getElementById("r20").addEventListener("click", function () { clicked(20); });
    document.getElementById("r21").addEventListener("click", function () { clicked(21); });
    document.getElementById("r22").addEventListener("click", function () { clicked(22); });
    document.getElementById("r23").addEventListener("click", function () { clicked(23); });
    document.getElementById("r24").addEventListener("click", function () { clicked(24); });
    document.getElementById("r25").addEventListener("click", function () { clicked(25); });
    document.getElementById("r26").addEventListener("click", function () { clicked(26); });
    document.getElementById("r27").addEventListener("click", function () { clicked(27); });
    document.getElementById("r28").addEventListener("click", function () { clicked(28); });
    document.getElementById("r29").addEventListener("click", function () { clicked(29); });
    document.getElementById("r30").addEventListener("click", function () { clicked(30); });
    document.getElementById("r31").addEventListener("click", function () { clicked(31); });
    document.getElementById("r32").addEventListener("click", function () { clicked(32); });
    document.getElementById("r33").addEventListener("click", function () { clicked(33); });
    document.getElementById("r34").addEventListener("click", function () { clicked(34); });
    document.getElementById("r35").addEventListener("click", function () { clicked(35); });
    document.getElementById("r36").addEventListener("click", function () { clicked(36); });
    document.getElementById("r37").addEventListener("click", function () { clicked(37); });
    document.getElementById("r38").addEventListener("click", function () { clicked(38); });
    document.getElementById("r39").addEventListener("click", function () { clicked(39); });
    document.getElementById("r40").addEventListener("click", function () { clicked(40); });
    document.getElementById("r41").addEventListener("click", function () { clicked(41); });
    document.getElementById("r42").addEventListener("click", function () { clicked(42); });
    document.getElementById("r43").addEventListener("click", function () { clicked(43); });
    document.getElementById("r44").addEventListener("click", function () { clicked(44); });
    document.getElementById("r45").addEventListener("click", function () { clicked(45); });
    document.getElementById("r46").addEventListener("click", function () { clicked(46); });
    document.getElementById("r47").addEventListener("click", function () { clicked(47); });
    document.getElementById("r48").addEventListener("click", function () { clicked(48); });
    document.getElementById("r49").addEventListener("click", function () { clicked(49); });
    document.getElementById("r50").addEventListener("click", function () { clicked(50); });
    document.getElementById("r51").addEventListener("click", function () { clicked(51); });
    document.getElementById("r52").addEventListener("click", function () { clicked(52); });
    document.getElementById("r53").addEventListener("click", function () { clicked(53); });
    document.getElementById("r54").addEventListener("click", function () { clicked(54); });
    document.getElementById("r55").addEventListener("click", function () { clicked(55); });
    document.getElementById("r56").addEventListener("click", function () { clicked(56); });
    document.getElementById("r57").addEventListener("click", function () { clicked(57); });
    document.getElementById("r58").addEventListener("click", function () { clicked(58); });
    document.getElementById("r59").addEventListener("click", function () { clicked(59); });
    document.getElementById("r60").addEventListener("click", function () { clicked(60); });
    document.getElementById("r61").addEventListener("click", function () { clicked(61); });
    document.getElementById("r62").addEventListener("click", function () { clicked(62); });
    document.getElementById("r63").addEventListener("click", function () { clicked(63); });
    document.getElementById("r64").addEventListener("click", function () { clicked(64); });
    document.getElementById("r65").addEventListener("click", function () { clicked(65); });
    document.getElementById("r66").addEventListener("click", function () { clicked(66); });
    document.getElementById("r67").addEventListener("click", function () { clicked(67); });
    document.getElementById("r68").addEventListener("click", function () { clicked(68); });
    document.getElementById("r69").addEventListener("click", function () { clicked(69); });
    document.getElementById("r70").addEventListener("click", function () { clicked(70); });
    document.getElementById("r71").addEventListener("click", function () { clicked(71); });
    document.getElementById("r72").addEventListener("click", function () { clicked(72); });
    document.getElementById("r73").addEventListener("click", function () { clicked(73); });
    document.getElementById("r74").addEventListener("click", function () { clicked(74); });
    document.getElementById("r75").addEventListener("click", function () { clicked(75); });
    document.getElementById("r76").addEventListener("click", function () { clicked(76); });
    document.getElementById("r77").addEventListener("click", function () { clicked(77); });
    document.getElementById("r78").addEventListener("click", function () { clicked(78); });
    document.getElementById("r79").addEventListener("click", function () { clicked(79); });
    document.getElementById("r80").addEventListener("click", function () { clicked(80); });
    document.getElementById("r81").addEventListener("click", function () { clicked(81); });
    document.getElementById("r82").addEventListener("click", function () { clicked(82); });
    document.getElementById("r83").addEventListener("click", function () { clicked(83); });
    document.getElementById("r84").addEventListener("click", function () { clicked(84); });
    document.getElementById("r85").addEventListener("click", function () { clicked(85); });
    document.getElementById("r86").addEventListener("click", function () { clicked(86); });
    document.getElementById("r87").addEventListener("click", function () { clicked(87); });
    document.getElementById("r88").addEventListener("click", function () { clicked(88); });
    document.getElementById("r89").addEventListener("click", function () { clicked(89); });
    document.getElementById("r90").addEventListener("click", function () { clicked(90); });
    document.getElementById("r91").addEventListener("click", function () { clicked(91); });
    document.getElementById("r92").addEventListener("click", function () { clicked(92); });
    document.getElementById("r93").addEventListener("click", function () { clicked(93); });
    document.getElementById("r94").addEventListener("click", function () { clicked(94); });
    document.getElementById("r95").addEventListener("click", function () { clicked(95); });
    document.getElementById("r96").addEventListener("click", function () { clicked(96); });
    document.getElementById("r97").addEventListener("click", function () { clicked(97); });
    document.getElementById("r98").addEventListener("click", function () { clicked(98); });
    document.getElementById("r99").addEventListener("click", function () { clicked(99); });
    document.getElementById("r100").addEventListener("click", function () { clicked(100); });



});

// Create a client instance: Broker, Port, Websocket Path, Client ID
client = new Paho.MQTT.Client("rick50.scorchedsilicon.com", Number(9099), "clientId" + Math.random());
// set callback handlers
client.onConnectionLost = function (responseObject) {
    console.log("Connection Lost: " + responseObject.errorMessage);
    client.connect({
        onSuccess: onConnect,
        useSSL: true,
        userName: username,
        password: password,
        mqttVersion: 3
    });
}

client.onMessageArrived = function (message) {
//    console.log("Message Arrived: " + message.payloadString);
    var topic = message.destinationName;
    topic = topic.slice((username.length + 1), topic.length);
    //    console.log("Topic: " + topic);
    countDownDate[topic] = message.payloadString;
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
    useSSL: true,
    userName: username,
    password: password,
    mqttVersion: 3
});






function clicked(num) {
    num = num - 1;

   
    var d = Date.parse(new Date());
    var waittime = document.getElementsByTagName("input");
    d = waittime[num].value * 60000 + d;
    var msg = new Paho.MQTT.Message(d.toString());
    msg.destinationName = username + "/" + (num + 1);
    msg.retained = true;
    msg.qos = 2;

    client.send(msg);
}


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
        };
       
        };
    }
