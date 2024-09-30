import { getMoment, displayEndOfTheScript } from "./utils/defaultMethods";
import { WhatsappWebClient } from "./utils/WhatsappWebHandler";
async function main() {
  const startOfTheScript = getMoment();
  const whatasappWebClient = new WhatsappWebClient()
  console.log(whatasappWebClient)

  displayEndOfTheScript(startOfTheScript);
}





main();