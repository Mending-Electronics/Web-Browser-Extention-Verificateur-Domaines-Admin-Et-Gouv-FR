// popup.js
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired");
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const activeTab = tabs[0];
      console.log("Active tab URL:", activeTab.url);
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        func: (url) => {
          console.log("Executing script in active tab with URL:", url);
          const authUrls = [
"https://www.antai.gouv.fr/",
"https://www.service-public.fr/",
"https://www.amendes.gouv.fr/",
"https://www.stationnement.gouv.fr/",
"https://www.ameli.fr/",
"https://www.caf.fr/",
"https://www.lassuranceretraite.fr/",
"https://cyber.gouv.fr/",
"https://www.education.gouv.fr/",
"https://www.pole-emploi.fr/",
"https://www.impots.gouv.fr/",
"https://www.anah.fr/",
"https://app.dvf.etalab.gouv.fr/",
"https://www.legifrance.gouv.fr/",
"https://www.federationpeche.fr/",
"https://www.cartedepeche.fr/",
"https://www.interieur.gouv.fr/",
"https://solidarites-sante.gouv.fr/",
"https://www.laposte.fr/",
"https://secure.digiposte.fr/identification-plus",
"https://www.france-services.gouv.fr/",
"https://transparence.sante.gouv.fr/",
"https://www.masecurite.interieur.gouv.fr/",
"https://fildariane.diplomatie.gouv.fr/",
"https://www.mesdroitssociaux.gouv.fr/",
"https://www.cesu.urssaf.fr/",
"https://www.urssaf.fr/",
"https://www.demarches-simplifiees.fr/"
         ];
        
          const isAuthUrl = authUrls.some(authUrl => url.startsWith(authUrl));
          if (isAuthUrl && document.querySelector("body")) {
            console.log("element found");
            chrome.runtime.sendMessage({ found: true });
          } else {
            console.log("element not found");
            chrome.runtime.sendMessage({ found: false });
          }
        },
        args: [activeTab.url]
      });
    });
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const alertDiv = document.getElementById("alert");
  
    if (message.found) {
      alertDiv.classList.remove("alert-primary");
      alertDiv.classList.add("alert-success");
      alertDiv.innerHTML = "<i class='bi bi-check-circle me-2'></i><strong>Ce site est sûr !</strong><br> Le nom de domaine est authentique.";
    } else {
      alertDiv.classList.remove("alert-success");
      alertDiv.classList.add("alert-primary");
      alertDiv.innerHTML = "<i class='bi bi-exclamation-circle me-2'></i><strong>Information</strong><br> Le nom de domaine n'a pas été reconnu.";
    }
  });
  



document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired");

    // Ajout de l'écouteur d'événement sur le bouton "Vérifier"
    document.getElementById("checkUrlButton").addEventListener("click", function() {
        try {
            const url = document.getElementById("checkUrlInput").value;
            const authUrls = [
"https://www.antai.gouv.fr/",
"https://www.service-public.fr/",
"https://www.amendes.gouv.fr/",
"https://www.stationnement.gouv.fr/",
"https://www.ameli.fr/",
"https://www.caf.fr/",
"https://www.lassuranceretraite.fr/",
"https://cyber.gouv.fr/",
"https://www.education.gouv.fr/",
"https://www.pole-emploi.fr/",
"https://www.impots.gouv.fr/",
"https://www.anah.fr/",
"https://app.dvf.etalab.gouv.fr/",
"https://www.legifrance.gouv.fr/",
"https://www.federationpeche.fr/",
"https://www.cartedepeche.fr/",
"https://www.interieur.gouv.fr/",
"https://solidarites-sante.gouv.fr/",
"https://www.laposte.fr/",
"https://secure.digiposte.fr/identification-plus",
"https://www.france-services.gouv.fr/",
"https://transparence.sante.gouv.fr/",
"https://www.masecurite.interieur.gouv.fr/",
"https://fildariane.diplomatie.gouv.fr/",
"https://www.mesdroitssociaux.gouv.fr/",
"https://www.cesu.urssaf.fr/",
"https://www.urssaf.fr/",
"https://www.demarches-simplifiees.fr/"
           ];

            const isAuthInputUrl = authUrls.some(authInputUrl => url.startsWith(authInputUrl));
            const checkUrlInput = document.getElementById("checkUrlInput");
            const checkUrlLabel = document.getElementById("checkUrlLabel");

            if (isAuthInputUrl) {
                console.log("url authentique");
                checkUrlInput.classList.remove("is-invalid");
                checkUrlInput.classList.add("is-valid");
                checkUrlLabel.classList.remove("invalid-feedback", "d-none");
                checkUrlLabel.classList.add("valid-feedback");
                checkUrlLabel.innerHTML = "<i class='bi bi-check-circle me-2'></i><strong>Ce lien est sûr !</strong> Le nom de domaine est authentique.";

            } else {
                console.log("url non authentique");
                checkUrlInput.classList.remove("is-valid");
                checkUrlInput.classList.add("is-invalid");
                checkUrlLabel.classList.remove("valid-feedback", "d-none");
                checkUrlLabel.classList.add("invalid-feedback");
                checkUrlLabel.innerHTML = "<i class='bi bi-exclamation-circle me-2'></i><strong>Information</strong> Le nom de domaine n'a pas été reconnu.";
            }
        } catch (error) {
            console.error("Erreur lors de la vérification de l'URL :", error);
        }
    });



  //   // Past Button
  //   document.getElementById("pastUrl").addEventListener("click", async function() {
  //     try {
  //         // Ask permission to read the clipboard
  //         await navigator.permissions.query({ name: "clipboard-read" }).then(async (result) => {
  //             if (result.state === "granted" || result.state === "prompt") {
  //                 const text = await navigator.clipboard.readText();
  //                 document.getElementById("checkUrlInput").value = text;
  //                 console.log("Texte collé depuis le presse-papiers :", text);
  //             } else {
  //                 console.error("Permission refusée pour lire le presse-papiers");
  //             }
  //         });
  //     } catch (error) {
  //         console.error("Erreur lors du collage du texte depuis le presse-papiers :", error);
  //     }
  // });




});