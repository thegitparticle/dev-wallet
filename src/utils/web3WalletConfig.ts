import { Core } from "@walletconnect/core";
import Client, { Web3Wallet } from "@walletconnect/web3wallet";
import { SessionTypes } from "@walletconnect/types";
// @ts-expect-error - `@env` is a virtualised module via Babel config.
import { WALLETCONNECT_PROJECT_ID } from "react-native-dotenv";
import { LiveWalletDetails } from "../state/liveWalletsState";

const core = new Core({
	projectId: WALLETCONNECT_PROJECT_ID,
});

export let web3wallet: Client;

export async function web3walletSetup(liveWallets: LiveWalletDetails[]) {
	web3wallet = await Web3Wallet.init({
		core,
		metadata: {
			name: "Dev Wallet",
			description: "a no-frills wallet for developers",
			url: "https://devwallet.in",
			icons: ["https://i.postimg.cc/htrktKHF/stapleverse-pegion.png"],
		},
	});

	web3wallet.on("session_proposal", async (proposal) => {
		console.log("web3wallet listener", "session_proposal triggered");

		const namespaces: SessionTypes.Namespaces = {};

		const requiredNamespaces = proposal.params.requiredNamespaces;

		Object.keys(requiredNamespaces).forEach((key) => {
			const accounts: string[] = [];

			accounts.push(
				"eip155:1:0x6E71899C11BdEdb84392E461309e4c912e6ba038"
			);

			namespaces[key] = {
				accounts,
				methods: requiredNamespaces[key].methods,
				events: requiredNamespaces[key].events,
			};
		});

		const session = await web3wallet.approveSession({
			id: proposal.id,
			namespaces: namespaces,
		});
	});
}
