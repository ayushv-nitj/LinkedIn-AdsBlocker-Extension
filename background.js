chrome.webNavigation.onCommiteed.addListener(function(tab){
  
    if(tab.frameId ==0){
        chrome.tabs.query({ active : true, lastFocusedWindow : true}, tabs => {
       

            let url = tabs[0].url;
            let parsdUrl = url.replace("https://","").replace("http://", "").replace("www.", "")

            let domain = parsedUrl.slice(0, parsedUrl.indexOf('/') == -1 ? parsedUrl.length : parsedUrl.indexOf('/')).slice(0, parsedUrl.indexOf('?') == -1 ? parsedUrl.length : parsedUrl.indexOf('?'));

            try {
                if (domain.length < 1 || domain === null || domain === undefined) {
                    return;
                } else if ( domain == "linkedin.com"){
                    runLinkedinScript();
                    return;
                }
            } catch (err){
                throw err;
            }

        });

    }
});

function runLinkedinScript() {
    chrome.tabs.executeScript({
        file: 'linkedin.js'
    });
    return true;
}