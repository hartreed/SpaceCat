var textArray = new Array();

var timer;
var charDelay = 34;
var rootDate = "201410"
var lastResponse; //holds serial char from arduino
var unprocessed = false;
var blockComplete = false;
var complete = false;
var cat = false;
var posts = 0;

function init(){
    //console.log("Hello Space World");
    
    //setInterval(sendHTTP,1500); //These functions have been disabled for this demo, the space bar is used to proceed instead
    //setInterval(checkInput,100);
    
    timer = setInterval(writeChar,charDelay); //Write a char to the screen at the appropriate rate, if text is available
    intro(); //Display starting text;
}

function intro() {
    tapOut("Captain's Log -- Stardate 201410");
    tapOut(" ");
    tapOut("These are the (mostly elliptical) voyages of the space station Alfalfa IX");
    tapOut(" ");
    tapOut("> Press space button to continue...");
    tapOut(" ");
}

function post1() {
    console.log("[Section 1]");
    tapOut(" ");
    tapOut("...");
    tapOut("...");
    tapOut("...");
    tapOut("...");
    tapOut("...");
    tapOut(" ");
    tapOut("Once upon a time, there was a happy space station desperately in need of some feline assistance.");
    tapOut("However, what started out as an amusing companion soon would become...");
    tapOut("...");
    tapOut("......");
    tapOut(".........");
    tapOut("............");
    tapOut("A FEARSOME MENACE");
    tapOut("............");
    tapOut(".........");
    tapOut("......");
    tapOut("THESE");
    tapOut("......");
    tapOut("...");
    tapOut("ARE");
    tapOut("...");
    tapOut("......");
    tapOut("THE SPACE CAT CHRONICLES");
    tapOut("...");
    tapOut("...");
    tapOut("...");
    tapOut("...");
    tapOut("...");
    tapOut("...");
    tapOut("...");
    tapOut("...");
    tapOut("...");
    tapOut("...");
    tapOut("...");
    tapOut("...");
    tapOut("...");
    transmission("4.95","Someone brought a couple of Minuvan space rats on board the station in the last shipment of grain. \
           Unfortunately a couple Minuvan space rats pretty well means an infinite number of Minuvan space rats \
           - the bastards breed faster than Tribbles. They've begun taking over every free space in the station. \
           Luckily Engineer Donohue had an excellent idea, and ordered a robotic cat drone to eliminate the vermin. \
           It should arrive any day now.");
}
function post2() {
    console.log("[Section 2]");
    transmission("6.6","The cat drone arrived in today's shipment. It seems quite complicated, could take a while to assemble. \
                It will be very nice to be able to sleep without fear of furry alien feet scampering across my face. \
                Work on the station AI upgrade progresses steadily. \
                After completion, many of the most mundane and tedious tasks of the station should be entirely automated.");
}
function post3() {
    console.log("[Section 3]");
    transmission("7.2","The cat drone has been assembled! It immediately scuttled away to begin dispensing with these awful vermin. \
                 Our days of living under the shadow of the furry menace are nearly over. \
                 Engineer Phillips is absent today, probably just fell asleep in the cargo bay again.");
}
function post4() {
    console.log("[Section 4]");
    transmission("7.9","We've had some strange disappearences of the crew lately...Might be that those Minuvan space rats were more dangerous \
                 than we thought. Good thing we have a robotic cat exterminator drone on our side!.");
}
function post5() {
    console.log("[Section 5]");
    transmission("8.9","To all incoming vessels. Turn back immediately. All hope is lost. The space cat was not what we thought, it has hunted \
                 us mercilessly. Engineer Donohue and I are the only ones who remain. Avoid all yarn-like objects and flights of stairs. \
                 I can hear it scratching at the door, soon we will...[TRANSMISSION TERMINATED]");
}
function post6() {
    corruptedTransmission();
}

function checkInput() {
    console.log("Space should work now?: "+blockComplete);
    if (unprocessed&&blockComplete&&!complete) {
        posts++;
        blockComplete = false;
        unprocessed = false;
        console.log("Going to post: "+posts);
        switch(posts) {
            case 1:
                post1();
                break;
            case 2:
                post2();
                break;
            case 3:
                post3();
                break;
            case 4:
                post4();
                break;
            case 5:
                post5();
                break;
            case 6:
                post6();
                break;
            case 7:
                complete = true;
                break;
            default:
                break;
        }
    }
}
function transmission(date,text) {
    tapOut(" ");
    tapOut("[BEGIN TRANSMISSION]");
    tapOut("[STARDATE-"+rootDate+date+"]");
    tapOut(" ");
    tapOut(text);
    tapOut(" ");
    tapOut("[END TRANSMISSION]");
    tapOut(" ");
    tapOut("...");
    tapOut(" ");
    tapOut("> Press space button to continue...");
    tapOut(" ");
}

function corruptedTransmission() {
    tapOut(" ");
    tapOut("[BEGIN TRANSMISSION]");
    tapOut("[STARDATE-NaN]");
    tapOut("");
    tapOut("[TRANSMISSION LOG CORRUPTED]");
    tapOut("W34arnI5N4G90SPac77e6c78at");
    tapOut("In909COMin80980GG");
    tapOut("[TRANSMISSION LOG CORRUPTED]");
    tapOut("");
    tapOut("[END TRANSMISSION]");
    tapOut("");
    tapOut("...");
    tapOut(" ");
    tapOut("> Press space button to continue...");
}

function sendHTTP() {
    var xmlhttp = setupHttpRequest(); //Setup a request to ask the arduino for data
    xmlhttp.open("GET","serial.php"); //GET request with our php file
    xmlhttp.send(); //Send request
}

function toLog(text) {
    $("#console").append(text); //Add some the to the log
    //console.log($("#console")[0].scrollHeight);
    $("#console").scrollTop($("#console")[0].scrollHeight); //Scroll log to bottom
}

function tapOut(text) {
    //console.log(textArray.length);
    if (textArray.length>0) {
        textArray.push("<br>");
        var newText = text.split("");
        for (var c in newText)
        {
            //console.log(c);
            textArray.push(newText[c]);
        }
    }else{
        textArray = text.split("");
        //timer = setInterval(writeChar,charDelay);
    }
}

function writeChar() {
    if (textArray.length>0) {
        toLog(textArray.shift());
        if (textArray.length==0) {
            blockComplete = true;
            console.log("Text complete :"+blockComplete);
        }
    }else if (complete&&!cat) {
                console.log("WARNING: SPACE CAT INCOMING!!!!");
                tapOut(" ");
                tapOut(" ");
                tapOut("MROOOOOOOWRRRRR.....");
                tapOut("...");
                tapOut("...");
                tapOut("...");
                tapOut("MROOOOOOOWRRRRR.....");
                tapOut("...");
                tapOut("...");
                tapOut("...");
                tapOut("MROOOOOOOWRRRRR.....");
                tapOut("...");
                tapOut("...");
                tapOut("...");
                animFromTo("#spaceCat",{opacity:1,scaleX:0.4,scaleY:0.4,rotation:-60},{opacity:0.6,scaleX:1,scaleY:1,rotation:0},0.2);
                cat = true;
    }
}

function setupHttpRequest()
{
    //Prepare HTTP request
    if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    } else {
    // code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    //When response is ready, process and output data
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            //if (xmlhttp.responseText=="H") {
                //alert("pressed");
            //}
            lastResponse = xmlhttp.responseText;
            //console.log("Response: "+lastResponse);
            if(blockComplete){processResponse(xmlhttp.responseText.trim())}
        }
    }
    return xmlhttp;
}

//Check the response from the arduino serial port
function processResponse(response) {
    if (!complete) {
        //alert("Response:"+response);
    }
    if (response=="H") {
        console.log("pressed");
        unprocessed=true; //Start the next section of the narrative
    }else {
        console.log("no press");
    }
}

//Animation Utility Functions - Create and play Greensock animations on sets of css properties
function fadeOut(target,time)
{if(!time){time=1}
    new TweenLite.to(target,time,{autoAlpha:0}).play();
}
function fadeIn(target,time)
{if(!time){time=1}
    new TweenLite.to(target,time,{autoAlpha:1}).play();
}
function animTo(target,tween,time)
{if(!tween){tween={}}if(!time){time=1}
    new TweenLite.to(target,time,tween).play();
}
function animFrom(target,tween,time)
{if(!tween){tween={}}if(!time){time=1}
    new TweenLite.from(target,time,tween).play();
}
function animFromTo(target,from,to,time)
{if(!from){from={}}{if(!to){to={}}if(!time){time=1}}
    new TweenLite.fromTo(target,time,from,to).play();
}

