//Deletes the ads below 'Trending' container
var element = document.querySelectorAll('div.ego_section');
console.log('Found ' + element.length + ' Ego ads!')
for (var i = 0; i < element.length; i++){
    element[i].parentElement.removeChild(element[i]);
    console.log("NOPE'd Ego Ad#" + (i + 1))
}

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    console.log(mutations, observer);
    //Deletes the sponsored post containers maybe
    element = document.querySelectorAll('div.[is_sponsored][is_sponsored=1]');
    console.log('Found ' + element.length + ' Sponsored ads!')
    for (var i in element){
        element[i].parentElement.removeChild(element[i]);
        console.log("NOPE'd Sponsored Ad#" + (i + 1));
    }
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
});
