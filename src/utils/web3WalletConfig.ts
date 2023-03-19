import { Core } from "@walletconnect/core";
import Client, { Web3Wallet } from "@walletconnect/web3wallet";
import { SessionTypes } from "@walletconnect/types";
// @ts-expect-error - `@env` is a virtualised module via Babel config.
import { WALLETCONNECT_PROJECT_ID } from "react-native-dotenv";
import {
	LiveWalletDetails,
	useLiveWalletsState,
} from "../state/liveWalletsState";
import {
	ConnectedDappDetails,
	useConnectedDappsState,
} from "../state/connectedDappsState";

const core = new Core({
	projectId: WALLETCONNECT_PROJECT_ID,
});

export let web3wallet: Client;

const liveWalletsState = useLiveWalletsState.getState();

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

			accounts.push(`eip155:1:${liveWallets[0].address}`);

			namespaces[key] = {
				accounts,
				methods: requiredNamespaces[key].methods,
				events: requiredNamespaces[key].events,
			};
		});

		await web3wallet
			.approveSession({
				id: proposal.id,
				namespaces: namespaces,
			})
			.then((session) => {
				const dappDetails: ConnectedDappDetails = {
					name: session.peer.metadata.name,
					icon: session.peer.metadata.icons[0],
					description: session.peer.metadata.description,
					dappKey: session.peer.publicKey,
					topic: session.topic,
					url: session.peer.metadata.url,
				};

				useConnectedDappsState.setState((state) => ({
					dapps: [...state.dapps, dappDetails],
				}));
			})
			.catch((error) => {
				console.log("error approving session", error);
			});
	});
}
