import { Web3WalletTypes } from "@walletconnect/web3wallet";
import { Image, Text, View } from "dripsy";
import { Button } from "react-native";
import { useLiveWalletsState } from "../../state/liveWalletsState";
import { Core } from "@walletconnect/core";
import Client, { Web3Wallet } from "@walletconnect/web3wallet";
import { SessionTypes } from "@walletconnect/types";
import { web3wallet } from "../../utils/web3WalletConfig";
import {
	ConnectedDappDetails,
	useConnectedDappsState,
} from "../../state/connectedDappsState";
import { getSdkError } from "@walletconnect/utils";

export interface ConnectionRequestSheetProps {
	proposal: Web3WalletTypes.SessionProposal | null;
	walletAddress: string;
}

const liveWalletsState = useLiveWalletsState.getState();

export default function ConnectionRequestSheet(
	props: ConnectionRequestSheetProps
) {
	const cancelRequest = () => {
		web3wallet.rejectSession({
			id: props.proposal!.id,
			reason: getSdkError("USER_REJECTED_METHODS"),
		});
	};

	const acceptRequest = async () => {
		const namespaces: SessionTypes.Namespaces = {};

		const requiredNamespaces = props.proposal!.params.requiredNamespaces;

		Object.keys(requiredNamespaces).forEach((key) => {
			const accounts: string[] = [];

			accounts.push(`eip155:1:${props.walletAddress}`);

			namespaces[key] = {
				accounts,
				methods: requiredNamespaces[key].methods,
				events: requiredNamespaces[key].events,
			};
		});

		await web3wallet
			.approveSession({
				id: props.proposal ? props.proposal.id : 0,
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
	};

	return (
		<View variant="layout.child_view_0" sx={{ flexDirection: "column" }}>
			<Text variant="text.body_large" sx={{ color: "light", my: "$2" }}>
				Connection Request
			</Text>
			<Image
				source={{
					uri: "https://github.com/ethereum-optimism/brand-kit/blob/main/assets/images/Profile-Logo.png",
				}}
				sx={{ width: 100, height: 100 }}
			/>
			<Text variant="body_small" sx={{ color: "light", my: "$2" }}>
				You have a connection request from:{" "}
				{props.proposal
					? props.proposal.params.proposer.metadata.name
					: ""}
			</Text>
			<View
				sx={{
					width: "80%",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Button
					title="Cancel"
					color="red"
					onPress={() => {
						cancelRequest();
					}}
				/>
				<Button
					title="Ok"
					color="green"
					onPress={() => {
						acceptRequest();
					}}
				/>
			</View>
		</View>
	);
}
