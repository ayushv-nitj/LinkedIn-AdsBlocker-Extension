document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["adsBlocked"], (result) => {
    const count = result.adsBlocked || 0;
    document.getElementById("count").innerText = count;
  });
});
