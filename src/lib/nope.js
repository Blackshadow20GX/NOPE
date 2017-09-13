
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
const observer = new MutationObserver(function(mutations, observer) {
    console.log(mutations, observer);

    const element = document.querySelectorAll('div.ego_section');
    console.log('Found ' + element.length + ' Ego ads!')
    for (let i = 0; i < element.length; i++){
        element[i].parentElement.removeChild(element[i]);
        console.log("NOPE'd Ego Ad#" + (i + 1))
    }
});

observer.observe(document, {
  subtree: true,
  attributes: true
});
