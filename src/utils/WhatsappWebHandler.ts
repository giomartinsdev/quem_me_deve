import { Client, LocalAuth } from "whatsapp-web.js";
import { generate } from "qrcode-terminal";

export class WhatsappWebClient {
  public client: Client;

  constructor() {
    console.log("Initializing WhatsappWebClient...");

    this.client = new Client({
      authStrategy: new LocalAuth(),
      puppeteer: {
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      },
    });

    this.client.on("ready", () => {
      console.log("WhatsappWebClient client is running!");
    });

    this.client.on("qr", (qr) => {
      console.log("QR code received, generating...");
      generate(qr, { small: true });
    });

    this.client.on("authenticated", () => {
      console.log("Client authenticated!");
    });

    this.client.on("auth_failure", (msg) => {
      console.error("Authentication failure:", msg);
    });

    this.client.on("disconnected", (reason) => {
      console.log("Client was logged out", reason);
    });

    this.client.initialize();
    console.log("Client initialization called.");
  }
}