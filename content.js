chrome.runtime.sendMessage({ action: "openModal" });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "openModal") {
    createModal();
  }
});

function createModal() {
  const modal = document.createElement("div");
  modal.id = "lululemonModal";
  
  // Load the content of the modal from https://lulu-shop.vercel.app/
  modal.innerHTML = `<iframe src="https://lulu-shop.vercel.app/"></iframe>`;

  document.body.appendChild(modal);
}
