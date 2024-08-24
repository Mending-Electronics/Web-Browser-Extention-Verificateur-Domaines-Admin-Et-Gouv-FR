// background.js
const authUrls = [
  "https://www.antai.gouv.fr/",
  "https://www.impots.gouv.fr/",
  "https://www.legifrance.gouv.fr/",
  "https://www.service-public.fr/",
  "https://cyber.gouv.fr/",
  "https://app.dvf.etalab.gouv.fr/",
  "https://www.ameli.fr/",
  "https://www.pole-emploi.fr/",
  "https://www.caf.fr/",
  "https://www.lassuranceretraite.fr/",
  "https://www.anah.gouv.fr/",
  "https://www.interieur.gouv.fr/",
  "https://www.education.gouv.fr/",
  "https://solidarites-sante.gouv.fr/",
  "https://www.laposte.fr/",
  "https://secure.digiposte.fr/identification-plus",
  "https://www.mesdroitssociaux.gouv.fr/",
  "https://www.cesu.urssaf.fr/",
  "https://www.demarches-simplifiees.fr/",
  "https://www.masecurite.interieur.gouv.fr/"
];

    async function checkActiveTab() {
    try {
      let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tab && tab.url) {
        const isAuthUrl = authUrls.some(url => tab.url.startsWith(url));
        if (isAuthUrl) {
          // Inject script to check for <body> element
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => !!document.querySelector('body')
          }, (results) => {
            if (results && results[0] && results[0].result) {
              chrome.action.setIcon({ path: "icon/icon_notified.png" });
              chrome.runtime.sendMessage({ found: true });
              console.log("element found!");
            } else {
              chrome.action.setIcon({ path: "icon/icon_disabled.png" });
              chrome.runtime.sendMessage({ found: false });
              console.log("element not found.");
            }
          });
        } else {
          chrome.action.setIcon({ path: "icon/icon_disabled.png" });
          chrome.runtime.sendMessage({ found: false });
          console.log("url: not a Gouv. URL");
        }
      } else {
        chrome.action.setIcon({ path: "icon/icon_disabled.png" });
        chrome.runtime.sendMessage({ found: false });
        console.log("url: no url found.");
      }
    } catch (error) {
      chrome.action.setIcon({ path: "icon/icon_disabled.png" });
      chrome.runtime.sendMessage({ found: false });
      console.log(error);
    }
  }
  
  chrome.tabs.onActivated.addListener(checkActiveTab);
  chrome.tabs.onUpdated.addListener(checkActiveTab);
  

