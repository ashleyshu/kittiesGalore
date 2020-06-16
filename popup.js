console.log("popup script");

chrome.runtime.sendMessage({clicked : true});

// Print all tabs domain names onto popup
function getAllTabs() {

}

// var currTab = chrome.tabs.getCurrent();
// document.getElementById("myText").innerHTML = currTab
document.body.innerHTML = "haha";

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    console.log("that was the message sent from background.js");
    document.body.innerHTML = message.txt;
    document.body.innerHTML = "hm";
};

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "tab tab tab") {
            console.log(request.data.subject);
            console.log(request.data.content);

            document.body.innerHTML = request.data.subject;
            document.body.innerHTML = request.data.content;
        }
    }
);






