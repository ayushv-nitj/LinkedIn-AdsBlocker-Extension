function removeAds(){

    let spans = getElementByTagName("span");

    for(let i=0; i<spans.length; i++){
      
        if(spans[i].innerHTML ==="Promoted") {                         // looking for "Promoted" text in span elements
            let card = spans[i].closest('.ember-view');         // getting the closest parent element with class "ember-view"

            if (card === null) {
                let j =0;
                card = spans[i];
                while(j <6){
                    card = card.parentNode;
                    ++j;
                }
            }
            card.setAttribute("style", "display: none !important;");    // hiding the parent element of the "Promoted" text
        }
        }
    }
removeAds();

setInterval(function(){
    removeAds();
}, 100)
