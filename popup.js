// Print all tabs domain names onto popup
function getAllTabs() {
    return browser.tabs.query({currentWindow: true});
}

// var currTab = chrome.tabs.getCurrent();
// document.getElementById("myText").innerHTML = currTab
document.body.innerHTML = "haha";
