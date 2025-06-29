let adsBlocked = 0;

function removeAds() {
  const spans = document.querySelectorAll("span");

  spans.forEach(span => {
    //  check if the span text is exactly "Promoted"
    if (span.innerText.trim() === "Promoted") {
      // Traverse upward until we find a post container
      let adElement = span.closest("div[data-urn]");

      if (adElement && adElement.style.display !== "none") {
        // Doublecheckin there's nothing meaningful the user would miss
        adElement.style.display = "none";

          console.log("Blocked an ad:", adElement);
        adsBlocked++;

        // Store the updated ad count
        chrome.storage.local.set({ adsBlocked });
      }
    }
  });
}

// Initial run
removeAds();

// Continue to clean as user scrolls
setInterval(removeAds, 1000);
