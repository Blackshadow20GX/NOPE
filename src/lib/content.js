//Get all browser elements to delete

chrome.webNavigation.onCommitted.addListener(function(tab) {
    console.log('Injecting NOPE Script...');
    chrome.tabs.executeScript(tab.id, {file: "src/lib/nope.js"});
    console.log('Injection complete!');
});
