
// This eventlisteer is triggered whenever the user navigates to a new page or refreshes
chrome.webNavigation.onCommitted.addListener((details) => {
  // Only run on the main frame & not iframes
  if (details.frameId === 0) {
    // Checking if the user is on a LinkedIn page
    if (details.url.includes("linkedin.com")) {
     
      chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        files: ['linkedin.js']
      }, () => {
        if (chrome.runtime.lastError) {
          console.error("Script injection failed: ", chrome.runtime.lastError.message);
        } else {
          console.log("LinkedIn AdBlocker script injected successfully.");
        }
      });
    }
  }
});
