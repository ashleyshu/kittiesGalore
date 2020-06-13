console.log("content script");


// Occurs when the extension icon is clicked
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);       // message.txt = "hello"
};

