// Abordagem Simples
$(window).on('load', function() {
  // Função para desabilitar as checkboxes dentro do iframe
  function disableCheckboxesInNestedFrames() {
      var outerIframe = $('iframe[name="nmFrmScase"]');
      var innerIframe = outerIframe.contents().find('iframe[name="nmFrmBotSys"]');
      var innerIframeContents = innerIframe.contents();

      if (innerIframeContents.find('#pub_with_prod').length) {
          // Enviar uma mensagem para o plano de fundo
          //chrome.runtime.sendMessage({message: "updatePopup", data: "Desmarcados"});
          innerIframeContents.find('#pub_with_prod').prop('checked', false);
      }

      if (innerIframeContents.find('input[type=checkbox][name=pub_with_lib]').length) {
          // Enviar uma mensagem para o plano de fundo
          //chrome.runtime.sendMessage({message: "updatePopup", data: "Desmarcados"});
          innerIframeContents.find('input[type=checkbox][name=pub_with_lib]').prop('checked', false);
      }

      // Agendar a próxima execução após um certo período de tempo
      setTimeout(disableCheckboxesInNestedFrames, 1000);
  }

  // Executa a função pela primeira vez
  disableCheckboxesInNestedFrames();
});
// Abordagem complexa porem inimaginavel para a quantidade de mutações que o scriptcase tem
// $(window).on('load', function() {
//     // Função para desabilitar as checkboxes dentro do iframe
//     function disableCheckboxesInNestedFrames() {
//         var outerIframe = $('iframe[name="nmFrmScase"]');
//         var innerIframe = outerIframe.contents().find('iframe[name="nmFrmBotSys"]');
//         var innerIframeContents = innerIframe.contents();

//         if (innerIframeContents.find('#pub_with_prod').length) {
//             innerIframeContents.find('#pub_with_prod').prop('checked', false);
//         }

//         if (innerIframeContents.find('input[type=checkbox][name=pub_with_lib]').length) {
//             innerIframeContents.find('input[type=checkbox][name=pub_with_lib]').prop('checked', false);
//         }
//     }

//     // Observador de mutação para detectar mudanças no conteúdo do iframe
//     var observer = new MutationObserver(function(mutations) {
//         mutations.forEach(function(mutation) {
//             // Verifica se as checkboxes foram adicionadas ou removidas do DOM
//             disableCheckboxesInNestedFrames();
//             console.log('Checking');
//         });
//     });

//     // Configurações para o observador de mutação
//     var config = { childList: true, subtree: true };

//     // Obtém o elemento do iframe externo
//     var outerIframe = document.querySelector('iframe[name="nmFrmScase"]');

//     // Verifica se o iframe externo existe
//     if (outerIframe) {
//         // Obtém o documento dentro do iframe externo
//         var outerIframeDoc = outerIframe.contentDocument || outerIframe.contentWindow.document;

//         // Obtém o elemento do iframe interno
//         var innerIframe = outerIframeDoc.querySelector('iframe[name="nmFrmBotSys"]');

//         // Verifica se o iframe interno existe
//         if (innerIframe) {
//             // Obtém o documento dentro do iframe interno
//             var innerIframeDoc = innerIframe.contentDocument || innerIframe.contentWindow.document;

//             // Inicia o observador de mutação dentro do iframe interno
//             observer.observe(innerIframeDoc.documentElement, config);
//         }
//     }
// });
