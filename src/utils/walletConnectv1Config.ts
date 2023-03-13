import WalletConnect from "@walletconnect/client";
import LegacySignClient from "@walletconnect/client";
import { LiveWalletDetails } from "../state/liveWalletsState";

interface SetupWalletConnectProps {
	uri: string;
	liveWallets: LiveWalletDetails[];
}

export let walletConnectV1: any;

export function setupWalletConnectV1(props: SetupWalletConnectProps) {
	console.log("setup wc v1 called");
	walletConnectV1 = new LegacySignClient({
		uri: props.uri,
		// Required
		clientMeta: {
			description: "a no-frills wallet for developers",
			url: "https://devwallet.in",
			icons: ["https://i.postimg.cc/htrktKHF/stapleverse-pegion.png"],
			name: "Dev-Wallet",
		},
	});

	// Subscribe to session requests
	walletConnectV1.on("session_request", (error, payload) => {
		console.log("wcv1 listener", "session_request triggered");
		if (error) {
			throw error;
		}

		walletConnectV1.approveSession({
			accounts: ["0x6E71899C11BdEdb84392E461309e4c912e6ba038"],
			chainId: 1,
		});

		// Handle Session Request

		/* payload:
    {
      id: 1,
      jsonrpc: '2.0'.
      method: 'session_request',
      params: [{
        peerId: '15d8b6a3-15bd-493e-9358-111e3a4e6ee4',
        peerMeta: {
          name: "WalletConnect Example",
          description: "Try out WalletConnect v1.0",
          icons: ["https://example.walletconnect.org/favicon.ico"],
          url: "https://example.walletconnect.org"
        }
      }]
    }
    */
	});

	// Subscribe to call requests
	walletConnectV1.on("call_request", (error, payload) => {
		if (error) {
			throw error;
		}

		// Handle Call Request

		/* payload:
    {
      id: 1,
      jsonrpc: '2.0'.
      method: 'eth_sign',
      params: [
        "0xbc28ea04101f03ea7a94c1379bc3ab32e65e62d3",
        "My email is john@doe.com - 1537836206101"
      ]
    }
    */
	});

	walletConnectV1.on("disconnect", (error, payload) => {
		if (error) {
			throw error;
		}

		// Delete connector
	});
}
