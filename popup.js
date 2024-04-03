// Ouvir mensagens enviadas pelo conteúdo
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.message === "updatePopup") {
      // Atualizar o conteúdo do popup com os dados recebidos
      document.getElementById("content").innerText = message.data;
  }
});
