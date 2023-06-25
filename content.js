chrome.runtime.sendMessage({ action: "openModal" });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "openModal") {
    createModal();
  }
});

function createModal() {
  const modal = document.createElement("div");
  modal.id = "lululemonModal";
  modal.setAttribute(
    "style",`
    height:450px;
    width:450px;
    margin-left:450px;
    border: none;
    top:150px;
    border-radius:20px;
    background-color:white;
    position: fixed; box-shadow: 0px 12px 48px rgba(29, 5, 64, 0.32);
    `
    );
  
  // Load the content of the modal from https://lulu-shop.vercel.app/
  modal.innerHTML = `<iframe src="https://lulu-shop.vercel.app/" id="popup-content"; style="height:100%"></iframe>
  <div style="position:absolute; top:0px; left:5px;">
  <button style="padding: 8px 12px; font-size: 16px; border: none; border-radius: 20px;">x</button>
  </div>`;
  document.body.appendChild(modal);
}