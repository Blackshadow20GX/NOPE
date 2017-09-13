const EGO_UNIT_QUERY = 'div.ego_section';
const EGO_UNIT_TYPE = 'Ego'

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {

    console.log(mutations, observer);
    //Deletes the sponsored post containers maybe
    //element = document.querySelectorAll('a');
    //var contents = element.innerText();
    //console.log('Found ' + element.length + ' Sponsored ads!')
    //for (var i = 0; i < element.length; i++){
      //  element[i].parentElement.removeChild(element[i]);
      //  console.log("NOPE'd Sponsored Ad#" + (i + 1));
    //}

    mutations.forEach(function(mutation){
        console.log("Mutation target: " + mutation.target);
        if(mutation.target.className.indexOf('ego_unit') !== -1){
            console.log("Ego Unit mutation target found!");
            console.log("Initiating DOM scan...");
            domScan(EGO_UNIT_QUERY, EGO_UNIT_TYPE);
        };
    });
});

//Scans the DOM for a particular element and deletes all of its children
//@query The target text of the particular element desired
//@ad_type The type of ad, used in console logging for clarity
function domScan(query, ad_type){
    const element = document.querySelectorAll(query);
    console.log("Found " + element.length + " " + ad_type + " ads!")
    for (let i = 0; i < element.length; i++){
        element[i].parentElement.removeChild(element[i]);
        console.log("NOPE'd " + ad_type + " Ad#" + (i + 1))
    };
} 

//Main processing begins here
domScan(EGO_UNIT_QUERY, EGO_UNIT_TYPE);

//Attach the observer to the document, listen for AJAX calls
observer.observe(document, {
  subtree: true,
  attributes: true
});
