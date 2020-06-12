// chrome.runtime.onInstalled.addListener(function() {
//     chrome.contextMenus.create({
//         "id": "sampleContextMenu",
//         "title": "Sample Context Menu",
//         "contexts": ["selection"]
//     });
// });

chrome.webNavigation.onBeforeNavigate.addListener(function (callback) {
    chrome.onBeforeNavigate
}
)


chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({url: 'popup.html'})
})



