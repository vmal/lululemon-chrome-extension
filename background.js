"use strict";

// On Chrome Install
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "openModal") {
      chrome.tabs.sendMessage(sender.tab.id, { action: "openModal" });
    }
  });
  