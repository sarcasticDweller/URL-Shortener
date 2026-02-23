const urlSnippet = "https://www.amazon.com";

chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    })
});


chrome.action.onClickced.addListener(async (tab) => {
    if (tab.url.startsWith(urlSnippet)) {
        alert("amazon detected!");
    }
})