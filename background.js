function enableReaderMode(tab) {
  console.log('enabling reader mode for tab', tab);
  chrome.tabs.executeScript({
    code: "document.body.style.width='900px'; document.body.style.margin='10px auto';"
  });
};


chrome.browserAction.onClicked.addListener(enableReaderMode);
