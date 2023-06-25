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
    height: 500px;
    width: 500px;
    margin: 150px auto 0;
    border: none;
    border-radius: 20px;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px 12px 48px rgba(29, 5, 64, 0.32);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    `
  );

  // Load the content of the modal from https://lulu-shop.vercel.app/
  modal.innerHTML = `
  <header style="width:490px; border-radius: 20px" class="chat-header_modalHeader__mg_f2">
  <div style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start;">
  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" aria-hidden="true">
  <g fill="none" fill-rule="evenodd"><path d="M24 12c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12C0 5.372 5.372 0 12 0c6.627 0 12 5.372 12 12" fill="#c8102e"></path><path d="M18.578 17.963a2.59 2.59 0 0 1-2.026-.99c-.551-.703-.67-1.662-.434-2.514.258-.932.818-1.689 1.268-2.555 1.46-2.507 1.401-4.381 1.401-4.381-.005-.162-.007-.322-.02-.483a4.697 4.697 0 0 0-.062-.452 3.716 3.716 0 0 0-.414-1.156 3.334 3.334 0 0 0-.731-.883 3.944 3.944 0 0 0-.644-.453 5.08 5.08 0 0 0-.757-.353 6.79 6.79 0 0 0-.857-.262 11.33 11.33 0 0 0-1.45-.244 16.062 16.062 0 0 0-1.061-.075 21.864 21.864 0 0 0-1.212-.012 20.215 20.215 0 0 0-1.087.051 14.929 14.929 0 0 0-1.018.117 8.987 8.987 0 0 0-1.373.318 6.329 6.329 0 0 0-.797.32 4.2 4.2 0 0 0-.987.662 3.467 3.467 0 0 0-.504.577 3.473 3.473 0 0 0-.495 1.09 4.785 4.785 0 0 0-.15 1.238s-.06 1.874 1.4 4.381c.45.866 1.01 1.622 1.269 2.555.235.852.117 1.811-.434 2.514a2.59 2.59 0 0 1-2.026.99c-.67 0-1.278-.26-1.737-.682a3.938 3.938 0 0 0 3.655 2.494c2.176 0 3.94-1.777 3.94-3.97 0-.781-.283-1.472-.55-2.191-.188-.509-.377-1.017-.563-1.527-.442-1.201-.865-2.434-1.06-3.704-.156-1.008-.138-2.235.624-3.008.583-.59 1.484-.722 2.291-.727.807.005 1.71.136 2.292.727.761.773.779 2 .624 3.008-.195 1.27-.619 2.503-1.06 3.704-.187.51-.375 1.018-.564 1.527-.267.719-.549 1.41-.549 2.191 0 2.192 1.764 3.97 3.94 3.97a3.94 3.94 0 0 0 3.655-2.494 2.556 2.556 0 0 1-1.737.682" fill="#fff"></path></g></svg><div class=""><h3 class="heading-ekFBj" id="" style="margin-left: 12px; font-weight: 450;">Let's Chat</h3></div></div><div><button type="button" aria-label="Minimize web support" data-testid="minimize-button" class="chat-header_button__HDX6p"></button><button type="button" aria-label="Close support experience and confirm end of chat" data-testid="close-button" class="chat-header_button__HDX6p"><svg height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" aria-hidden="true"><path d="m13.82 1.82-.35-.35L8 6.94 3.24 2.18a1 1 0 0 0-1.42 0l-.35.35L6.94 8l-4.76 4.76a1 1 0 0 0 0 1.42l.35.35L8 9.06l4.76 4.76a1 1 0 0 0 1.42 0l.35-.35L9.06 8l4.76-4.76a1 1 0 0 0 0-1.42Z" fill="currentColor" fill-rule="evenodd"></path></svg></button></div></header>
  <iframe src="https://lulu-shop.vercel.app/" id="popup-content" style="flex: 1; width: 100%; border: none;"></iframe>
  `;

  document.body.appendChild(modal);
}
