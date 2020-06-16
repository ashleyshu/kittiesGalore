// chrome.runtime.onInstalled.addListener(function() {
//     chrome.contextMenus.create({
//         "id": "sampleContextMenu",
//         "title": "Sample Context Menu",
//         "contexts": ["selection"]
//     });
// });

// chrome.webNavigation.onBeforeNavigate.addListener(function (callback) {
//     chrome.onBeforeNavigate
// })

console.log("background.js");

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        if (message.clicked) {
            console.log("extension clicked in tab: " + tab.id);
            console.log("tab title: " + tab.title);
            
            let msg = {
                txt: "bleh"
            }
            
            chrome.tabs.sendMessage(tab.id, msg);
            console.log("msg sent: " + msg.txt);
        }
    }
)

// chrome.browserAction.onClicked.addListener(openExt);

// function openExt(tab) {
//     chrome.browserAction.setPopup({
//         popup: "popup.html"
//     });
//     console.log("extension clicked in tab: " + tab.id);
//     console.log("tab title: " + tab.title);
//     let msg = {
//         txt: "bleh"
//     }
//     chrome.tabs.sendMessage(tab.id, msg);
//     console.log("msg sent: " + msg.txt);
// }

// chrome.runtime.sendMessage({
//     msg: "tab tab tab",
//     data: {
//         subect: "LLLLL",
//         content: "CCCCC"
//     }
// });



